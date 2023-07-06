import multer from 'multer';
import sharp from 'sharp';
import randomstring from 'randomstring';
import { Model, Op } from 'sequelize';
import crypto from 'crypto';

import User from '../models/UserModel.js';
import sendMail from '../utils/email.js';
import { signToken } from '../utils/helpers.js';
import { comparePasswords } from '../utils/helpers.js';
import { correctPasswordResetToken } from '../utils/helpers.js';

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
    cb(new Error('Not an image! Please upload only images.'));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single('photo');

// NOTE: Resize photo
export const resizeUserPhoto = async (req: Request | any, res: Response | any, next: any) => {
  if (!req.file) return next();

  const hashString = randomstring.generate(10);

  req.file.filename = `user-${hashString}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`./public/img/users/${req.file.filename}`);

  next();
};

// sign up user
export const signup = async (req: Request | any, res: Response | any, next: any) => {
  const newUser: any = await User.build({
    fullName: req.body?.fullName,
    email: req.body?.email,
    photo: req.file?.filename,
    password: req.body?.password,
    confirmPassword: req.body?.confirmPassword,
  });

  // NOTE: Give user an admin role
  newUser.role = req.role;

  // STEP: save user to database
  await newUser.save();
  const host = process.env.NODE_ENV === 'production' ? process.env.HOST : req.get('host');

  // STEP: Create Token and Verification
  const token = signToken(newUser.id);
  const verificationLink = `${req.protocol}://${host}/auth/admin/new/token/${token}`;

  // STEP: Save token to database
  newUser.set({
    ntoken: token,
  });
  await newUser.save();

  // STEP:  send verification link
  await new sendMail(newUser, verificationLink).sendAdminVerificationMail();

  res.status(200).json({
    status: 'success',
    data: {
      newUser,
    },
  });
};

// Log in user
export const login = async (req: Request | any, res: Response | any, next: any) => {
  const { email, password } = req.body;

  // STEP: check if email and password is not empty
  if (!email || !password) {
    new Error('Please provide an email and password');
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
  if (!user || !(await comparePasswords(user.password, password))) {
    new Error('Incorrect email or password');
  }

  // STEP: Verify User
  user.set({ isVerified: true });
  user.save();

  //STEP: Assign user a login token
  const token = signToken(user.id);

  delete user.dataValues['password'];

  res.status(200).json({
    status: 'success',
    token,
    data: { user },
  });
};

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
    return new Error('There is no user with the email address');
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

    return new Error('There was an error sending the email. Try again later');
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
    return new Error('Token is invalid or has expired');
  }

  // STEP: 3) Update password propety for the user
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = null;
  user.passwordResetExpires = null;

  res.status(200).json({
    status: 'success',
  });
};
