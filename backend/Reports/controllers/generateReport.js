import asyncHandler from '../../middleware/asyncHandler.js';
import { generateReport } from '../templates/portableInstrument.js';

// Models
import PortableMaintenanceModel from '../../Maintenance/models/PortableMaintenanceModel.js';
import UserModel from '../../Auth/models/userModel.js';

// @desc    Generate and return PDF report for portable maintenance.
// @route   GET /api/v1/reports/portable/:jobId
// @access  Private
export const getPortableReport = asyncHandler(async (req, res, next) => {
  const jobId = req.params.jobId;

  const portableMaintenance = await PortableMaintenanceModel.findOne({
    jobID: jobId,
  });

  const technician = await UserModel.findById(
    portableMaintenance.technician
  ).select('name email');

  if (portableMaintenance && technician) {
    generateReport(res, portableMaintenance, technician);
  } else {
    throw new Error('Error while generating report due to missing data.');
  }
});
