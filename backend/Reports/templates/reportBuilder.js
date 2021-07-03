//
// This file contains building blocks for reusable sections to be used
// in a report template.
//

// Universal page header
export function createHeader(doc, instrumentName) {
  doc
    .rect(0, 0, 595.28, 80)
    .fill('gray')
    .fillColor('black')
    .fontSize(20)
    .text('Instrument Protocol', 25, 18)
    .moveTo(0, 40)
    .lineTo(340, 40)
    .stroke()
    .fontSize(18)
    .font('Helvetica-Bold')
    .text(`${instrumentName || 'Not Provided'}`, 25, 50);
}

// Universal page footer
export function createFooter(doc, technicianName) {
  doc
    .rect(0, 761.89, 595.28, 80)
    .fill('gray')
    .moveTo(595, 815.89)
    .lineTo(400, 815.89)
    .stroke()
    .fill('black')
    .fontSize(16)
    .font('Helvetica')
    .text('MSAsafety.com', 430, 797)
    .fontSize(10)
    .text('Maintenance done by:', 25, 780)
    .text(`${technicianName || 'MSA Technician'}`, 25, 795);
}

// Informal data block (vertical aligned key / value pair)
export function createVerticalBlock(doc, key, value, posX, posY) {
  const width = 150;
  const height = 30;

  doc
    .rect(posX, posY, width, height)
    .fill('gray')
    .rect(posX, posY + 30, width, height)
    .fill('#b5b5b5')
    .fontSize(14)
    .fill('black')
    .font('Helvetica-Bold')
    .text(key, posX, posY + 10, { width: width, align: 'center' })
    .font('Helvetica')
    .text(value, posX, posY + 40, { width: width, align: 'center' });
}

// Informal data block (horizontal aligned key / value pair)
export function createHorizontalBlock(doc, key, value, posX, posY) {
  const widthKey = 125;
  const widthValue = 100;
  const height = 30;

  doc
    .rect(posX, posY, widthKey, height)
    .fill('gray')
    .rect(posX + 125, posY, widthValue, height)
    .fill('#b5b5b5')
    .fontSize(14)
    .fill('black')
    .font('Helvetica-Bold')
    .text(key, posX, posY + 10, { width: widthKey, align: 'center' })
    .font('Helvetica')
    .text(value, posX + widthKey, posY + 10, {
      width: widthValue,
      align: 'center',
    });
}

// Create section header
export function createSectionHeader(doc, string, posX, posY) {
  doc.font('Helvetica-Bold').fontSize(18).text(string, posX, posY);
}

// Create sensor data row
