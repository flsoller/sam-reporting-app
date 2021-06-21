// Package imports
import express from 'express';

// Controller imports
import {
  addPortableMaintenanceData,
  getPortableMaintDataByCustomer,
} from '../controllers/maintenanceData.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/portable').post(addPortableMaintenanceData);
router.route('/portable/:customer').get(getPortableMaintDataByCustomer);

export default router;
