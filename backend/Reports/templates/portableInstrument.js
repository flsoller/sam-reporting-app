import PDFDocument from 'pdfkit';

export const generateReport = (res, data) => {
  const doc = new PDFDocument();

  doc.pipe(res);

  doc.text(
    'This is a placeholder text. Portable device maintenance report to follow.'
  );

  doc.end();
};
