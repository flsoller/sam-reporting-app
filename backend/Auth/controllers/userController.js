import asyncHandler from '../../middleware/asyncHandler.js';
import jwt from 'jsonwebtoken';

import { createToken } from '../../utils/jwtHelper.js';
import User from '../models/userModel.js';

// @desc    Authenticate user and get token
// @route   POST /api/v1/users/login
// @access  Public
export const authUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.checkPassword(password))) {
    const token = createToken(user._id);
    const { exp } = jwt.verify(token, process.env.JWT_KEY);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
      expiration: exp,
    });
  } else {
    res.status(401);
    throw new Error('Email or Password invalid');
  }
});

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
