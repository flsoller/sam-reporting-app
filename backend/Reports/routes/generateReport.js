// Package imports
import express from 'express';

// Controller imports
import { getPortableReport } from '../controllers/generateReport.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/portable/:jobId').get(getPortableReport);

export default router;
