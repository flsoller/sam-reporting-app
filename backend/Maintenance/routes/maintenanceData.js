// Package imports
import express from 'express';

// Middleware
import { protectedRoute } from '../../middleware/authMiddleware.js';

// Controller imports
import {
  addPortableMaintenanceData,
  getPortableMaintDataByCustomer,
  getPortableMaintDataByJobId,
} from '../controllers/maintenanceData.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/portable').post(protectedRoute, addPortableMaintenanceData);
router
  .route('/portable/:customer')
  .get(protectedRoute, getPortableMaintDataByCustomer);
router
  .route('/portable/id/:jobId')
  .get(protectedRoute, getPortableMaintDataByJobId);

export default router;
