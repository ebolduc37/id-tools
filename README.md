# Identification module in JavaScript

[> Try it out on our website! <](https://www.myclothingarchive.net/id-tools)

__Working labels:__
- __COMME des GARÇONS__
- __Yohji Yamamoto__

This JavaScript module implements the identification of garments from different fashion labels. Using a small, finite set of label-specific characteristics, it is often possible to extract the possible clothing lines and corresponding collections that a garment with such characteristics may be from, along with other information, such as the garment type and the possibility of counterfeit. This module is an attempt at formalizing this process. Please consult our identification charts for more details about the identification process.

__Support this project by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).__

| Table of contents |
| :- |
| <ul><li>[How to identify a piece of garment with the identification module](#how-to)<ul><li>[Preparing for identification](#preparing)</li><li>[Returning the identification results](#returning)<ul><li>[Option 1 (simple): obtaining a string representation using "identify()"](#returning-1)</li><li>[Option 2 (advanced): accessing the raw identification data using "extract()"](#returning-2)</li></ul></li></ul></li><li>[Identification data-related classes](#data-classes)<ul><li>["Identification"](#Identification)</li><li>["Line"](#Line)</li><li>["Collection"](#Collection)</li></ul></li><li>[Label-specific information](#label-specific)<ul><li>[COMME des GARÇONS](#CDG)</li><li>[Yohji Yamamoto](#YY)</li></ul></li></ul> |

---

<a id="how-to"></a>
## How to identify a piece of garment with the identification module

<a id="preparing"></a>
### Preparing for identification

A garment is identified through a small set of label-specific characteristics. This information must be entered in an `Object` as values to the applicable label-specific set of keys. Consult the [_Label-specific information_](#label-specific) section to know the set of keys to enter for each label.

<a id="returning"></a>
### Returning the identification results

The identification results of a specified set of characteristics can be returned as a string representation or as raw identification data, for more malleability.

<a id="returning-1"></a>
#### Option 1 (simple): obtaining a string representation using `identify()`

The `identify()` method returns a `string` that confirms the specified element's characteristics and, based on the label and the employed identification framework and its exception status, lists all possible clothing lines and corresponding collections that a garment with such characteristics may be from, along with other information that can be extracted from such characteristics, such as the stylized product code, the garment type, the garment size, and the possibility of counterfeit.

__Example:__
```
import { identify, CDG } from "path/to/release/index.js";

const garmentData = { label: CDG.Label, productCode: "GJ-10009S", yearPrint: "1994" };
const idString = identify(garmentData);

console.log(idString);
```
__Expected output:__
```
> Label: COMME des GARÇONS
> Product code: GJ-10009S
> Year print: AD1994

According to the monthly identification framework of COMME des GARÇONS, the garment should be a jacket in size S from the following:

COMME des GARÇONS
> Spring/Summer 1995, titled "Transcending Gender"
```

<a id="returning-2"></a>
#### Option 2 (advanced): accessing the raw identification data using `extract()`

Manipulating the identification results may be desirable in certain contexts, in which case comprehensive access to the raw identification data is required.

The `extract()` method returns the raw identification data according to the specified element's characteristics in the form of an array of [`Identification`](#Identification) items. Each item contains a copy of the specified element (`input`) and, __based on__ the label (`label`) and the employed __identification framework__ (`framework`) and its __exception status__ (`exception`), the list of all possible clothing lines and corresponding collections that a garment with such characteristics may be from (`lineList`), along with other information that can be extracted from such characteristics, such as the stylized product code (`stylizedCode`), the garment type (`garmentType`), the garment size (`garmentSize`), and the possibility of counterfeit (`counterfeit`).

The list of clothing lines and corresponding collections takes the form of an array of [`Line`](#Line) items, where each item contains the name of the line (`name`) and the list of collections (`collectionList`). In turn, this list of collections takes the form of an array of [`Collection`](#Collection) items, where each item contains the year of the collection (`year`) and possibly the season (`season`), the title (`title`), and other information (`text`).

Consult the [_Identification data-related classes_](#data-classes) section for a proper documentation of the [`Identification`](#Identification) class, [`Line`](#Line) class, and [`Collection`](#Collection) class and their parameters.

__Example:__
```
import { extract, CDG } from "path/to/release/index.js";

const garmentData = { label: CDG.Label, productCode: "GJ-10009S", yearPrint: "1994" };
const idList = extract(garmentData);

console.log(JSON.stringify(idList));
```
__Expected output:__
```
[{"input":{"label":"COMME des GARÇONS","productCode":"GJ-10009S","yearPrint":"1994"},"label":"COMME des GARÇONS","framework":"monthly","exception":false,"lineList":[{"name":"COMME des GARÇONS","collectionList":[{"year":1995,"season":"Spring/Summer","title":"Transcending Gender"}]}],"stylizedCode":"GJ-10009S","garmentType":"a jacket","garmentSize":"S","counterfeit":false}]
```
<!--[
  {
    "input": {
      "label": "COMME des GARÇONS",
      "productCode": "GJ-10009S",
      "yearPrint": "1994"},
    "label": "COMME des GARÇONS",
    "framework": "monthly",
    "exception": false,
    "lineList": [{
      "name": "COMME des GARÇONS",
      "collectionList": [{
        "year": 1995,
        "season": "Spring/Summer",
        "title": "Transcending Gender"}]}],
    "stylizedCode": "GJ-10009S",
    "garmentType": "a jacket",
    "garmentSize": "S",
    "counterfeit": false
  }
]-->

---

<a id="data-classes"></a>
## Identification data-related classes

<a id="Identification"></a>
### `Identification`

| Parameter | Description |
| :- | :- |
| `input` | (`Object`) Characteristics data used for identification. |
| `label` | (`string`) Name of the garment label. |
| `framework` | (`string`) Name of the identification framework. |
| `exception` | (`boolean`) Exception status: `true` if the results are exceptions to the identification framework; `false` otherwise. |
| `lineList` | ([`Line[]`](#Line)) Array of all possible clothing lines and corresponding collections that a garment with such characteristics may be from under such identification framework and exception status. |
| `stylizedCode` | (`string`) Stylized product code. |
| `garmentType` | (`string`) Garment type. |
| `garmentSize` | (`string`) Garment size notation; `null` if none. |
| `counterfeit` | (`boolean`) Possibility of counterfeit: `true` if such characteristics have been observed on a counterfeit before; `false` otherwise. |

<a id="Line"></a>
### `Line`

| Parameter | Description |
| :- | :- |
| `name` | (`string`) Name of the clothing line. |
| `collectionList` | ([`Collection[]`](#Collection)) Array of `Collection` items. |

<a id="Collection"></a>
### `Collection`

| Parameter | Description |
| :- | :- |
| `year` | (`number`) Year of the collection. |
| `season` | (`string`) Semiannual season of the collection: `Spring/Summer` or `Autumn/Winter`; `null` if none. |
| `title` | (`string`) Title of the collection; `null` if none. |
| `text` | (`string`) Other information; `null` if none. |

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
