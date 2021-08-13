// Package imports
import express from 'express';
import * as path from 'path';
import dotenv from 'dotenv';
import connectDatabase from './config/database.js';

// Route imports
import portableInstruments from './Maintenance/routes/portableInstruments.js';
import generateReport from './Reports/routes/generateReport.js';
import customerRoutes from './Customers/routes/customerRoutes.js';
import userRoutes from './Auth/routes/userRoutes.js';

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
app.use('/api/v1/maintenance-data/portable', portableInstruments);
app.use('/api/v1/reports', generateReport);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/users', userRoutes);

// Path config
const __dirname = path.resolve();

// Serve prod build index.html from Angular dist folder
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist/frontend')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, 'frontend', 'dist', 'frontend', 'index.html')
    )
  );
}

// Error handling middleware
app.use(errorHandler);

// Define server port
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
