import { generateReport } from '../reports/sampleReport.js';

// @desc    Generate and return PDF report.
// @route   GET /api/v1/maintenance-data
// @access  Private
const getReport = async (req, res, next) => {
  const data = {
    name: 'AwesomeName',
    desc: 'AwesomeDescription',
    serialNumber: '1234567',
  };

  generateReport(res, data);
  //   res.status(200).json({
  //     success: true,
  //     data: 'Maintenance Data Object here',
  //   });
};

export { getReport };
