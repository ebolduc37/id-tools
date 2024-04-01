# Identification module in JavaScript

### [Try it out on our website!](https://www.myclothingarchive.net/id-tools)

This JavaScript code implements the identification of items from the fashion labels __COMME des GARÇONS__ and __Yohji Yamamoto__ using some information provided by the user. Please consult our identification charts for more details regarding the identification process.

#### Support us by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

## How to identify an item

An item is identified through a small set of label-specific characteristics. This information must be gathered in an instance of a subclass of `Input` as described below since each label has its own unique set of characteristics used for identification.

<a id="Input"></a>
#### `Input` subclasses instance properties according to the label

| Label | Subclass | List of properties |
| - | - | - |
| [__COMME des GARÇONS__](#CDG) | `InputCDG` | - `productCode`<br>- `yearPrint` |
| [__Yohji Yamamoto__](#YY) | `InputYY` | - `productCode`<br>- `logoStyle`<br>- `sizingSystem`<br>- `fontType`<br>- `laundrySymbolsLocation` |

To construct an instance of a subclass of `Input`, the constructor simply takes as its argument an `Object` with the same properties as those listed above according to the label. Once an instance has been properly constructed according to an item's characteristics, the item can be identified. The results of the identification process can take two forms.

## First option: generate a `string` representation (simple)

Calling on an `Input` object the function `identification()` will return a `string` representation of the object confirming the corresponding item's characteristics and listing all the possible clothing lines and collections such item may be a part of. The `string` will also yield other information that can be extracted from such characteristics, e.g., the garment type and the possibility of the item being a counterfeit.

Here is an example of the format.

```
You have entered the following input information for COMME des GARÇONS.

Product code: PB-11001M
Year print: AD1994

According to the monthly identification framework of COMME des GARÇONS, the item should be a button-up in size M from...

COMME des GARÇONS HOMME PLUS
-> Spring/Summer 1995 • Work
```

## Second option: access the identification data (advanced)

A customized application of the identification results may be desirable in some contexts, in which case comprehensive access to the identification data is required.

Calling on an `Input` object the function `identify()` will return an array [`Identification[]`](#Identification) if at least one match is found and `null` if none. Instances of the `Identification` class have a large number of properties which are described below. Also described are associated classes [`Line`](#Line) and [`Collection`](#Collection) and enum [`SEASONS`](#SEASONS). Note that all members of an array returned by `identify()`, while sharing the same `input` data and `label`, are separated according to the identification `framework` used and `exception` status.

<a id="Identification"></a>
#### `Identification` class instance properties

| Property | Type | Description |
| - | - | - |
| `input` | [`Input`](#Input) | Input data used for identification. |
| `label` | `string` | Name of the label. |
| `framework` | `string` | Name of the identification framework. |
| `exception` | `boolean` | `true` if the results are exceptions to the identification framework; `false` otherwise. |
| `codeStylized` | `string` | Stylized product code. |
| `garmentType` | `string` | Garment type; `a piece` by default. |
| `size` | `string` | Garment size notation; `null` if none. |
| `lineList` | [`Line[]`](#Line) | Array of clothing lines with matching collections. |

<a id="Line"></a>
#### `Line` class instance properties

| Property | Type | Description |
| - | - | - |
| `name` | `string` | Name of the clothing line. |
| `collectionList` | [`Collection[]`](#Collection) | Array of matching collections. |

<a id="Collection"></a>
#### `Collection` class instance properties

| Property | Type | Description |
| - | - | - |
| `year` | `number` | Year of the collection. |
| `season` | `string` | Semiannual season of the collection, i.e., `Spring/Summer` or `Autumn/Winter`; `null` if none. |
| `title` | `string` | Title of the collection; `null` if none. |
| `text` | `string` | Other information; `null` if none. |

<a id="Collection-seasonal-methods"></a>
#### `Collection` class instance seasonal identification methods

| Method | Return type | Description |
| - | - | - |
| `isS()` | `boolean` | `true` if the instance's semiannual season is `Spring/Summer`; `false` otherwise. |
| `isW()` | `boolean` | `true` if the instance's semiannual season is `Autumn/Winter`; `false` otherwise. |

---

# Label-specific information

<a id="CDG"></a>
## COMME des GARÇONS

The current version should be able to identify all items with a product code from __COMME des GARÇONS__. The characteristics of an item from __COMME des GARÇONS__ must be gathered in an instance of `InputCDG`, a subclass of `Input` that can be imported from `index.js` in the release folder.

```
import { InputCDG } from "path/to/release/index.js";
```

To construct an instance of `InputCDG`, the constructor must take as its argument an `Object` with two (2) properties as examplified below.

```
input = new InputCDG({ productCode: ... , yearPrint: ... })
```

#### `InputCDG` class instance properties

| Property | List of possible types | Description |
| - | - | - |
| [`productCode`](#CDG-productCode) | - `string` | Product code of the item, which corresponds to the string of 6-9 characters at the top of the care label. |
| [`yearPrint`](#CDG-yearPrint) | <ul style="list-style-position:inside;padding-left:0;"><li>`string`</li><li>`NO_YEAR_PRINT_TYPES`</li></ul> | Information regarding the production year print of the item, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label. |

<a id="CDG-productCode"></a>
#### `productCode`

The `productCode` of an item should denote the seemingly random string of 6-9 characters located at the top of the care label or elsewhere. Its structure depends on the clothing line and the moment of production.

| Entry type | Description |
| - | --- |
| `string` | String of 6-9 characters at the top of the care label. |

Although the code `D-TK9210` occasionally appears on the care label, it is not the product code.

<a id="CDG-yearPrint"></a>
#### `yearPrint`

The `yearPrint` of an item should contain the information regarding the production year print of the item. The production year print corresponds to the letters "AD" followed by an integer between 1988 and the current year located on the right side of the care label. The lack of production year or certainty in its value can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

| Entry type | Description |
| - | --- |
| `string` | Integer between 1988 and the current year following "AD" on the right of the care label. |
| `NO_YEAR_PRINT_TYPES.BLANK` | No "AD" followed by an integer printed on the care label. |
| `NO_YEAR_PRINT_TYPES.UNREADABLE` | Undecipherable integer following "AD" on the right of the care label. |
| `NO_YEAR_PRINT_TYPES.UNKNOWN` | Uncertainty regarding whether "AD" followed by an integer was printed on the care label. |

---

<a id="YY"></a>
## Yohji Yamamoto

The current version should be able to identify most items from the main womenswear and menswear line of __Yohji Yamamoto__, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_. The input data of an item from __Yohji Yamamoto__ is gathered in an instance of `InputYY`, a subclass of `Input` that can be imported from `index.js` in the release folder.

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
| - | - |
| [`productCode`](#YY-productCode) | The product code of the item, which corresponds to the larger string of characters on the care label. |
| [`logoStyle`](#YY-logoStyle) | The production year of the item, which corresponds to what follows "AD" on the right of the care label, or lack thereof. |

<a id="YY-productCode"></a>

#### `productCode`

The `productCode` of an item corresponds to the seemingly random string of 8 characters printed on the care label.

| Entry type | Description |
| - | --- |
| `string` | String of 8 characters at the top of the care label. |

<a id="YY-logoStyle"></a>

#### `logoStyle`

The `logoStyle` of an item corresponds to the production year of the item. The production year is the integer between 1988 and the current year following "AD" printed on the right side of the care label. The lack of production year can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

| Entry | Description |
| :-: | --- |
| `LOGO_STYLES.YY_I` | ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png#gh-dark-mode-only) ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_II` | ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png#gh-dark-mode-only) ![Y_II](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png#gh-light-mode-only) |
| `LOGO_STYLES.YY_III` | ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png#gh-dark-mode-only) ![Y_III](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png#gh-light-mode-only) |

---

# Contact

Don't hesitate to contact us if you have any questions or suggestions.

Email: contact@myclothingarchive.com  
Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)  
Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donate on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
