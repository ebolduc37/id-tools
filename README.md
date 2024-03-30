# Identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the fashion labels __COMME des GARÇONS__ and __Yohji Yamamoto__ using some information provided by the user. Please consult our identification charts for more details regarding the identification process.

#### Support us by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through a small set of label-specific characteristics. This information must be gathered in an instance of a subclass of `Input` as described below for [__COMME des GARÇONS__](#CDG) and [__Yohji Yamamoto__](#YY).

### First option: generate a `string` representation (simple)

Calling on an `Input` object the function `identification()` will return a `string` representation of the object confirming the corresponding item's characteristics and listing all the possible clothing lines and collections such item may be a part of. The `string` will also yield other information that can be extracted from such characteristics, e.g., the garment type and the possibility of a counterfeit.

### Second option: access the identification data (advanced)

A customized application of the identification results may be desirable in some contexts, in which case comprehensive access to the identification data is required.

Calling on an `Input` object the function `identify()` will return an array of [`Identification`](#Identification) objects, i.e., `Identification[]`, if at least one match is found and `null` otherwise. An instance of the `Identification` class has a large number of properties which are described below. Note that all members of an array returned by `identify()` will share the same `input` and `label`.

<a id="Identification"></a>
### `Identification`

| Property | Return type | Description |
| :-: | :-: | - |
| `input` | `Input` | Input data used for identification. |
| `label` | `string` | Name of the label. |
| `framework` | `string` | Name of the identification framework. |
| `exception` | `boolean` | `true` if the results are exceptions to the identification framework; `false` otherwise. |
| `codeStylized` | `string` | Stylized product code. |
| `garmentType` | `string` | Garment type. |
| `size` | `string` | Garment size; `null` if none. |
| `lineList` | [`Line[]`](#Line) | Array of clothing lines with matching collections. |

<a id="Line"></a>
### `Line`

| Property | Return type | Description |
| :-: | :-: | - |
| `name` | `string` | Name of the clothing line. |
| `collectionList` | [`Collection[]`](#Collection) | Array of matching collections. |

<a id="Collection"></a>
### `Collection`

| Property | Return type | Description |
| :-: | :-: | - |
| `year` | `number` | Year of the collection; production year if `season == null`. |
| `season` | `string` | Season of the collection; `null` if none. |
| `title` | `string` | Title of the collection; `null` if none. |
| `text` | `string` | Other information; `null` if none. |

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

| Property | Type | Description |
| :-: | :-: | - |
| [`productCode`](#CDG-productCode) | `string` | Product code of the item, which corresponds to the string of 6-9 characters at the top of the care label. |
| [`yearPrint`](#CDG-yearPrint) | `string`,<br>`NO_YEAR_PRINT_TYPES` | Information regarding the production year print of the item, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label. |

<a id="CDG-productCode"></a>
### `productCode`

The `productCode` of an item should denote the seemingly random string of 6-9 characters located at the top of the care label or elsewhere. Its structure depends on the clothing line and the moment of production.

| Entry type | Description |
| :-: | --- |
| `string` | String of 6-9 characters at the top of the care label. |

Although the code `D-TK9210` occasionally appears on the care label, it is not the product code.

<a id="CDG-yearPrint"></a>
### `yearPrint`

The `yearPrint` of an item should contain the information regarding the production year print of the item. The production year print corresponds to the letters "AD" followed by an integer between 1988 and the current year located on the right side of the care label. The lack of production year or certainty in its value can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

| Entry type | Description |
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
| [`logoStyle`](#YY-logoStyle) | The production year of the item, which corresponds to what follows "AD" on the right of the care label, or lack thereof. |

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

## Contact

Don't hesitate to contact us if you have any questions or suggestions.

Email: contact@myclothingarchive.com  
Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)  
Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donate on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
