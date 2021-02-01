import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: [true, 'Customer name is required.'],
  },
  customerAddress: {
    address: {
      type: String,
      required: [true, 'Customer address is required.'],
    },
    city: {
      type: String,
      required: [true, 'City is required.'],
    },
    postalCode: {
      type: String,
      required: [true, 'Postal code is required.'],
    },
    country: {
      type: String,
      required: [true, 'Country is required.'],
    },
  },
  customerId: {
    type: String,
  },
  customerRef: {
    type: String,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
