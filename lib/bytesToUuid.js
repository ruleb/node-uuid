/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset, skipDashes) {
  var i = offset || 0;
  var bth = byteToHex;
  var dash = (skipDashes ? '' : '-');
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + dash +
          bth[buf[i++]] + bth[buf[i++]] + dash +
          bth[buf[i++]] + bth[buf[i++]] + dash +
          bth[buf[i++]] + bth[buf[i++]] + dash +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;
