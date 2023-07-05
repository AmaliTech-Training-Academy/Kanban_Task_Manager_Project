import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

// NOTE: Create Token
export const signToken = (id: string) => {
  const JWT_SECRET: any = process.env.JWT_SECRET;
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// NOTE: Confirm Passwords
export const comparePasswords = async (userPassword: string, candidatePassowrd: string) => {
  return await bcrypt.compare(userPassword, candidatePassowrd);
};
