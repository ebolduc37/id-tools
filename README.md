# Identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the fashion labels __COMME des GARÇONS__ and __Yohji Yamamoto__ using input data provided by the user. Please consult our identification charts for more information on the identification process.

#### Support us by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through a small set of label-specific characteristics. This information must be gathered in an instance of a subclass of `Input` as described below for [__COMME des GARÇONS__](#CDG) and [__Yohji Yamamoto__](#YY).

Calling on an `Input` object the function `identification()` will return a `string` representation of the object confirming its input data and listing all identified occurrences.

### How to access the raw identification results

To customize the application of the results, something something.

---

<a id="CDG"></a>

## COMME des GARÇONS

The software should be able to identify all items with a product code from __COMME des GARÇONS__. The input data of an item from __COMME des GARÇONS__ is gathered in an instance of `InputCDG`, a subclass of `Input` that can be imported from `index.js` in the release folder.


<!---`InputCDG({`<br>`  productCode,`<br>`  yearPrint`<br>`})`--->

```
import { InputCDG } from "path/to/release/index.js";
```

An instance of `InputCDG` is constructed using a Javascript `Object` data type containing two (2) properties:

```
InputCDG({
  productCode,
  yearPrint
})
```

| Property | Description |
| :-: | - |
| [`productCode`](#CDG-productCode) | Product code of the item, which corresponds to the string of 6-9 characters at the top of the care label. |
| [`yearPrint`](#CDG-yearPrint) | Information regarding the production year print of the item, which corresponds to the letters "AD" followed by an a year since 1988 on the right of the care label.<br> |

<a id="CDG-productCode"></a>

### `productCode`

The `productCode` of an item should denote the seemingly random string of 6-9 characters located at the top of the care label or elsewhere. Its structure depends on the line of clothing and the moment of production.

| Entry | Description |
| :-: | --- |
| `string` | String of 6-9 characters at the top of the care label. |

Although the code `D-TK9210` occasionally appears on the care label, it is not the product code.

<a id="CDG-yearPrint"></a>

### `yearPrint`

The `yearPrint` of an item should contain the information regarding the production year print of the item. The production year print corresponds to the letters "AD" followed by an integer between 1988 and the current year located on the right side of the care label. The lack of production year or certainty in its value can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

| Entry | Description |
| :-: | --- |
| `string` | Integer between 1988 and the current year following "AD" on the right of the care label. |
| `NO_YEAR_PRINT_TYPES.BLANK` | No "AD" followed by an integer printed on the care label. |
| `NO_YEAR_PRINT_TYPES.UNREADABLE` | Undecipherable integer following "AD" on the right of the care label. |
| `NO_YEAR_PRINT_TYPES.UNKNOWN` | Uncertainty regarding whether "AD" followed by an integer was printed on the care label. |

---

<a id="YY"></a>

## Yohji Yamamoto

The software should be able to identify most items from the main womenswear and menswear line of __Yohji Yamamoto__, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_. The input data of an item from __Yohji Yamamoto__ is gathered in an instance of `InputYY`, a subclass of `Input` that can be imported from `index.js` in the release folder.


<!---`InputYY({`<br>`  productCode,`<br>`  logoStyle,`<br>`  sizingSystem,`<br>`  fontType,`<br>`  laundrySymbolsLocation`<br>`})`--->

```
InputYY({
  productCode,
  logoStyle,
  sizingSystem,
  fontType,
  laundrySymbolsLocation
})
```

An instance of `InputYY` is constructed using a Javascript `Object` data type containing five (5) properties:

| Property | Description |
| :-: | - |
| [`productCode`](#YY-productCode) | The product code of the item, which corresponds to the larger string of characters on the care label. |
| [`logoStyle`](#YY-logoStyle) | The production year of the item, which corresponds to what follows "AD" on the right of the care label, or lack thereof.<br> |

<a id="YY-productCode"></a>

### `productCode`

The `productCode` of an item corresponds to the seemingly random string of 8 characters printed on the care label.

| Entry type | Description |
| :-: | --- |
| `string` | String of 8 characters at the top of the care label. |

<a id="YY-logoStyle"></a>

### `logoStyle`

The `logoStyle` of an item corresponds to the production year of the item. The production year is the integer between 1988 and the current year following "AD" printed on the right side of the care label. The lack of production year can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

| Entry | Description |
| :-: | --- |
| `LOGO_STYLES.YY_I` | ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png#gh-dark-mode-only) ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_II` | ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png#gh-dark-mode-only) ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_III` | ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png#gh-dark-mode-only) ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png#gh-light-mode-only) |

---

## Yohji Yamamoto

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
