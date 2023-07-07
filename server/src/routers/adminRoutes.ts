import express from 'express';
import { sendVerificationMail } from '../controllers/adminController.js';

const router = express.Router();

router.post('/send-verification-link', sendVerificationMail);

export default router;
