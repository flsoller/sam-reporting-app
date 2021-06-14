import mongoose from 'mongoose';
import SensorModel from './SensorModel.js';

const PortableInstrumentModelSchema = new mongoose.Schema({
  instrumentName: String,
  instrumentSerialNumber: String,
  testDate: Date,
  sensors: [SensorModel],
});

export default PortableInstrumentModelSchema;
