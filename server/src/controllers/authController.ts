import multer from 'multer';
import sharp from 'sharp';
import randomstring from 'randomstring';

import User from '../models/UserModel.js';

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

  // STEP: 1 save user to database
  newUser.save();
  // STEP: TODO: 2 send verification link

  res.status(200).json({
    status: 'success',
    data: {
      newUser,
    },
  });
};
