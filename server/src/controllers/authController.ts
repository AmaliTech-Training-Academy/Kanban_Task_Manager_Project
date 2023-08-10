import multer from "multer";
import sharp from "sharp";
import randomstring from "randomstring";
import { Model, Op } from "sequelize";
import crypto from "crypto";
import jwt from "jsonwebtoken";

import User from "../models/UserModel.js";
import sendMail from "../utils/email.js";
import { signToken, stringToken } from "../utils/helpers.js";
import {
  comparePasswords,
  correctPasswordResetToken,
  createAndSendToken,
  changePasswordAfter,
} from "../utils/helpers.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

//NOTE: MIDDLWARES

export const protect = async (
  req: Request | any,
  res: Response | any,
  next: any
) => {
  // STEP: Getting token and checking if it exist
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in. Please log in to get access", 401)
    );
  }

  // STEP: Verify token
  // NOTE: We verfiy if the data was modified and if the token is expired
  const decode: any = jwt.verify(token, process.env.JWT_SECRET || "");

  const currentUser = await User.findByPk(decode.id);

  // STEP:  Check if user still exist
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token does not exits", 401)
    );
  }

  // STEP:  Check user change password after the token was issued
  if (changePasswordAfter(decode.iat, currentUser)) {
    next(
      new AppError("user recenty changed password!. Please log in again", 401)
    );
  }

  // STEP: GRANT ACCESS TO PROTECT ROUTE
  req.user = currentUser;
  next();
};

export const adminRole = (
  req: Request | any,
  res: Response | any,
  next: any
) => {
  req.role = "admin";
  next();
};

const multerStorage = multer.memoryStorage();

// NOTE: only images
const multerFilter = (req: Request | any, file: any, cb: any) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image. Please upload only images", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single("photo");

// NOTE: Resize photo
export const resizeUserPhoto = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    if (!req.file) return next();

    const hashString = randomstring.generate(10);

    req.file.filename = `user-${hashString}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat("jpeg")
      .jpeg({ quality: 90 })
      .toFile(`./public/img/users/${req.file.filename}`);

    next();
  }
);

// sign up user
export const signup = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
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
    const host =
      process.env.NODE_ENV === "production"
        ? process.env.HOST
        : req.get("host");

    // STEP: Create Token and Verification
    const token = stringToken(newUser);
    await newUser.save();
    const verificationLink = `${req.protocol}://${host}/api/v1/users/admin/new/token/${token}`;

    // STEP:  send verification link
    await new sendMail(newUser, verificationLink).sendAdminVerificationMail();

    res.status(200).json({
      status: "success",
      message:
        "Congratulations! You have successfully signed up as an administrator.",
    });
  }
);

// Log in user
export const login = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    const { email, password } = req.body;

    // STEP: check if email and password is not empty
    if (!email || !password) {
      return next(new AppError("Please provide an email and password", 404));
    }

    // STEP: Fetch User
    const user: Model | any = await User.findOne({
      where: { email },
      attributes: {
        exclude: [
          "about",
          "rank",
          "token",
          "status",
          "createdAt",
          "specialization",
          "confirmPassword",
          "passwordChangedAt",
          "passwordResetToken",
          "passwordResetExpires",
        ],
      },
    });

    // STEP: check if user password && input password match
    if (!user || !(await comparePasswords(password, user.password))) {
      return next(new AppError("Incorrect email or password", 404));
    }

    // STEP: Verify User
    if (!user.isVerified) {
      return next(
        new AppError(
          "Your account is not verified. Please verify your account",
          401
        )
      );
    }

    //STEP: Assign user a login token
    const token = signToken(user.id);

    delete user.dataValues["password"];
    delete user.dataValues["isVerified"];

    createAndSendToken(user, 200, req, res);
  }
);

// Forgot Password
export const forgotPassword = async (
  req: Request | any,
  res: Response | any,
  next: any
) => {
  const { email } = req.body;

  const user: Model | any = await User.findOne({
    where: { email },
    attributes: {
      exclude: [
        "rank",
        "token",
        "status",
        "createdAt",
        "specialization",
        "confirmPassword",
        "passwordChangedAt",
        "passwordResetToken",
        "passwordResetExpires",
      ],
    },
  });

  // STEP: Check if use exist
  if (!user) {
    return next(new AppError("There is no user with the email address", 404));
  }
  // STEP: Generate a token
  const resetToken = correctPasswordResetToken(user);
  await user.save();

  const host =
    process.env.NODE_ENV === "production" ? process.env.HOST : req.get("host");

  const resetTokenURL = `${req.protocol}://${host}/api/v1/users/reset-password/new/${resetToken}`;

  // STEP: Send Password Reset mail
  try {
    await new sendMail(user, resetTokenURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message:
        "Password reset link has been sent to your email. Please check your inbox.",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return next(
      new AppError("There was an error sending the email. Try again later", 500)
    );
  }
};

export const resetPassword = async (
  req: Request | any,
  res: Response | any,
  next: any
) => {
  // STEP: Get token from
  const token = req.params.token;

  const hashToken = crypto.createHash("sha256").update(token).digest("hex");

  const user: Model | any = await User.findOne({
    where: {
      passwordResetToken: hashToken,
      passwordResetExpires: { [Op.gt]: Date.now() },
    },
  });

  // STEP:  If token has not expired, and there is a user, set the new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  if (!(req.body.password === req.body.confirmPassword)) {
    return next(new AppError("Passwords are not the same", 400));
  }
  // STEP: 3) Update password propety for the user
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = null;
  user.passwordResetExpires = null;
  user.save();

  res.status(200).json({
    status: "success",
    message: "Your password has been successfully reset.",
  });
};

export const verifyAdmin = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    // STEP: Get token form URL
    const token = req.params.token;

    const hashToken = crypto.createHash("sha256").update(token).digest("hex");

    const user: Model | any = await User.findOne({
      where: {
        token: hashToken,
      },
    });

    if (!user) {
      return next(new AppError("Token is invalid or has expired", 400));
    }

    // STEP: Verify user
    user.isVerified = true;
    user.token = "";
    await user.save();

    res.status(200).json({
      status: "success",
      message:
        "Administrator authenticated. You can now proceed with logging in.",
    });
  }
);

// NOTE: set password
export const setPassword = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    // STEP: Get token from URL
    const token = req.params.token;

    const hashToken = crypto.createHash("sha256").update(token).digest("hex");

    const user: Model | any = await User.findOne({
      where: {
        token: hashToken,
      },
    });

    // STEP: Check if user exists
    if (!user) {
      return next(new AppError("Token is invalid or has expired", 400));
    }

    user.isVerified = true;

    // STEP: Update password propety for the user
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.token = "";
    await user.save();

    res.status(200).json({
      status: "success",
    });
  }
);
