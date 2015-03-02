"user strict";

var validator = require("./index");

var validCodes =
[
  "GB123456789",
  "GB123456789123",
  "GBGD001",
  "GBHA599",
  "GB123456789 123"
];

var invalidCodes =
[
  "123456789",
  "AA123456789",
  "GB123456789-#@$!"
];
console.log("Testing valid codes");
validCodes.forEach(function(code) {
  console.log("%s : %s", validator.isValid(code) ? "valid" : "invalid", code);
});
console.log("===========================================");

console.log("Testing invalid codes");
invalidCodes.forEach(function(code) {
  console.log("%s : %s", validator.isValid(code) ? "valid" : "invalid", code);
});
console.log("===========================================");

//process.exit(0);
