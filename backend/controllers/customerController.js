import asyncHandler from '../middleware/asyncHandler.js';
import Customer from '../models/CustomerModel.js';

// @desc    Create new customer in database
// @route   POST /api/v1/customers
// @access  Private
export const createCustomer = asyncHandler(async (req, res, next) => {
  const { customerName, customerAddress, customerId, customerRef } = req.body;

  // Check if customer already exists in db
  const customerExists = await Customer.findOne({
    customerName,
    customerAddress,
  });

  if (customerExists) {
    res.status(400);
    throw new Error('Customer already exsists');
  }

  // Create new customer
  const customer = await Customer.create({
    customerName,
    customerAddress,
    customerId,
    customerRef,
  });

  if (customer) {
    res.status(201).json({ message: 'Customer was created' });
  } else {
    res.status(400);
    throw new Error('Invalid customer data');
  }
});
