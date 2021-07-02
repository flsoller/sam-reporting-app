import PDFDocument from 'pdfkit';

import {
  createHeader,
  createFooter,
  createDataBlock,
  createSectionHeader,
} from './reportBuilder.js';

export const generateReport = (res, data) => {
  const doc = new PDFDocument({ size: 'A4', margin: 25 });

  doc.pipe(res);

  data[0].instruments.forEach((instrument, index) => {
    // Page header
    createHeader(doc, instrument.instrumentName);

    //
    // General data section
    //
    createSectionHeader(doc, 'General Data', 25, 100);

    createDataBlock(
      doc,
      'Serial Number',
      instrument.instrumentSerialNumber,
      25,
      130
    );

    createDataBlock(
      doc,
      'Test Date',
      instrument.testDate.toISOString().split('T')[0],
      220,
      130
    );

    //
    // Sensor data section
    //
    createSectionHeader(doc, 'Sensor Data', 25, 250);

    // Page footer
    createFooter(doc);

    // Create new page for next instrument in array
    if (index !== data[0].instruments.length - 1) {
      doc.addPage();
    }
  });

  doc.end();
};
