# Item identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the labels ___COMME des GARÇONS___ and ___Yohji Yamamoto___ using basic information provided by the user. Please consult our identification chart for more information.

This project was made possible thanks to our supporters. Support us by [subscribing on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through a collection of input data that is gathered within a single instance of a subclass of `Input` unique to each label as described below. A `string` representation confirming the input data and listing all computed occurrences is then returned by applying the function `identification()` to the input object.

To customize the application of the results, please consult [How to access the raw identification results](#access-results) for more information.

### COMME des GARÇONS

#### `InputCDG({`<br>`  productCode,`<br>`  yearPrint`<br>`})`

The input data of an item from ___COMME des GARÇONS___ is to be gathered in an instance of `InputCDG` exported from `index.js` in the release folder. The instance is constructed from a Javascript `Object` data type that contains two (2) properties:

| Property | Possible entries |
| --- | --- |
| `productCode` | The hyphenated 6-to-8-character `string` at the top of the care label. |
| `yearPrint` | The 4-digit `string` following _AD_ on the right of the care label;<br>`NO_YEAR_PRINT_TYPES.BLANK` if there is no such print;<br>`NO_YEAR_PRINT_TYPES.UNREADABLE` if the print is visible but unreadable;<br>`NO_YEAR_PRINT_TYPES.UNKNOWN` if whether there originally was such a print is unknown.<br> |

> [!NOTE]
> `NO_YEAR_PRINT_TYPES` is a static property of `InputCDG`.

> [!CAUTION]
> Although the code `D-TK9210` occasionally appears on the care label, it does not correspond to the product code.

### Yohji Yamamoto

#### `InputYY({`<br>`  productCode,`<br>`  logoStyle,`<br>`  sizingSystem,`<br>`  fontType,`<br>`  laundrySymbolsLocation`<br>`})`

The input data of an item from ___Yohji Yamamoto___ is to be gathered in an instance of `InputYY` exported from `index.js` in the release folder. The instance is constructed from a Javascript `Object` data type that contains five (5) properties:

| Property | Possible entries |
| --- | --- |
| `productCode` | The hyphenated 8-character `string` on the care label;<br>`NO_PRODUCT_CODE_TYPES.BLANK`;<br>`NO_PRODUCT_CODE_TYPES.UNREADABLE`;<br>`NO_PRODUCT_CODE_TYPES.UNKNOWN`. |
| `logoStyle` | `LOGO_STYLES.YY_I` if ;<br>`LOGO_STYLES.YY_II`;<br>`LOGO_STYLES.YY_III`. |
| `sizingSystem` | `SIZING_SYSTEMS.ALPHABETICAL`;<br>`SIZING_SYSTEMS.NUMERICAL`;<br>`SIZING_SYSTEMS.UNKNOWN`. |
| `fontType` | `FONT_TYPES.SERIF`;<br>`FONT_TYPES.SANS_SERIF`;<br>`FONT_TYPES.UNKNOWN`. |
| `laundrySymbolsLocation` | `LAUNDRY_SYMBOLS_LOCATIONS.ABOVE`;<br>`LAUNDRY_SYMBOLS_LOCATIONS.BELOW`;<br>`LAUNDRY_SYMBOLS_LOCATIONS.UNKNOWN`. |

> [!NOTE]
> `NO_PRODUCT_CODE_TYPES`, `LOGO_STYLES`, `SIZING_SYSTEMS`, `FONT_TYPES`, and `LAUNDRY_SYMBOLS_LOCATIONS` are all static properties of `InputYY`.

#### Logo styles

| LOGO_STYLES | Logo style |
| --- | --- |
| `YY_I` | ![YohjiYamamoto_MAIN_I_black](https://github.com/ebolduc37/identification/assets/44382376/deb6ca72-738a-4c26-967a-1f86fca01640) |
| `YY_II` | <picture><source media="(prefers-color-scheme:dark)" srcset="https://github.com/ebolduc37/identification/assets/44382376/1ee899f0-7200-4974-a35e-8afe131ad154"></picture> <picture><source media="(prefers-color-scheme:light)" srcset="https://github.com/ebolduc37/identification/assets/44382376/4788850c-0ef2-4b9f-93da-95dec66c2ae9"></picture> |
| `YY_III` | ![YohjiYamamoto_MAIN_III_black](https://github.com/ebolduc37/identification/assets/44382376/dc7c8a5f-e92a-4600-a879-1a282b34c833) |

## <a id="access-results"/></a> How to access the raw identification results

## Contact

Don't hesitate to get in touch with us at My Clothing Archive if you have any questions or suggestions.

Email: contact@myclothingarchive.com

Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)

Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [to make a donation on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
