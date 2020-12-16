import PDFDocument from 'pdfkit';

const generateReport = (res, data) => {
  const doc = new PDFDocument();

  doc.pipe(res);

  doc.text('Hello World!');
  doc.text(
    `This is data passed into the generator: ${data.name}, ${data.desc}, ${data.serialNumber} `
  );

  doc.end();
};

export { generateReport };
