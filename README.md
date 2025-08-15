# vatcode-validator
This VAT Code Validator checks the syntax of a VAT code. It doesn't make any API calls to
check the validity of the code itself, so the package can be useful for on the fly checking
of valid VAT code entry on forms etc.

## Project status

> [!CAUTION]
> This project has been unmaintained since 2018. You should not use it, and should migrate away from it.

I made this module back in ~2015 to solve a problem my company had at the time. It served it's purpose and still works reasonably well. But I do not use nodejs anymore, and have no intention of publishing any updates in the future.

To prevent supply-chain attacks I will not hand this project over to anyone else.

If you wish to continue the project, please fork it while respecting the copyright notice and license.

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
