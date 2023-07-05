import multer from 'multer';
import sharp from 'sharp';
import randomstring from 'randomstring';
import { Model } from 'sequelize';

import User from '../models/UserModel.js';
import sendMail from '../utils/email.js';
import { signToken } from '../utils/helpers.js';
import { comparePasswords } from '../utils/helpers.js';

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
  await new sendMail(newUser, verificationLink).sendConfirmationEmail();

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
