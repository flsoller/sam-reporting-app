import asyncHandler from '../../middleware/asyncHandler.js';
import bcrypt from 'bcryptjs';
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

// @desc    Update user profile
// @route   POST /api/v1/users/profile
// @access  Private
export const updateUser = asyncHandler(async (req, res, next) => {
  const { email, password, name, newPassword } = req.body;

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;

    if (password) {
      if (newPassword && (await user.checkPassword(password))) {
        user.password = newPassword;
      } else if (!(await user.checkPassword(password))) {
        res.status(404);
        throw new Error('User not updated');
      }
    }

    const updatedUser = await user.save();
    const token = createToken(updatedUser._id);
    const { exp } = jwt.verify(token, process.env.JWT_KEY);

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token,
      expiration: exp,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
