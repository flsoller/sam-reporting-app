import PortableMaintenanceModel from '../models/PortableMaintenanceModel.js';

// @desc    Get all maintenance db entries
// @route   GET /api/v1/maintenance-data
// @access  Private
// export const getMaintenanceData = async (req, res, next) => {
//   const allMaintenanceData = await SampleModel.find({});

//   try {
//     res.status(200).json(allMaintenanceData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// @desc    Create new entry for maintenance data document (portableInstruments)
// @route   POST /api/v1/maintenance-data/portable
// @access  Private
export const addPortableMaintenanceData = async (req, res, next) => {
  const portableData = await PortableMaintenanceModel.create(req.body);

  try {
    res.status(200).json({
      success: true,
      message: 'Maintenance data saved.',
    });
  } catch (error) {
    console.log(error);
  }
};
