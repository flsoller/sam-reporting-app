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
