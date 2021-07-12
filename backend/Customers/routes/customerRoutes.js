// Package imports
import express from 'express';

// Controller imports
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from '../controllers/customerController.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/').post(createCustomer).get(getAllCustomers);
router.route('/:id').get(getCustomerById).put(updateCustomer);

export default router;
