// Thanks to Stackoverflow "BigM" for the original regex used (2014 VAT codes).

var AT = "^ATU[0-9]{8,8}$";
var BE = "^BE[0-9]{10,10}$";
var BG = "^BG[0-9]{9,10}$";
var CY = "^CY[0-9]{8,8}[A-Z]{1,1}$";
var CZ = "^CZ[0-9]{8,10}$";
var DE = "^DE[0-9]{9,9}$";
var DK = "^DK[0-9]{8,8}$";
var EE = "^EE[0-9]{9,9}$";
var EL = "^EL[0-9]{9,9}$";
var ES = "^ES[A-Z0-9]{1,1}[0-9]{7,7}[A-Z0-9]{1,1}$";
var FI = "^FI[0-9]{8,8}$";
var FR = "^FR[A-Z0-9]{2,2}[0-9]{9,9}$";
var FR = "^FR[0-9a-hj-np-zA-HJ-NP-Z]{2,2}[0-9]{9,9}$";
var GB =    "^GB[0-9]{9,9}$" +
            "|^GB[0-9]{12,12}$" +
            "|^GBGD[0-4][0-9]{2,2}$" +
            "|^GBHA[5-9][0-9]{2,2}$";
var HR = "^HR[0-9]{11,11}$";
var HU = "^HU[0-9]{8,8}$";
var IE = "^IE[0-9]{1,1}[A-Z0-9]{1,1}[0-9]{5,5}[A-Z]{1,1}$|^IE[0-9]{7,7}[A-W]{1,1}[A-I]{1,1}$";
var IT = "^IT[0-9]{11,11}$";
var LT = "^LT[0-9]{9,9}$|^LT[0-9]{12,12}$";
var LU = "^LU[0-9]{8,8}$";
var LV = "^LV[0-9]{11,11}$";
var MT = "^MT[0-9]{8,8}$";
var NL = "^NL[A-Z0-9]{9,9}B[A-Z0-9]{2,2}$";
var PL = "^PL[0-9]{10,10}$";
var PT = "^PT[0-9]{9,9}$";
var RO = "^RO[0-9]{2,9}$";
var SE = "^SE[0-9]{10,10}01$";
var SI = "^SI[0-9]{8,8}$";
var SK = "^SK[0-9]{10,10}$";

var patterns = {
    GB: {
        prefix: "GB",
        pattern: GB
    },
    AT: {
      prefix: "AT",
      pattern: AT
    },
    BG: {
      prefix: "BG",
      pattern: BG
    },
    BE: {
        prefix: "BE",
        pattern: BE
    },
    CY: {
        prefix: "CY",
        pattern: CY
    },
    CZ: {
        prefix: "CZ",
        pattern: CZ
    },
    DE: {
        prefix: "DE",
        pattern: DE
    },
    DK: {
        prefix: "DK",
        pattern: DK
    },
    EE: {
        prefix: "EE",
        pattern: EE
    },
    ES: {
        prefix: "ES",
        pattern: ES
    },
    FI: {
        prefix: "FI",
        pattern: FI
    },
    FR: {
        prefix: "FR",
        pattern: FR
    },
    HU: {
        prefix: "HU",
        pattern: HU
    },
    IE: {
        prefix: "IE",
        pattern: IE
    },
    IT: {
        prefix: "IT",
        pattern: IT
    },
    LT: {
        prefix: "LT",
        pattern: LT
    },
    LU: {
        prefix: "LU",
        pattern: LU
    },
    LV: {
        prefix: "LV",
        pattern: LV
    },
    MT: {
        prefix: "MT",
        pattern: MT
    },
    NL: {
        prefix: "NL",
        pattern: NL
    },
    PL: {
        prefix: "PL",
        pattern: PL
    },
    PT: {
        preifx: "PT",
        pattern: PT
    },
    SE: {
        prefix: "SE",
        pattern: SE
    },
    SI: {
        prefix: "SI",
        pattern: SI
    },
    SK: {
        prefix: "SK",
        pattern: SK
    },
    RO: {
        prefix: "RO",
        pattern: RO
    },
    EL: {
        prefix: "EL",
        pattern: EL
    },
    HR: {
        prefix: "HR",
        pattern: HR
    }
};

function getPattern(prefixStr) {
    for (var p in patterns) {
        if(patterns.hasOwnProperty(p)) {
            if(patterns[p].prefix == prefixStr)
                return patterns[p].pattern;
        }
    }
}

exports.getPattern = getPattern;
