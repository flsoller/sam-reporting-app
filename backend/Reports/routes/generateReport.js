// Package imports
import express from 'express';

// Middleware
import { protectedRoute } from '../../middleware/authMiddleware.js';

// Controller imports
import { getPortableReport } from '../controllers/generateReport.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/portable/:jobId').get(protectedRoute, getPortableReport);

export default router;
