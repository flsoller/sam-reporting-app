//
// This file contains building blocks for reusable sections to be used
// in a report template.
//

// Font types
const font = 'Helvetica';
const boldFont = 'Helvetica-Bold';

// Universal page header
export function createHeader(doc, instrumentName) {
  doc
    .rect(0, 0, 595.28, 80)
    .fill('#b5b5b5')
    .fillColor('black')
    .fontSize(20)
    .text('Instrument Protocol', 25, 18)
    .moveTo(0, 40)
    .lineTo(340, 40)
    .stroke()
    .fontSize(18)
    .font(boldFont)
    .text(`${instrumentName || 'Not Provided'}`, 25, 50);
}

// Universal page footer
export function createFooter(doc, technicianName) {
  doc
    .rect(0, 761.89, 595.28, 80)
    .fill('#b5b5b5')
    .moveTo(595, 815.89)
    .lineTo(400, 815.89)
    .stroke()
    .fill('black')
    .fontSize(16)
    .font(font)
    .text('MSAsafety.com', 430, 797)
    .fontSize(10)
    .text('Maintenance done by:', 25, 780)
    .text(`${technicianName || 'MSA Technician'}`, 25, 795);
}

// Informal data block (vertical aligned key / value pair)
export function createVerticalBlock(doc, key, value, posX, posY) {
  const width = 150;
  const height = 20;

  doc
    .rect(posX, posY, width, height)
    .fill('#474747')
    .rect(posX, posY + height, width, height)
    .fill('#b5b5b5')
    .fontSize(12)
    .fill('white')
    .font(boldFont)
    .text(key, posX, posY + 6, { width: width, align: 'center' })
    .fill('black')
    .font(font)
    .text(value, posX, posY + 25, { width: width, align: 'center' });
}

// Informal data block (horizontal aligned key / value pair)
export function createHorizontalBlock(doc, key, value, posX, posY) {
  const widthKey = 100;
  const widthValue = 150;
  const height = 20;

  doc
    .rect(posX, posY, widthKey, height)
    .fill('#474747')
    .rect(posX + widthKey, posY, widthValue, height)
    .fill('#b5b5b5')
    .fontSize(12)
    .fill('white')
    .font(boldFont)
    .text(key, posX, posY + 6, { width: widthKey, align: 'center' })
    .fill('black')
    .font(font)
    .text(value, posX + widthKey, posY + 6, {
      width: widthValue,
      align: 'center',
    });
}

// Create section header
export function createSectionHeader(doc, string, posX, posY) {
  doc.font(boldFont).fontSize(18).text(string, posX, posY);
}

// Create sub heading
export function createSubHeading(doc, string, posX, posY) {
  doc.font(boldFont).fontSize(14).text(string, posX, posY);
}

// Create divider
export function createDivider(doc, posY) {
  doc.moveTo(25, posY).lineTo(565, posY).stroke();
}

// Create sensor data row
export function createSensorDataRow(doc, sensorData, index, posX, posY) {
  const spacingMultiplier = 110;

  createDivider(doc, posY - 8 + index * spacingMultiplier);

  createSubHeading(
    doc,
    `Sensor #${index + 1}: ${sensorData.calGasName}`,
    posX,
    posY + index * spacingMultiplier
  );

  createHorizontalBlock(
    doc,
    'Sensor S/N',
    sensorData.serialNumber,
    posX,
    posY + 20 + index * spacingMultiplier
  );

  createHorizontalBlock(
    doc,
    `Alarm Levels`,
    `A1:  ${sensorData.alarmLvls.alarmOne}        A2:  ${sensorData.alarmLvls.alarmTwo}`,
    posX + 290,
    posY + 20 + index * spacingMultiplier
  );

  createVerticalBlock(
    doc,
    `Zero Cal (${sensorData.calGasUnit})`,
    `Pre:  ${sensorData.preZero}       After:  ${sensorData.aftZero}`,
    posX,
    posY + 45 + index * spacingMultiplier
  );

  createVerticalBlock(
    doc,
    `Span Cal (${sensorData.calGasUnit})`,
    `Pre:  ${sensorData.preCal}       After:  ${sensorData.aftCal}`,
    posX + 195,
    posY + 45 + index * spacingMultiplier
  );

  if (sensorData.alarmLvls.stel && sensorData.alarmLvls.twa) {
    createVerticalBlock(
      doc,
      `Timebased Alarms`,
      `STEL:  ${
        sensorData.alarmLvls.stel ? sensorData.alarmLvls.stel : '--'
      }        TWA:  ${
        sensorData.alarmLvls.twa ? sensorData.alarmLvls.twa : '--'
      }`,
      posX + 390,
      posY + 45 + index * spacingMultiplier
    );
  }
}
