import { Contact } from './contact.model';

export interface Customer {
  _id?: string;
  customerName: string;
  customerAddress: {
    streetAddress: string;
    city: string;
    postalCode: string;
    country: string;
  };
  customerId: string;
  customerRef: string;
  contacts?: Contact[];
}
