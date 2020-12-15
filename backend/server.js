// Package imports
import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';

// Route imports
import maintenanceData from './routes/maintenanceData.js';

// Load env configuration
dotenv.config();

// Establish database connection
connectDatabase();

// Run express
const app = express();

// Mount routers
app.use('/api/v1/maintenance-data', maintenanceData);

// Define server port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
