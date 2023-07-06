import express from 'express';
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
  adminRole,
  resizeUserPhoto,
  uploadUserPhoto,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/admin/sign-up', uploadUserPhoto, resizeUserPhoto, adminRole, signup);
router.post('/admin/login', login);
router.post('/forgot-password', forgotPassword);
router.patch('/reset-password/new/:token', resetPassword);

export default router;
