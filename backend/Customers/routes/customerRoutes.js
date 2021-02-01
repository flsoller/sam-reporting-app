// Package imports
import express from 'express';

// Controller imports
import {
  createCustomer,
  getAllCustomers,
} from '../controllers/customerController.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/').post(createCustomer).get(getAllCustomers);

export default router;
