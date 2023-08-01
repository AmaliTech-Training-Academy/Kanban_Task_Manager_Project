import { Model, Op } from "sequelize";

import Task from "../models/taskModel.js";
import User from "../models/UserModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { getDate } from "../utils/helpers.js";

const excludeFields = [
  "TaskAndAssignee",
  "passwordChangedAt",
  "passwordResetToken",
  "passwordResetExpires",
  "password",
  "specialization",
  "rank",
  "token",
  "status",
  "isVerified",
  "createdAt",
];

// NOTE: CREATE TASK
export const createTask = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    const assignee = req.body?.assignee;

    // STEP: Get Assignees
    const users: Model | any = await User.findAll({
      where: {
        fullName: {
          [Op.in]: assignee,
        },
        isVerified: true,
      },
    });

    if (users.length === 0) {
      return next(
        new AppError(
          "No verified assignees found. Please assign verified assignees to this task.",
          401
        )
      );
    }

    // STEP: Get Due Date
    const dueDate = getDate(req.body.dueDate);

    // STEP: Create New Task
    const newTask = await Task.create({
      title: req.body?.title,
      description: req.body?.description,
      assignee: req.body?.assignee,
      dueDate: dueDate,
    });

    // STEP: Assign users to users to task
    users.forEach((user: Model | any) => {
      user.addTasks(newTask);
    });

    res.status(200).json({
      statut: "success",
      data: { newTask },
    });
  }
);

// NOTE: GET ALL TASK
export const allTask = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    let doc;
    if (!(req.query.include === "assignees")) {
      doc = await Task.findAll();
    } else {
      doc = await Task.findAll({
        include: { model: User, attributes: { exclude: excludeFields } },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
    }

    res.status(200).json({
      statut: "success",
      data: {
        doc,
      },
    });
  }
);

// NOTE: DELETE TASK
export const deleteTask = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    //STEP: Get task id from URL
    const taskId = req.params.id;

    const task = await Task.findByPk(taskId);

    if (!task) {
      return next(new AppError("task not found", 404));
    }

    // STEP: Remove task
    await task?.destroy();

    res.status(200).json({
      statut: "success",
    });
  }
);

// NOTE: UPDATE TASK
export const updateTask = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    // STEP: Get task id from URL
    const taskId = req.params.id;

    const task: Model | any = await Task.findOne({
      where: { id: taskId },
      include: { model: User, attributes: { exclude: excludeFields } },
    });

    if (!task) {
      return next(new AppError("task not found", 404));
    }

    const assignee = req.body.assignee;

    const users: Model | any = await User.findAll({
      where: {
        fullName: {
          [Op.in]: assignee,
        },
        isVerified: true,
      },
    });

    if (users.length === 0) {
      return next(new AppError("No assignees. Please assign assignees", 401));
    }

    //STEP: Remove all assignees attached to task
    task.setUsers([]);

    task.title = req.body.title;
    task.description = req.body.description;
    task.dueDate = req.body.dueDate;

    //STEP: Update task assignees
    users.forEach((user: Model | any) => {
      user.addTasks(task);
    });

    await task.save();

    res.status(200).json({
      statu: "success",
      data: { task },
    });
  }
);

// NOTE: Get TASK
export const getTask = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    //STEP: Get task id from URL
    const taskId = req.params.id;

    let doc;
    if (!(req.query.include === "assignees")) {
      doc = await Task.findByPk(taskId);
    } else {
      doc = await Task.findOne({
        where: { id: taskId },
        include: { model: User, attributes: { exclude: excludeFields } },
      });
    }

    if (!doc) {
      return next(new AppError("task not found", 404));
    }

    res.status(200).json({
      statut: "success",
      data: {
        doc,
      },
    });
  }
);
