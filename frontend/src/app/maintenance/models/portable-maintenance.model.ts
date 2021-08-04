import { User } from 'src/app/auth/user.model';
import { PortableUnit } from './portable.model';

export interface PortableMaintenance {
  jobID: string;
  customer: string;
  instruments: PortableUnit[];
  technician: string;
}
