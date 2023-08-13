import express from "express";
import {
  getAllUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import {
  signup,
  adminRole,
  resizeUserPhoto,
  uploadUserPhoto,
  verifyAdmin,
  login,
  forgotPassword,
  resetPassword,
  setPassword,
  protect,
} from "../controllers/authController.js";
import {
  bulkInputUsers,
  sendVerificationMail,
} from "../controllers/adminController.js";
import { restrictTo } from "../utils/helpers.js";

const router = express.Router();

router.post("/admin/sign-up", uploadUserPhoto, resizeUserPhoto, adminRole, signup);
router.patch("/admin/new/token/:token", verifyAdmin);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/set-password/new/:token", setPassword);
router.patch("/reset-password/new/:token", resetPassword);

// NOTE: Protect all routes after this middleware
router.use(protect);
router.get("/", getAllUser);
router.get("/:id", getUser);

router.use(restrictTo("admin"));
router.route("/:id").delete(deleteUser).patch(updateUser);

//  NOTE: Restricto admins
router.use(restrictTo("admin"));
router.post("/admin/send-verification-link", sendVerificationMail);
router.post("/admin/bulk-into-users", bulkInputUsers);

export default router;
