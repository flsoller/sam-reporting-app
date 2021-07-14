import asyncHandler from '../../middleware/asyncHandler.js';
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

// @desc    Return all customers from database
// @route   GET /api/v1/customers
// @access  Private
export const getAllCustomers = asyncHandler(async (req, res, next) => {
  const allCustomers = await Customer.find({});
  res.status(200).json(allCustomers);
});

// @desc    Return single customer from database
// @route   GET /api/v1/customers/:id
// @access  Private
export const getCustomerById = asyncHandler(async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    res.status(200).json(customer);
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// @desc    Update customer
// @route   PUT /api/v1/customers/:id
// @access  Private
export const updateCustomer = asyncHandler(async (req, res, next) => {
  const { customerName, customerAddress, customerId, customerRef } = req.body;

  const customer = await Customer.findById(req.params.id);

  if (customer) {
    customer.customerName = customerName;
    customer.customerAddress = customerAddress;
    customer.customerId = customerId;
    customer.customerRef = customerRef;

    const updatedCustomer = await customer.save();

    res.status(200).json({
      message: `${updatedCustomer.customerName} was updated.`,
    });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// @desc    Delete customer
// @route   DELETE /api/v1/customers/:id
// @access  Private
export const deleteCustomer = asyncHandler(async (req, res, next) => {
  const customer = await Customer.findById(req.params.id);

  if (customer) {
    await customer.remove();

    res.status(200).json({
      message: `${customer.customerName} was deleted.`,
    });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});
