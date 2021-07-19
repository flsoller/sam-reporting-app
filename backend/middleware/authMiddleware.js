import jwt from 'jsonwebtoken';

import asyncHandler from './asyncHandler.js';
import User from '../Auth/models/userModel.js';

export const protectedRoute = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  let token;

  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      token = authHeader.split(' ')[1];

      const decodedToken = jwt.verify(token, process.env.JWT_KEY);

      req.user = await User.findById(decodedToken.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Incorrect token. Not authorized.');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Missing token. Request invalid.');
  }
});
