import express from 'express';
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
  setPassword,
  adminRole,
  resizeUserPhoto,
  uploadUserPhoto,
  verifyAdmin,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/admin/sign-up', uploadUserPhoto, resizeUserPhoto, adminRole, signup);
router.post('/admin/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/user/set-password/new/:token', setPassword);
router.patch('/reset-password/new/:token', resetPassword);
router.patch('/admin/new/token/:token', verifyAdmin);




export default router;
