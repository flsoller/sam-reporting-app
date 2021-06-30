import mongoose from 'mongoose';

const SensorModelSchema = new mongoose.Schema(
  {
    serialNumber: String,
    calGasName: String,
    calGasConc: Number,
    calGasUnit: {
      type: String,
      enum: ['%LEL', 'PPM', '%Vol'],
    },
    preZero: Number,
    aftZero: Number,
    preCal: Number,
    aftCal: Number,
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
      stel: Number,
      twa: Number,
    },
  },
  { _id: false }
);

export default SensorModelSchema;
