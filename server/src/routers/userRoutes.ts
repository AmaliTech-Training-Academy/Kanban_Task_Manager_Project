import express from 'express';
import {
  login,
  forgotPassword,
  resetPassword,
  setPassword,
  adminRole,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/user/set-password/new/:token', setPassword);
router.patch('/reset-password/new/:token', resetPassword);


export default router;
