import mongoose from 'mongoose';
import PortableInstrumentModel from './PortableInstrumentModel.js';

const PortableMaintenanceModelSchema = new mongoose.Schema({
  jobID: String,
  customer: String,
  instruments: [PortableInstrumentModel],
});

export default mongoose.model(
  'PortableMaintenanceModel',
  PortableMaintenanceModelSchema
);
