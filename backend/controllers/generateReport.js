import { generateReport } from '../reports/sampleReport.js';
import SampleModel from '../models/SampleModel.js';

// @desc    Generate and return PDF report.
// @route   GET /api/v1/generate-pdf/:id
// @access  Private
const getReport = async (req, res, next) => {
  const data = await SampleModel.findById(req.params.id);

  generateReport(res, data);
};

export { getReport };
