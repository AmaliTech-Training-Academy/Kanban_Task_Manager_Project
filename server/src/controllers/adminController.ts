import { Model } from 'sequelize';

import User from '../models/UserModel.js';
import sendMail from '../utils/email.js';
import { stringToken } from '../utils/helpers.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

// NOTE: Send user verification
export const sendVerificationMail = catchAsync(
  async (req: Request | any, res: Response | any, next: any) => {
    const { email } = req.body;

    const user: Model | any = await User.findOne({
      where: { email },
    });

    // STEP: Check if use exist
    if (!user) {
      return next(new AppError('There is no user with that email address', 404));
    }

    if (user.isVerified) {
      return next(new AppError(' User already has an account', 401));
    }

    // STEP: Generate a token
    const resetToken = stringToken(user);
    await user.save();

    //STEP: Verification URL
    const host = process.env.NODE_ENV === 'production' ? process.env.HOST : req.get('host');
    const verificationURL = `${req.protocol}://${host}/api/user/set-password/new/${resetToken}`;

    // STEP: Send Verification mail
    try {
      await new sendMail(user, verificationURL).sendUserVerificationMail();
    } catch (err) {
      return next(new AppError('There was an error sending the email. Try again later', 500));
    }

    res.status(200).json({
      status: 'success',
      message: 'Mail sent',
    });
  }
);
