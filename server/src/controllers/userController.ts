import User from "../models/UserModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
const excludeFields = [
  "role",
  "token",
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

// NOTE: Get user
export const getUser = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    const id = req.params.id;

    const user = await User.findOne({
      where: { id },
      attributes: { exclude: excludeFields },
    });

    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  }
);

// NOTE: Delete User
export const deleteUser = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    const id = req.params.id;

    const user = await User.findByPk(id);

    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }

    await user.destroy();

    res.status(200).json({
      status: "success",
      data: null,
    });
  }
);

// NOTE: Update User
export const updateUser = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    const id = req.params.id;

    const user = await User.update(
      {
        fullName: req.body?.fullName,
        email: req.body?.email,
        specialization: req.body?.specialization,
        rank: req.body?.rank,
        status: req.body?.status,
      },
      { where: { id } }
    );

    if (!user) {
      return next(new AppError("No user found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: { user },
    });
  }
);
