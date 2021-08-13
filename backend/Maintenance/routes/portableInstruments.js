// Package imports
import express from 'express';

// Middleware
import { protectedRoute } from '../../middleware/authMiddleware.js';

// Controller imports
import {
  addPortableMaintenanceData,
  getPortableMaintDataByCustomer,
  getPortableMaintDataByJobId,
} from '../controllers/portableInstruments.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('').post(protectedRoute, addPortableMaintenanceData);
router.route('/:customer').get(protectedRoute, getPortableMaintDataByCustomer);
router.route('/id/:jobId').get(protectedRoute, getPortableMaintDataByJobId);

export default router;
