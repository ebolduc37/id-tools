# Item identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the labels __COMME des GARÇONS__ and __Yohji Yamamoto__ using basic information provided by the user. Please consult our identification chart for more information.

#### Support us by [subscribing on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through input data gathered within a single instance of a subclass of `Input` unique to each label as described below for [__COMME des GARÇONS__](#CDG) and [__Yohji Yamamoto__](#YY). A `string` representation confirming the input data and listing all computed occurrences can be returned by calling the function `identification()` on the input object.

### How to access the raw identification results

To customize the application of the results, something something.

---

<a id="CDG"></a>

## COMME des GARÇONS

The software should be able to identify all items with a product code from __COMME des GARÇONS__. The input data of an item from __COMME des GARÇONS__ is gathered in an instance of `InputCDG`, a class that can be imported from `index.js` in the release folder.


<!---`InputCDG({`<br>`  productCode,`<br>`  yearPrint`<br>`})`--->

```
InputCDG({
  productCode,
  yearPrint
})
```

The instance is constructed using a Javascript `Object` data type containing two (2) properties:

| Property | Description |
| :-: | - |
| [`productCode`](#CDG-productCode) | The product code of the item, which corresponds to the string of characters at the top of the care label. |
| [`yearPrint`](#CDG-yearPrint) | The production year of the item, which corresponds to what follows "AD" on the right of the care label, or lack thereof.<br> |

### `productCode` <a id="CDG-productCode"></a>

The `productCode` of an item corresponds to the seemingly random string of 6-9 characters printed at the top of the care label. Its structure depends on the line of clothing and time of production.

| Entry type | Description |
| :-: | --- |
| `string` | String of 6-9 characters at the top of the care label. |

Although the code `D-TK9210` occasionally appears on the care label, it is not the product code.

### `yearPrint` <a id="CDG-yearPrint"></a>

The `yearPrint` of an item corresponds to the production year of the item or lack thereof. The production year is the integer between 1988 and the current year following "AD" printed on the right side of the care label. The lack of production year can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

| Entry type | Description |
| :-: | --- |
| `string` | Integer between 1988 and the current year following "AD" on the right of the care label. |
| `BLANK` | `NO_YEAR_PRINT_TYPES` option for when no production year was printed. |
| `UNREADABLE` | `NO_YEAR_PRINT_TYPES` option for when a production year was printed, but cannot be deciphered. |
| `UNKNOWN` | `NO_YEAR_PRINT_TYPES` option for when it is unknown whether a production year was printed or not. |

---

## <a id="YY"></a> Yohji Yamamoto

The software should be able to identify mainline items from __Yohji Yamamoto__, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_.

#### `InputYY({`<br>`  productCode,`<br>`  logoStyle,`<br>`  sizingSystem,`<br>`  fontType,`<br>`  laundrySymbolsLocation`<br>`})`

The input data of an item from __Yohji Yamamoto__ is to be gathered in an instance of `InputYY` exported from `index.js` in the release folder. The instance is constructed from a Javascript `Object` data type that contains five (5) properties:

| Property | Possible entries |
| :-: | - |
| `productCode` | The hyphenated 8-character `string` on the care label;<br>`NO_PRODUCT_CODE_TYPES.BLANK` if there is no such print;<br>`NO_PRODUCT_CODE_TYPES.UNREADABLE` if the print is visible but unreadable;<br>`NO_PRODUCT_CODE_TYPES.UNKNOWN` if whether there originally was such a print is unknown. |
| `logoStyle` | `LOGO_STYLES.YY_I` if the logo on the brand label is the earliest, roundest _Yohji Yamamoto_ signature;<br>`LOGO_STYLES.YY_II` if the logo on the brand label is the early, round _Yohji Yamamoto_ signature;<br>`LOGO_STYLES.YY_III` if the logo on the brand label is the current, sharp _Yohji Yamamoto_ signature. |
| `sizingSystem` | `SIZING_SYSTEMS.ALPHABETICAL` if it is an alphabetical sizing system;<br>`SIZING_SYSTEMS.NUMERICAL` if it is a numerical sizing system;<br>`SIZING_SYSTEMS.UNKNOWN` if the sizing system is unknown. |
| `fontType` | `FONT_TYPES.SERIF` if the care label uses a serif font type;<br>`FONT_TYPES.SANS_SERIF` if the care label uses a sans-serif font type;<br>`FONT_TYPES.UNKNOWN` if the font type on the care label is unknown. |
| `laundrySymbolsLocation` | `LAUNDRY_SYMBOLS_LOCATIONS.BELOW` if the laundry symbols are located below the composition on the care label;<br>`LAUNDRY_SYMBOLS_LOCATIONS.ABOVE` if the laundry symbols are located above the composition on the care label;<br>`LAUNDRY_SYMBOLS_LOCATIONS.UNKNOWN` if it is unknown where the laundry symbols are located with respect to the composition on the care label. |

> [!NOTE]
> `NO_PRODUCT_CODE_TYPES`, `LOGO_STYLES`, `SIZING_SYSTEMS`, `FONT_TYPES`, and `LAUNDRY_SYMBOLS_LOCATIONS` are all static properties of `InputYY`.

### Logo styles

For reference, you will find in the table below the logo style associated with each possible entry of `logoStyle`. You can find them in large `.png` format in the `assets` folder.

| `logoStyle` entry | Corresponding logo style |
| :-: | --- |
| `LOGO_STYLES.YY_I` | ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png#gh-dark-mode-only) ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_II` | ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png#gh-dark-mode-only) ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_III` | ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png#gh-dark-mode-only) ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png#gh-light-mode-only) |

---

## Contact

Don't hesitate to contact us if you have any questions or suggestions.

Email: contact@myclothingarchive.com  
Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)  
Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donate on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
