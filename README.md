# vatcode-validator
This VAT Code Validator checks the syntax of a VAT code. It doesn't make any API calls to
check the validity of the code itself, so the package can be useful for on the fly checking
of valid VAT code entry on forms etc.

## Installation
`npm install vatcode-validator --save`

## Example use
```
var VATValidator = require('vatcode-validator');

var vatCode = '';

if(VATValidator.isValid(vatCode)) {
  console.log('Code is valid');
} else {
  //not valid :(
}
```

## Todo:
- Add a function that checks the validity of a code using a VAT checker API as well as the syntax.
