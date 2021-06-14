import mongoose from 'mongoose';

const SensorModelSchema = new mongoose.Schema({
  serialNumber: String,
  calGasName: String,
  calGasConc: Number,
  calGasUnit: {
    type: String,
    enum: ['%LEL', 'PPM', '%Vol'],
  },
  refGas: {
    isUsed: Boolean,
    refGasName: String,
    refGasConc: Number,
    refGasUnit: String,
  },
  alarmLvls: {
    alarmOne: Number,
    alarmTwo: Number,
    alarmThree: Number,
    alarmFour: Number,
    additional: {
      stel: Number,
      twa: Number,
    },
  },
});

export default mongoose.model('SensorModel', SensorModelSchema);
