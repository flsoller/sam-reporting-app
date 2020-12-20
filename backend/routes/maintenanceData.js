// Package imports
import express from 'express';

// Controller imports
import {
  getMaintenanceData,
  addMaintenanceData,
} from '../controllers/maintenanceData.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/').get(getMaintenanceData).post(addMaintenanceData);

export default router;
