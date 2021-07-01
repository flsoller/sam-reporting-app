import PDFDocument from 'pdfkit';

import { createHeader, createFooter } from './reportBuilder.js';

export const generateReport = (res, data) => {
  const doc = new PDFDocument({ size: 'A4', margin: 25 });

  doc.pipe(res);

  data[0].instruments.forEach((instrument, index) => {
    createHeader(doc, instrument.instrumentName);

    createFooter(doc);

    if (index !== data[0].instruments.length - 1) {
      doc.addPage();
    }
  });

  doc.end();
};
