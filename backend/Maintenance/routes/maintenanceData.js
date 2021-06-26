// Package imports
import express from 'express';

// Controller imports
import {
  addPortableMaintenanceData,
  getPortableMaintDataByCustomer,
  getPortableMaintDataByJobId,
} from '../controllers/maintenanceData.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/portable').post(addPortableMaintenanceData);
router.route('/portable/:customer').get(getPortableMaintDataByCustomer);
router.route('/portable/id/:jobId').get(getPortableMaintDataByJobId);

export default router;
