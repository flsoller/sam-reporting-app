import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import User from '../Auth/models/userModel.js';
import connectDatabase from '../config/database.js';

dotenv.config();

connectDatabase();

const users = [
  {
    name: 'Admin User',
    email: 'admin@exmple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Charles Kane',
    email: 'charles@exmple.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

const addUsers = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    console.log('Users imported');
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

addUsers();
