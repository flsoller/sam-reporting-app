import mongoose from 'mongoose';
import SensorModel from './SensorModel.js';

const PortableInstrumentModelSchema = new mongoose.Schema(
  {
    instrumentName: String,
    instrumentSerialNumber: String,
    testDate: Date,
    sensorData: [SensorModel],
  },
  { _id: false }
);

export default PortableInstrumentModelSchema;
