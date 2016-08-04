"user strict";

var validator = require("./index");

var validCodes =
[
  "GB123456789",
  "GB123456789123",
  "GBGD001",
  "GBHA599",
  "GB123456789 123",
  "ATUABCD1234",
  "BG123456789",
  "BG1234567890",
  "FR0A123456789",
  "RO12",
  "RO1234567890",
];

var invalidCodes =
[
  "123456789",
  "AA123456789",
  "GB123456789-#@$!",
  "GBGD500",
  "GBHA400",
  "ATUABCD12345",
  "BG12345678",
  "BG12345678901",
  "FRIA123456789",
  "FR0O123456789",
  "FR0A12345678",
  "FR0A1234567890",
  "RO1",
  "RO12345678901"
];
console.log("Testing valid codes");
var foundError = false;
validCodes.forEach(function(code) {
  var valid = validator.isValid(code)
  console.log("%s : %s", valid ? "valid" : "\033[31minvalid\033[0m", code);
  if (!valid) {
    foundError = true;
  }
});
console.log("===========================================");

console.log("Testing invalid codes");
invalidCodes.forEach(function(code) {
  var valid = validator.isValid(code)
  console.log("%s : %s", validator.isValid(code) ? "\033[31mvalid\033[0m" : "invalid", code);
  if (valid) {
    foundError = true;
  }
});
console.log("===========================================");

if (foundError) {
  process.exit(1);
} else {
  process.exit(0);
}
