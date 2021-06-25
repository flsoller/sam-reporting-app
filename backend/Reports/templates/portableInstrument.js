import PDFDocument from 'pdfkit';

import { createHeader, createFooter } from './reportBuilder.js';

export const generateReport = (res, data) => {
  const doc = new PDFDocument({ size: 'A4', margin: 25 });

  doc.pipe(res);

  createHeader(doc);
  createFooter(doc);

  doc.end();
};
