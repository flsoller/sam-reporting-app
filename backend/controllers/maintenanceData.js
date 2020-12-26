import SampleModel from '../models/SampleModel.js';

// @desc    Get all maintenance db entries
// @route   GET /api/v1/maintenance-data
// @access  Private
export const getMaintenanceData = async (req, res, next) => {
  const allMaintenanceData = await SampleModel.find({});

  try {
    res.status(200).json({
      success: true,
      data: allMaintenanceData,
    });
  } catch (error) {
    console.log(error);
  }
};

// @desc    Create new entry for maintenance data document
// @route   POST /api/v1/maintenance-data
// @access  Private
export const addMaintenanceData = async (req, res, next) => {
  const maintenanceData = await SampleModel.create(req.body);

  try {
    res.status(200).json({
      success: true,
      data: maintenanceData,
    });
  } catch (error) {
    console.log(error);
  }
};
