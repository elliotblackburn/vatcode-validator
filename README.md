# vatcode-validator
This VAT Code Validator checks the syntax of a VAT code. It doesn't make any API calls to
check the validity of the code itself, so the package can be useful for on the fly checking
of valid VAT code entry on forms etc.

## Sponsor this project

This project is actively maintained during evenings and weekends. If you or your company find it useful, please consider supporting the project through [sponsorship](https://github.com/users/BlueHatbRit/sponsorship).

## Installation
`npm install vatcode-validator --save`

## Example use
```javascript
var VATValidator = require('vatcode-validator');

var vatCode = '';

if(VATValidator.isValid(vatCode)) {
  console.log('Code is valid');
} else {
  //not valid :(
}
```
