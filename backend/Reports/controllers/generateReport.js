import asyncHandler from '../../middleware/asyncHandler.js';
import { generateReport } from '../templates/portableInstrument.js';

import PortableMaintenanceModel from '../../Maintenance/models/PortableMaintenanceModel.js';

// @desc    Generate and return PDF report for portable maintenance.
// @route   GET /api/v1/reports/portable/:jobId
// @access  Private
export const getPortableReport = asyncHandler(async (req, res, next) => {
  const jobId = req.params.jobId;

  const portableMaintenance = await PortableMaintenanceModel.find({
    jobID: jobId,
  });

  generateReport(res, portableMaintenance);
});
