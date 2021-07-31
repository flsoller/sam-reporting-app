import mongoose from 'mongoose';
import PortableInstrumentModel from './PortableInstrumentModel.js';

const PortableMaintenanceModelSchema = new mongoose.Schema({
  jobID: {
    type: String,
    required: [true, 'Job ID is required'],
    unique: true,
  },
  technician: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'A user needs to be associated with the maintenance.'],
  },
  customer: {
    type: String,
    required: [true, 'Customer is required.'],
  },
  instruments: [PortableInstrumentModel],
});

export default mongoose.model(
  'PortableMaintenance',
  PortableMaintenanceModelSchema
);
