import express from "express";
import {
  getAllUser,
  getUser,
  deleteUser,
} from "../controllers/userController.js";
import {
  login,
  forgotPassword,
  resetPassword,
  setPassword,
  adminRole,
  protect,
} from "../controllers/authController.js";
import { restrictTo } from "../utils/helpers.js";

const router = express.Router();

router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/user/set-password/new/:token", setPassword);
router.patch("/reset-password/new/:token", resetPassword);

router.use(protect);
router.get("/users/", getAllUser);
router.get("/users/:id", getUser);

router.delete("/users/:id", restrictTo("admin"), deleteUser);

export default router;
