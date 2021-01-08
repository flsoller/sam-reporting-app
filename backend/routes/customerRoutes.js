// Package imports
import express from 'express';

// Controller imports
import { createCustomer } from '../controllers/customerController.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/').post(createCustomer);

export default router;
