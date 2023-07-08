import multer from 'multer';
import sharp from 'sharp';
import randomstring from 'randomstring';
import { Model, Op } from 'sequelize';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import User from '../models/UserModel.js';
import sendMail from '../utils/email.js';
import { signToken, stringToken } from '../utils/helpers.js';
import { comparePasswords, correctPasswordResetToken } from '../utils/helpers.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

export const adminRole = (req: Request | any, res: Response | any, next: any) => {
  req.role = 'admin';
  next();
};

const multerStorage = multer.memoryStorage();

// NOTE: only images
const multerFilter = (req: Request | any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image. Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single('photo');

// NOTE: Resize photo
export const resizeUserPhoto = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    if (!req.file) return next();

    const hashString = randomstring.generate(10);

    req.file.filename = `user-${hashString}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`./public/img/users/${req.file.filename}`);

    next();
  }
);

// sign up user
export const signup = catchAsync(async (req: Request | any, res: Response | any, next: any) => {
  const newUser: any = User.build({
    fullName: req.body?.fullName,
    email: req.body?.email,
    photo: req.file?.filename,
    password: req.body?.password,
    confirmPassword: req.body?.confirmPassword,
  });

  // NOTE: Give user an admin role
  newUser.role = req.role;

  // STEP: save user to database
  const host = process.env.NODE_ENV === 'production' ? process.env.HOST : req.get('host');

  // STEP: Create Token and Verification
  const token = stringToken(newUser);
  await newUser.save();
  const verificationLink = `${req.protocol}://${host}/auth/admin/new/token/${token}`;

  // STEP:  send verification link
  await new sendMail(newUser, verificationLink).sendAdminVerificationMail();

  res.status(200).json({
    status: 'success',
    data: {
      newUser,
    },
  });
});

// Log in user
export const login = catchAsync(async (req: Request | any, res: Response | any, next: any) => {
  const { email, password } = req.body;

  // STEP: check if email and password is not empty
  if (!email || !password) {
    return next(new AppError('Please provide an email and password', 404));
  }

  // STEP: Fetch User
  const user: Model | any = await User.findOne({
    where: { email },
    attributes: {
      exclude: [
        'rank',
        'token',
        'status',
        'createdAt',
        'specialization',
        'passwordConfirm',
        'passwordChangedAt',
        'passwordResetToken',
        'passwordResetExpires',
      ],
    },
  });

  // STEP: check if user password && input password match
  if (!user || !(await comparePasswords(password, user.password))) {
    return next(new AppError('Incorrect email or password', 404));
  }

  // STEP: Verify User
  if (!user.isVerified) {
    return next(new AppError('Your account is not verified. Please verify your account', 401));
  }

  //STEP: Assign user a login token
  const token = signToken(user.id);

  delete user.dataValues['password'];

  res.status(200).json({
    status: 'success',
    token,
    data: { user },
  });
});

// Forgot Password
export const forgotPassword = async (req: Request | any, res: Response | any, next: any) => {
  const { email } = req.body;

  const user: Model | any = await User.findOne({
    where: { email },
    attributes: {
      exclude: [
        'rank',
        'token',
        'status',
        'createdAt',
        'specialization',
        'passwordConfirm',
        'passwordChangedAt',
        'passwordResetToken',
        'passwordResetExpires',
      ],
    },
  });

  // STEP: Check if use exist
  if (!user) {
    return next(new AppError('There is no user with the email address', 404));
  }
  // STEP: Generate a token
  const resetToken = correctPasswordResetToken(user);
  await user.save();

  const host = process.env.NODE_ENV === 'production' ? process.env.HOST : req.get('host');

  const resetTokenURL = `${req.protocol}://${host}/auth/reset-password/new/${resetToken}`;

  // STEP: Send Password Reset mail
  try {
    await new sendMail(user, resetTokenURL).sendPasswordReset();

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email',
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return next(new AppError('There was an error sending the email. Try again later', 500));
  }
};

export const resetPassword = async (req: Request | any, res: Response | any, next: any) => {
  // STEP: Get token from
  const token = req.params.token;

  const hashToken = crypto.createHash('sha256').update(token).digest('hex');

  const user: Model | any = await User.findOne({
    where: {
      passwordResetToken: hashToken,
      passwordResetExpires: { [Op.gt]: Date.now() },
    },
  });

  // STEP:  If token has not expired, and there is a user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  // STEP: 3) Update password propety for the user
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  user.save();

  res.status(200).json({
    status: 'success',
  });
};

export const verifyAdmin = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    // STEP: Get token form URL
    const token = req.params.token;

    const hashToken = crypto.createHash('sha256').update(token).digest('hex');

    const user: Model | any = await User.findOne({
      where: {
        token: hashToken,
      },
    });

    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }

    // STEP: Verify user
    user.isVerified = true;
    user.token = '';
    await user.save();

    res.status(200).json({
      status: 'success',
    });
  }
);

// NOTE: set password
export const setPassword = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    // STEP: Get token from
    const token = req.params.token;

    const hashToken = crypto.createHash('sha256').update(token).digest('hex');

    const user: Model | any = await User.findOne({
      where: {
        token: hashToken,
      },
    });

    // STEP: Check if user exists
    if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
    }

    user.isVerified = true;

    // STEP: Update password propety for the user
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    user.token = '';
    await user.save();

    res.status(200).json({
      status: 'success',
    });
  }
);
