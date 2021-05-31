import { Sensor } from './sensor.model';

export interface PortableUnit {
  instrumentName: string;
  customer: string;
  serialNumber: string;
  testDate: Date;
  sensorData: Sensor[];
}
