import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { Model } from "sequelize";
import AppError from "./appError.js";

// NOTE: Create Token
export const signToken = (id: string) => {
  const JWT_SECRET: any = process.env.JWT_SECRET;
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// NOTE: Confirm Passwords
export const comparePasswords = async (
  candidatePassword: string,
  userPassword: string
) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// NOTE: Generate Randon String
export const correctPasswordResetToken = (user: any) => {
  const resetToken = crypto.randomBytes(32).toString("hex");

  user.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

export const stringToken = (user: any) => {
  const stringToken = crypto.randomBytes(32).toString("hex");

  user.token = crypto.createHash("sha256").update(stringToken).digest("hex");

  return stringToken;
};

export const restrictTo = (role: string) => {
  return (req: any, res: any, next: any) => {
    if (!role.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};

export const createAndSendToken = (
  user: any,
  statusCode: number,
  req: Request | any,
  res: Response | any
) => {
  const token = signToken(user.id);
  const JWT_COOKIE_EXPIRES_IN: any = process.env.JWT_COOKIE_EXPIRES_IN;
  const cookieOption: any = {
    expirs: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  };

  // NOTE: Secure cookie https in production
  if (process.env.NODE_ENV === "production") {
    cookieOption.secure = true;
  }

  // Send Cookie
  res.cookie("jwt", token, cookieOption);

  res.status(statusCode).json({
    status: "success",
    token,
    data: { user },
  });
};

export const changePasswordAfter = function (JWTTimestamp: any, user: any) {
  const passwordChangedAt: any = user.passwordChangedAt.getTime() / 1000;

  if (user.passwordChangedAt) {
    const changeTimeStamp = parseInt(passwordChangedAt, 10);
    return JWTTimestamp < changeTimeStamp;
  }
  // NOTE: if FALSE means password was NOT change
  return false;
};

// NOTE: Get Date
export const getDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].join("-");
};
