// @desc    Get maintenance data
// @route   GET /api/v1/maintenance-data
// @access  Private
const getMaintenanceData = async (req, res, next) => {
  res.status(200).json({
    success: true,
    data: 'Maintenance Data Object here',
  });
};

export { getMaintenanceData };
