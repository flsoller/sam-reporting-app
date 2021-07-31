import asyncHandler from '../../middleware/asyncHandler.js';

import PortableMaintenanceModel from '../models/PortableMaintenanceModel.js';

// @desc    Create new entry for maintenance data document (portableInstruments)
// @route   POST /api/v1/maintenance-data/portable
// @access  Private
export const addPortableMaintenanceData = asyncHandler(
  async (req, res, next) => {
    const portableData = await PortableMaintenanceModel.create({
      ...req.body,
      // user object becomes available on req object through auth middleware for protected routes
      technician: req.user._id,
    });

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
// @route   GET /api/v1/maintenance-data/portable/<<customer>>
// @access  Private
export const getPortableMaintDataByCustomer = asyncHandler(
  async (req, res, next) => {
    const customer = req.params.customer;

    const portableMaintenance = await PortableMaintenanceModel.find({
      customer: customer,
    });

    if (portableMaintenance.length >= 1) {
      res.status(200).json(portableMaintenance);
    } else {
      res.status(400);
      throw new Error('No data available.');
    }
  }
);

// @desc    Get portable maintenance data by jobId
// @route   GET /api/v1/maintenance-data/portable/id/<<jobId>>
// @access  Private
export const getPortableMaintDataByJobId = asyncHandler(
  async (req, res, next) => {
    const jobId = req.params.jobId;

    const portableMaintenance = await PortableMaintenanceModel.find({
      jobID: jobId,
    });

    if (portableMaintenance.length >= 1) {
      res.status(200).json(portableMaintenance);
    } else {
      res.status(400);
      throw new Error('No data available.');
    }
  }
);
