import PDFDocument from 'pdfkit';

const generateReport = (res, data) => {
  const doc = new PDFDocument();

  doc.pipe(res);

  doc.text('Hello World!');
  doc.text('This is data passed into the generator:');
  doc.text(`
    ${data.customerName}, 
    ${data.installLocation}, 
    ${data.street}, 
    ${data.city}, 
    ${data.country}, 
    ${data.productName}, 
    ${data.serialNumber}, 
    ${data.maintenanceDate}.
    `);

  doc.end();
};

export { generateReport };
