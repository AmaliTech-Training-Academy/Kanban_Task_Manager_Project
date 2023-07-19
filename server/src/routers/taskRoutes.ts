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
const router = express.Router();

router.post("/task", createTask);
router.get("/task/all", allTask);
router.get("/task/:id", getTask);
router.get("/task-and-assignees/:id", getTaskAndAssignee);
router.get("/task-and-assignees/all", allTaskAndAssignee);
router.patch("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;
