//
// This file contains building blocks for reusable sections to be used
// in a report template.
//

export function createHeader(doc) {
  doc
    .rect(0, 0, 595.28, 80)
    .fill('gray')
    .fillColor('white')
    .fontSize(18)
    .text('MSA - The Safety Company', 0, 35, { align: 'right' });
}

export function createFooter(doc) {
  doc.rect(0, 761.89, 595.28, 80).fill('gray');
}
