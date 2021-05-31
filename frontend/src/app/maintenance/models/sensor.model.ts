enum gasUnit {
  LEL = '%LEL',
  PPM = 'ppm',
  VOL = '%Vol',
}

export interface Sensor {
  calGasName: string;
  calGasConc: number;
  calGasUnit: gasUnit;
  refGas?: {
    isUsed: boolean;
    refGasName: string;
    refGasConc: number;
    refGasUnit: gasUnit;
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
