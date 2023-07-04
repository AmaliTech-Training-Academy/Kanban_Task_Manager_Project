import express from 'express';
import {
  adminRole,
  resizeUserPhoto,
  signup,
  uploadUserPhoto,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/admin/sign-up', uploadUserPhoto, resizeUserPhoto, adminRole, signup);

export default router;