# Item identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the labels ___COMME des GARÇONS___ and ___Yohji Yamamoto___ using basic information provided by the user. Please consult our identification chart for more information.

This project was made possible thanks to our supporters. Support us by [subscribing on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through a collection of input data that is gathered within a single instance of a subclass of `Input` unique to each label as described below. A `string` representation confirming the input data and listing all computed occurrences is then returned by applying the function `identification()` to the input object.

To customize the application of the results, please consult [How to access the raw identification results](#access-results) for more information.

### COMME des GARÇONS

The software should be able to, in some measure, identify __ALL__ items with a product code from ___COMME des GARÇONS___.

#### `InputCDG({`<br>`  productCode,`<br>`  yearPrint`<br>`})`

The input data of an item from ___COMME des GARÇONS___ is to be gathered in an instance of `InputCDG` exported from `index.js` in the release folder. The instance is constructed from a Javascript `Object` data type that contains two (2) properties:

| Property | Possible entries |
| :-: | - |
| `productCode` | The hyphenated 6-to-8-character `string` at the top of the care label. |
| `yearPrint` | The 4-digit `string` following _AD_ on the right of the care label;<br>`NO_YEAR_PRINT_TYPES.BLANK` if there is no such print;<br>`NO_YEAR_PRINT_TYPES.UNREADABLE` if the print is visible but unreadable;<br>`NO_YEAR_PRINT_TYPES.UNKNOWN` if whether there originally was such a print is unknown.<br> |

> [!NOTE]
> `NO_YEAR_PRINT_TYPES` is a static property of `InputCDG`.

> [!CAUTION]
> Although the code `D-TK9210` occasionally appears on the care label, it does not correspond to the product code.

### Yohji Yamamoto

The software should be able to, in some measure, identify __EXCLUSIVELY__ mainline items from ___Yohji Yamamoto___, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_.

#### `InputYY({`<br>`  productCode,`<br>`  logoStyle,`<br>`  sizingSystem,`<br>`  fontType,`<br>`  laundrySymbolsLocation`<br>`})`

The input data of an item from ___Yohji Yamamoto___ is to be gathered in an instance of `InputYY` exported from `index.js` in the release folder. The instance is constructed from a Javascript `Object` data type that contains five (5) properties:

| Property | Possible entries |
| :-: | - |
| `productCode` | The hyphenated 8-character `string` on the care label;<br>`NO_PRODUCT_CODE_TYPES.BLANK` if there is no such print;<br>`NO_PRODUCT_CODE_TYPES.UNREADABLE` if the print is visible but unreadable;<br>`NO_PRODUCT_CODE_TYPES.UNKNOWN` if whether there originally was such a print is unknown. |
| `logoStyle` | `LOGO_STYLES.YY_I` if the logo on the brand label is the earliest, roundest _Yohji Yamamoto_ signature;<br>`LOGO_STYLES.YY_II` if the logo on the brand label is the early, round _Yohji Yamamoto_ signature;<br>`LOGO_STYLES.YY_III` if the logo on the brand label is the current, sharp _Yohji Yamamoto_ signature. |
| `sizingSystem` | `SIZING_SYSTEMS.ALPHABETICAL` if it is an alphabetical sizing system;<br>`SIZING_SYSTEMS.NUMERICAL` if it is a numerical sizing system;<br>`SIZING_SYSTEMS.UNKNOWN` if the sizing system is unknown. |
| `fontType` | `FONT_TYPES.SERIF` if the care label uses a serif font type;<br>`FONT_TYPES.SANS_SERIF` if the care label uses a sans-serif font type;<br>`FONT_TYPES.UNKNOWN` if the font type on the care label is unknown. |
| `laundrySymbolsLocation` | `LAUNDRY_SYMBOLS_LOCATIONS.BELOW` if the laundry symbols are located below the composition on the care label;<br>`LAUNDRY_SYMBOLS_LOCATIONS.ABOVE` if the laundry symbols are located above the composition on the care label;<br>`LAUNDRY_SYMBOLS_LOCATIONS.UNKNOWN` if it is unknown where the laundry symbols are located with respect to the composition on the care label. |

> [!NOTE]
> `NO_PRODUCT_CODE_TYPES`, `LOGO_STYLES`, `SIZING_SYSTEMS`, `FONT_TYPES`, and `LAUNDRY_SYMBOLS_LOCATIONS` are all static properties of `InputYY`.

#### Logo styles

For reference, you will find in the table below the logo style associated with each possible entry of `logoStyle`. You can find them in large `.png` format in the `assets` folder.

| `logoStyle` entry | Corresponding logo style |
| --- | --- |
| `LOGO_STYLES.YY_I` | ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png#gh-dark-mode-only) ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_II` | ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png#gh-dark-mode-only) ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_III` | ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png#gh-dark-mode-only) ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png#gh-light-mode-only) |

## <a id="access-results"/></a> How to access the raw identification results

## Contact

Don't hesitate to contact us if you have any questions or suggestions.

Email: contact@myclothingarchive.com  
Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)  
Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donate on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
