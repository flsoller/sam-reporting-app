import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';

// Load env configuration
dotenv.config();

// Set database connection
connectDatabase();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
