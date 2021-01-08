// Package imports
import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';

// Route imports
import maintenanceData from './routes/maintenanceData.js';
import generateReport from './routes/generateReport.js';
import customerRoutes from './routes/customerRoutes.js';

// File imports
import { errorHandler } from './middleware/errorMiddleware.js';

// Load env configuration
dotenv.config();

// Establish database connection
connectDatabase();

// Run express
const app = express();

// JSON body-parser middleware
app.use(express.json());

// Mount routers
app.use('/api/v1/maintenance-data', maintenanceData);
app.use('/api/v1/generate-pdf', generateReport);
app.use('/api/v1/customers', customerRoutes);

// Error handling middleware
app.use(errorHandler);

// Define server port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
