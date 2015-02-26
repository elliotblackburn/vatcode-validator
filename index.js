"user strict"

//  Thanks to https://github.com/Sembiance/email-validator for the inspiration to make a simple
//form / syntax checker for something I needed.

var Patterns = require("./patterns");

function isValid(vatcode)
{
  vatcode = vatcode.toUpperCase();

  //Select the correct pattern based on the country code
  var countryCode = vatcode.substring(0, 2);
  var countryPattern = Patterns.getPattern(countryCode);

  if(typeof countryPattern === 'undefined')
    return false;

  //Validate using the country's regex patterns
  var checker = new RegExp(countryPattern);
  return checker.test(vatcode);
}

exports.isValid = isValid;