import mongoose from 'mongoose';

const SampleModelSchema = new mongoose.Schema({
  customerName: String,
  installLocation: String,
  street: String,
  city: String,
  country: String,

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
});

export default mongoose.model('SampleModel', SampleModelSchema);
