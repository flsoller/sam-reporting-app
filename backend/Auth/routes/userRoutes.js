// Package imports
import express from 'express';

// Controller imports
import {
  authUser,
  getUserProfile,
  updateUser,
} from '../controllers/userController.js';

// Middleware
import { protectedRoute } from '../../middleware/authMiddleware.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/login').post(authUser);
router
  .route('/profile')
  .get(protectedRoute, getUserProfile)
  .post(protectedRoute, updateUser);

export default router;
