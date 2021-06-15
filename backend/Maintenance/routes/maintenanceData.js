// Package imports
import express from 'express';

// Controller imports
import { addPortableMaintenanceData } from '../controllers/maintenanceData.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/portable').post(addPortableMaintenanceData);

export default router;
