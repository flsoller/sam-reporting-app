import { PortableUnit } from './portable.model';

export interface PortableMaintenance {
  jobID: string;
  customer: string;
  instruments: PortableUnit[];
}
