"user strict"

var GB =
  "^GB[0-9]{9,9}$" +
  "|^GB[0-9]{12,12}$" +
  "|^GBGD[0-9]{3,3}$" +
  "|^GBHA[0-9]{3,3}$";
var AT = "^ATU[A-Z0-9]{8,8}$";
var BE = "^BE[0-9]{10,10}$";
var CY = "^CY[0-9]{8,8}[A-Z]{1,1}$";
var CZ = "^CZ[0-9]{8,10}$"
var DE = "^DE[0-9]{9,9}$"
var DK = "^DK[0-9]{8,8}$"
var EE = "^EE[0-9]{9,9}$"
var ES = "^ES[A-Z0-9]{1,1}[0-9]{7,7}[A-Z0-9]{1,1}$"
var FI = "^FI[0-9]{8,8}$"
var FR = "^FR[A-Z0-9]{2,2}[0-9]{9,9}$"
var GB = "^GB[0-9]{9,9}$|^GB[0-9]{12,12}$|^GBGD[0-9]{3,3}$|^GBHA[0-9]{3,3}$"
var HU = "^HU[0-9]{8,8}$"
var IE = "^IE[0-9]{1,1}[A-Z0-9]{1,1}[0-9]{5,5}[A-Z]{1,1}$|^IE[0-9]{7,7}[A-W]{1,1}[A-I]{1,1}$"
var IT = "^IT[0-9]{11,11}$"
var LT = "^LT[0-9]{9,9}$|^LT[0-9]{12,12}$"
var LU = "^LU[0-9]{8,8}$"
var LV = "^LV[0-9]{11,11}$"
var MT = "^MT[0-9]{8,8}$"
var NL = "^NL[A-Z0-9]{9,9}B[A-Z0-9]{2,2}$"
var PL = "^PL[0-9]{10,10}$"
var PT = "^PT[0-9]{9,9}$"
var SE = "^SE[0-9]{10,10}01$"
var SI = "^SI[0-9]{8,8}$"
var SK = "^SK[0-9]{10,10}$"
var RO = "^RO[1-9]{1,1}[0-9]{9,9}$"
var EL = "^EL[0-9]{9,9}$"
var HR = "^HR[0-9]{11,11}$"

function isValid(vatcode)
{
  var isValid;
  vatcode = vatcode.toUpperCase();

  //Select the correct pattern based on the country code
  var countryCode = vatcode.substring(0, 2);
  var countryPattern;
  switch (countryCode)
  {
    case "GB" :
      countryPattern = GB;
      break;
    case "AT" :
      countryPattern = AT;
      break;
    case "CY"
      countryPattern = CY;
      break;
    default :
      return false; //No country code identifier
  }

  //Validate using the country's regex patterns
  var checker = new RegExpr(countryPattern);
  return regEx.test(vatcode);
}
