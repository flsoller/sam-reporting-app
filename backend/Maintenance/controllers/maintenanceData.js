import asyncHandler from '../../middleware/asyncHandler.js';

import PortableMaintenanceModel from '../models/PortableMaintenanceModel.js';

// @desc    Create new entry for maintenance data document (portableInstruments)
// @route   POST /api/v1/maintenance-data/portable
// @access  Private
export const addPortableMaintenanceData = asyncHandler(
  async (req, res, next) => {
    const portableData = await PortableMaintenanceModel.create(req.body);

    if (portableData) {
      res.status(201).json({
        success: true,
        message: 'Maintenance data saved.',
      });
    } else {
      throw new Error('Invalid maintenance data');
    }
  }
);

// @desc    Get all portable maintenance entries for specific customer
// @route   GET /api/v1/maintenance-data/portable/
// @access  Private
export const getPortableMaintDataByCustomer = asyncHandler(
  async (req, res, next) => {
    const { customerName } = req.body;

    const portableMaintenance = await PortableMaintenanceModel.findOne({
      customerName,
    });

    if (portableMaintenance) {
      res.status(200).json(portableMaintenance);
    } else {
      res.status(400);
      throw new Error('No data available.');
    }
  }
);
