# Item identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the labels COMME des GARÇONS and Yohji Yamamoto using basic information provided by the user. Please consult our identification chart for more information.

This project was made possible thanks to our supporters. Support us by [subscribing on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through a collection of input data that is gathered within a single instance of a subclass of `Input` unique to each label as described below. A `string` representation confirming the input data and listing all computed occurrences is then returned by applying the function `identification()` to the input object.

To customize the application of the results, please consult [How to access the raw identification results](#access-results) for more information.

### COMME des GARÇONS

#### `InputCDG({ productCode, yearPrint })`

The input data of an item from COMME des GARÇONS is to be gathered in an instance of `InputCDG` as exported from `index.js` in the release folder. The instance is constructed from a Javascript `Object` data type that contains two (2) properties:

| Property |  Description | Possible entries |
| --- | --- | --- |
| `productCode` | Product code | The 6-to-8-character `string` (with or without a hyphen) at the top of the care label. |
| `yearPrint` | Production year | The 4-digit `string` following _AD_ on the right side of the care label;<br>`NO_YEAR_PRINT_TYPES.BLANK` if there is no such print;<br>`NO_YEAR_PRINT_TYPES.UNREADABLE` if the print is visible but unreadable;<br>`NO_YEAR_PRINT_TYPES.UNKNOWN` if whether there originally was such a print is unknown.<br> |

> [!CAUTION]
> Although the code `D-TK9210` occasionally appears on the care label, it does not correspond to the product code.

#### Examples

Here is one.

### Yohji Yamamoto

blabla

## <a id="access-results"/></a> How to access the raw identification results

## Contact

Don't hesitate to get in touch with us at My Clothing Archive if you have any questions or suggestions.

Email: contact@myclothingarchive.com

Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)

Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [to make a donation on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
