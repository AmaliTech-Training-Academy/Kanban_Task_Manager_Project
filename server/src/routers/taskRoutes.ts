import express from "express";

import {
  createTask,
  allTask,
  deleteTask,
  updateTask,
  allTaskAndAssignee,
  getTask,
  getTaskAndAssignee,
} from "../controllers/taskController.js";
import { protect } from "../controllers/authController.js";
import { restrictTo } from "../utils/helpers.js";
const router = express.Router();

router.use(protect)
router.use(restrictTo("admin"))
router.post("/task", createTask);
router.get("/task/all", allTask);
router.get("/task/:id", getTask);
router.get("/task-and-assignees/:id", getTaskAndAssignee);
router.get("/all-task-and-assignees/", allTaskAndAssignee);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
