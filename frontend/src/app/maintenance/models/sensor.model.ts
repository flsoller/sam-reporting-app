export enum GasUnit {
  LEL = '%LEL',
  PPM = 'PPM',
  VOL = '%Vol',
}

export interface Sensor {
  serialNumber: string;
  calGasName: string;
  calGasConc: number;
  calGasUnit: GasUnit;
  preZero: number;
  aftZero: number;
  preCal: number;
  aftCal: number;
  refGas?: {
    isUsed: boolean;
    refGasName: string;
    refGasConc: number;
    refGasUnit: GasUnit;
  };
  alarmLvls: {
    alarmOne?: number;
    alarmTwo?: number;
    alarmThree?: number;
    alarmFour?: number;
    additional?: {
      stel: number;
      twa: number;
    };
  };
}
