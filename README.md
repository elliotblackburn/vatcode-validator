# vatcode-validator
This VAT Code Validator checks the syntax of a VAT code. It doesn't make any API calls to
check the validity of the code itself, so the package can be useful for on the fly checking
of valid VAT code entry on forms etc.

<a href="https://www.buymeacoffee.com/elliot" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

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
