import express from "express";

import {
  createTask,
  allTask,
  deleteTask,
  updateTask,
  // allTaskAndAssignee,
  getTask,
  // getTaskAndAssignee,
} from "../controllers/taskController.js";
import { protect } from "../controllers/authController.js";
import { restrictTo } from "../utils/helpers.js";
const router = express.Router();

router.use(protect)
router.use(restrictTo("admin"))
router.post("/", createTask);
router.get("/", allTask);
router.get("/:id", getTask);
// router.get("/task-and-assignees/:id", getTaskAndAssignee);
// router.get("/all-task-and-assignees/", allTaskAndAssignee);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
