// Package imports
import express from 'express';

// Middleware
import { protectedRoute } from '../../middleware/authMiddleware.js';

// Controller imports
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from '../controllers/customerController.js';

// Initialize router
const router = express.Router();

// Route definitions
router
  .route('/')
  .post(protectedRoute, createCustomer)
  .get(protectedRoute, getAllCustomers);
router
  .route('/:id')
  .get(protectedRoute, getCustomerById)
  .put(protectedRoute, updateCustomer)
  .delete(protectedRoute, deleteCustomer);

export default router;
