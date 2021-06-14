import mongoose from 'mongoose';
import SensorModel from './SensorModel';

const PortableInstrumentModelSchema = new mongoose.Schema({
  instrumentName: String,
  serialNumber: String,
  testDate: Date,
  sensorData: [SensorModel],
});

export default mongoose.model(
  'PortableInstrumentModel',
  PortableInstrumentModelSchema
);
