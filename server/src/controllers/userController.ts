import User from "../models/UserModel.js";
import catchAsync from "../utils/catchAsync.js";

const excludeFields = [
  "role",
  "token",
  "about",
  "create",
  "password",
  "passwordResetExpires",
  "passwordResetToken",
  "createdAt",
  "isVerified",
  "passwordResetExpires",
  "passwordChangedAt",
];

// NOTE: Get all users
export const getAllUser = catchAsync(
  async (req: Request, res: Response | any, next: any) => {
    const allUsers = await User.findAll({
      where: { role: "user" },
      attributes: { exclude: excludeFields },
    });

    res.status(200).json({
      status: "success",
      results: allUsers.length,
      data: { allUsers },
    });
  }
);
