# Identification module in JavaScript

[Try it out on our website!](https://www.myclothingarchive.net/id-tools)

#### Supported labels:
- __COMME des GARÇONS__
- __Yohji Yamamoto__

This JavaScript module implements the identification of garments for different fashion labels using small, finite sets of characteristics. WHAT IS IDENTIFICATION???

Please consult our identification charts for more details regarding the identification process.

| Table of content |
| :- |
| <ul><li>[How to identify a piece of garment](#how-to)<ul><li>[Preparing for identification](#preparing)</li><li>[Returning identification results](#returning)<ul><li>[Option 1 (simple): generating a string representation using identify()](#returning-1)</li><li>[Option 2 (advanced): accessing the raw identification data using idList()](#returning-2)</li></ul></li></ul></li><li>[Label-specific information](#label-specific)<ul><li>[COMME des GARÇONS](#CDG)</li><li>[Yohji Yamamoto](#YY)</li></ul></li></ul> |

### Support this project by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).

---

<a id="how-to"></a>
## How to identify a piece of garment

<a id="preparing"></a>
### Preparing for identification

A garment is identified through a small set of label-specific characteristics. This information must be entered in an `Object` as values to the applicable label-specific set of keys, which are described for each label in the [Label-specific information](#label-specific) section. The garment can be identified once the `Object` has been initialized according to the garment's characteristics with the right keys and values.

<a id="returning"></a>
### Returning identification results

The identification results of a specified element can be returned as a string representation, for simplicity, or raw identification data, for malleability.

<a id="returning-1"></a>
#### Option 1 (simple): generating a string representation using `identify()`

The `identify()` method returns a `string` containing a confirmation of the specified element's characteristics data and the list of all possible clothing lines and collections it may be a part of. The resulting `string` will also yield further information that can be extracted from such characteristics data, such as the garment type and the possibility of a counterfeit.

##### Example:

```
import { identify, CDG } from "path/to/release/index.js";

const garmentInfo = { label: CDG.Label, productCode: "GJ-10009S", yearPrint: "1994" };
const idString = identify(garment);

console.log(idString)
```
##### Expected output:
```
> Label: COMME des GARÇONS
> Product code: GJ-10009S
> Year print: AD1994

According to the monthly identification framework of COMME des GARÇONS, the garment should be a jacket in size S from the following:

COMME des GARÇONS
> Spring/Summer 1995, titled "Transcending Gender"
```

<a id="returning-2"></a>
#### Option 2 (advanced): accessing the raw identification data using `idList()`

A customized manipulation of the identification results may be desirable in certain contexts, in which case comprehensive access to raw identification data is required.

The `idList()` method returns the raw identification data resulting from the specified element in the form of an array of [`Identification`](#Identification) items. Each item contains the specified element's characteristics data (`input`) and, based on the label (`label`) and the <ins>identification framework</ins> (`framework`) employed and its <ins>exception status</ins> (`exception`), the list of all possible clothing lines and collections it may be a part of (`lineList`) along with other information that can be extracted from such characteristics, such as the stylized product code (`codeStylized`), the garment type (`garmentType`), the garment size (`garmentSize`), and the possibility of it being a counterfeit (`counterfeit`).

The set of properties held by instances of the [`Identification`](#Identification) class are listed below. As a part of this list, the [`Line`](#Line) class is also described, together with the [`Collection`](#Collection) class.

<a id="Identification"></a>
##### `Identification` class instance properties:
- (`Object`) `input` - Characteristics data used for the identification.
- (`string`) `label` - Name of the label.
- (`string`) `framework` - Name of the identification framework.
- (`boolean`) `exception` - Exception status: `true` if the results are exceptions to the identification framework; `false` otherwise.
- ([`Line[]`](#Line)) `lineList` - Array of all possible clothing lines and collections a garment with such characteristics may be a part of.
- (`string`) `codeStylized` - Stylized product code.
- (`string`) `garmentType` - Garment type.
- (`string`) `garmentSize` - Garment size notation; `null` if none.
- (`boolean`) `counterfeit` - Counterfeit status: `true` if the garment may be a counterfeit; `false` otherwise.

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

<a id="label-specific"></a>
## Label-specific information

<a id="CDG"></a>
### COMME des GARÇONS

The current version should be able to identify all garments with a product code from __COMME des GARÇONS__. The characteristics of a garment from __COMME des GARÇONS__ must be gathered in an instance of `InputCDG`, a subclass of `Input` that can be imported from `index.js` in the release folder.

```
import { InputCDG } from "path/to/release/index.js";
```

To construct an instance of `InputCDG`, the constructor must take as its argument an `Object` with two (2) properties as exemplified below.

```
input = new InputCDG({ productCode: ... , yearPrint: ... })
```

#### `InputCDG` class instance properties

| Property | Possible types | Description |
| - | - | - |
| `productCode` | <ul><li>`string`</li></ul> | Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically located at the top of the care label, as a `string`. Its structure depends on the clothing line and the moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | <ul><li>`string`</li><li>[`NoYearPrintType`](#CDG-NoYearPrintType)</li></ul> | Information regarding the production year print of the garment, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label, as a `string` if the year has a definite integer value; as a value of enum `NoYearPrintType` otherwise. |

<a id="CDG-NoYearPrintType"></a>
#### `NoYearPrintType` enum keys

| Key | Description |
| - | - |
| `BLANK` | No "AD" followed by an integer printed on the care label. |
| `INDEFINITE` | Indefinite integer following "AD" on the right of the care label. |
| `UNKNOWN` | Uncertainty regarding whether "AD" followed by an integer was printed on the care label. |

---

<a id="YY"></a>
### Yohji Yamamoto

The current version should be able to identify most garments from the main womenswear and menswear line of __Yohji Yamamoto__, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_. The input data of an garment from __Yohji Yamamoto__ is gathered in an instance of `InputYY`, a subclass of `Input` that can be imported from `index.js` in the release folder.

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
| [`productCode`](#YY-productCode) | The product code of the garment, which corresponds to the larger string of characters on the care label. |
| [`logoStyle`](#YY-logoStyle) | The production year of the garment, which corresponds to what follows "AD" on the right of the care label, or lack thereof. |

<a id="YY-productCode"></a>

#### `productCode`

The `productCode` of an garment corresponds to the seemingly random string of 8 characters printed on the care label.

| Entry type | Description |
| - | --- |
| `string` | String of 8 characters at the top of the care label. |

<a id="YY-logoStyle"></a>

#### `logoStyle`

The `logoStyle` of a garment corresponds to the production year of the garment. The production year is the integer between 1988 and the current year following "AD" printed on the right side of the care label. The lack of production year can take three (3) forms, i.e., `BLANK`, `UNREADABLE`, and `UNKNOWN`, that are grouped in the enum `NO_YEAR_PRINT_TYPES`, which is a static property of `InputCDG`.

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
