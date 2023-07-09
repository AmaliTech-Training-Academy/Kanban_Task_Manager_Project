import express from 'express';
import { sendVerificationMail } from '../controllers/adminController.js';
import { protect } from '../controllers/authController.js';
import { restrictTo } from '../utils/helpers.js';
import {
  signup,
  adminRole,
  resizeUserPhoto,
  uploadUserPhoto,
  verifyAdmin,
} from '../controllers/authController.js';

const router = express.Router();


router.post('/sign-up', uploadUserPhoto, resizeUserPhoto, adminRole, signup);
router.patch('/new/token/:token', verifyAdmin);
// NOTE: Protect all routes after this middleware
router.use(protect);

//  NOTE: Restricto admins
router.use(restrictTo('admin'));
router.post('/send-verification-link', sendVerificationMail);

export default router;
