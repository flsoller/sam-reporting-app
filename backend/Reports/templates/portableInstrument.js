import PDFDocument from 'pdfkit';
import * as path from 'path';

import {
  createHeader,
  createFooter,
  createVerticalBlock,
  createHorizontalBlock,
  createSectionHeader,
  createSubHeading,
  createSensorDataRow,
} from './reportBuilder.js';

export const generateReport = (res, data, technician) => {
  const doc = new PDFDocument({ size: 'A4', margin: 25 });

  // Path config
  const __dirname = path.resolve();

  const img = path.resolve(
    __dirname,
    'backend',
    'Reports',
    'assets',
    'logo.png'
  );

  doc.pipe(res);

  data.instruments.forEach((instrument, index) => {
    // Page header
    createHeader(doc, instrument.instrumentName, img);

    //
    // General data section
    //
    createSectionHeader(doc, 'General Data', 25, 100);

    createVerticalBlock(
      doc,
      'Serial Number',
      instrument.instrumentSerialNumber,
      25,
      130
    );

    createVerticalBlock(
      doc,
      'Test Date',
      instrument.testDate.toISOString().split('T')[0],
      220,
      130
    );

    //
    // Sensor data section
    //
    createSectionHeader(doc, 'Sensor Data', 25, 190);

    instrument.sensorData.forEach((sensor, index) => {
      createSensorDataRow(doc, sensor, index, 25, 220);
    });

    // Page footer
    createFooter(doc, technician.name, technician.email);

    // Create new page for next instrument in array
    if (index !== data.instruments.length - 1) {
      doc.addPage();
    }
  });

  doc.end();
};
