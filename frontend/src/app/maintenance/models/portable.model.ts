import { Sensor } from './sensor.model';

export enum InstrumentName {
  ALTAIR_BASE = 'Altair (Pro)',
  ALTAIR_4X = 'Altair 4X',
  ALTAIR_5X = 'Altair 5X',
}

export interface PortableUnit {
  instrumentName: string;
  serialNumber: string;
  testDate: Date;
  sensorData: Sensor[];
}
