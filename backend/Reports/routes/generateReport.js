// Package imports
import express from 'express';

// Controller imports
import { getReport } from '../controllers/generateReport.js';

// Initialize router
const router = express.Router();

// Route definitions
router.route('/:id').get(getReport);

export default router;
