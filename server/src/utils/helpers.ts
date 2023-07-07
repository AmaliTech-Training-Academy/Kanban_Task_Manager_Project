import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

// NOTE: Create Token
export const signToken = (id: string) => {
  const JWT_SECRET: any = process.env.JWT_SECRET;
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// NOTE: Confirm Passwords
export const comparePasswords = async (candidatePassword: string, userPassword: string) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// NOTE: Generate Randon String
export const correctPasswordResetToken = (user: any) => {
  const resetToken = crypto.randomBytes(32).toString('hex');

  user.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

export const stringToken = (user: any) => {
  const stringToken = crypto.randomBytes(32).toString('hex');

  user.token = crypto.createHash('sha256').update(stringToken).digest('hex');

  return stringToken;
};

export const restrictTo = (role: string) => {
  return (req: any, res: any, next: any) => {
    if (!role.includes(req.user.role)) {
      return console.log('💥💥💥 You do not have permission to perform this action', 403);
    }
    next();
  };
};
