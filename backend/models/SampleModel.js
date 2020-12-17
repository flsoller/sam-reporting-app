import mongoose from 'mongoose';

const SampleModelSchema = new mongoose.Schema({
  customerData: {
    customerName: String,
    installLocation: String,
    street: String,
    city: String,
    country: String,
    required: [true, 'Please provide customer data'],
  },
  productName: {
    type: String,
    required: [true, 'Please provide a product name'],
  },
  serialNumber: {
    type: String,
    required: [true, 'Please provide a serial number'],
  },
  maintenanceDate: {
    type: Date,
    default: Date.now,
    required: [true, 'Please set a maintenance date'],
  },
  visualInspection: {
    isInletClear: Boolean,
    isUndamaged: Boolean,
    isFilterClean: {
      type: Boolean,
      wasReplaced: Boolean,
    },
  },
  functionalInspection: {
    targetValue: Number,
    targetGas: String,
    unit: {
      enum: ['Vol%', 'ppm', '%LEL'],
    },
    calibrationPre: Number,
    calibrationAft: Number,
  },
  hasPassedInspection: {
    type: Boolean,
    comment: {
      type: String,
      maxlength: [500, 'Comment can not be longer than 500 characters.'],
    },
  },
});
