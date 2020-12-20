import mongoose from 'mongoose';

const SampleModelSchema = new mongoose.Schema({
  customerData: {
    customerName: String,
    installLocation: String,
    street: String,
    city: String,
    country: String,
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
  },
  visualInspection: {
    isInletClear: Boolean,
    isUndamaged: Boolean,
    isFilterClean: {
      wasClean: Boolean,
      wasReplaced: Boolean,
    },
  },
  functionalInspection: {
    targetValue: Number,
    targetGas: String,
    measureUnit: {
      type: String,
      required: true,
      enum: ['Vol%', 'ppm', '%LEL'],
    },
    calibrationPre: Number,
    calibrationAft: Number,
  },
  hasPassedInspection: {
    hasPassed: Boolean,
    comment: {
      type: String,
      maxlength: [500, 'Comment can not be longer than 500 characters.'],
    },
  },
});

export default mongoose.model('SampleModel', SampleModelSchema);
