# Identification module in JavaScript

[> Try it out on our website! <](https://www.myclothingarchive.net/id-tools)

__Serviceable labels:__
- __COMME des GARÇONS__
- __Yohji Yamamoto__

This JavaScript module implements the identification of garments from different fashion labels. It is usually feasible to extract valuable information from a small, finite set of label-specific characteristics, such as the possible clothing lines and corresponding collections that a garment with such characteristics may be from, the garment type, the possibility of counterfeit, etc. This module attempts to formalize this process for certain fashion labels coveted by buyers and collectors. Please consult our identification charts for more details on the identification process.

__Support this project by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).__

| Table of contents |
| :- |
| <ul><li>[How to identify a piece of garment with the identification module](#how-to)<ul><li>[Preparing for identification](#preparing)</li><li>[Returning the identification results](#returning)<ul><li>[Option 1 (simple): obtaining a string representation using "identify()"](#returning-1)</li><li>[Option 2 (advanced): accessing the raw identification data using "extract()"](#returning-2)</li></ul></li></ul></li><li>[Label-specific information](#label-specific)<ul><li>[COMME des GARÇONS](#CDG)</li><li>[Yohji Yamamoto](#YY)</li></ul></li></ul> |

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

The `identify()` method returns a `string` that confirms the specified element's characteristics and, according to the possible identification frameworks and exception statuses, lists all possible clothing lines and corresponding collections that a garment with such characteristics may be from, along with other information that can be extracted from such characteristics, such as the stylized product code, the garment type, the garment size, and the possibility of counterfeit.

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

The `extract()` method returns the raw identification data according to the specified element's characteristics in the form of an array of [`Identification`](#Identification) items. Each item contains a copy of the specified element (`input`) and label (`label`) and, according to the identification framework (`framework`) and exception status (`exception`), the list of all possible clothing lines and corresponding collections that a garment with such characteristics may be from (`lineList`), along with other information that can be extracted from such characteristics, such as the stylized product code (`stylizedCode`), the garment type (`garmentType`), the garment size (`garmentSize`), and the possibility of counterfeit (`counterfeit`).

<a id="Identification"></a>
##### `Identification` parameters
  
| Key | Description |
| :- | :- |
| `input` | (`Object`) Characteristics data used for identification. |
| `label` | (`string`) Name of the garment label. |
| `framework` | (`string`) Name of the identification framework. |
| `exception` | (`boolean`) Exception status: `true` if the results are exceptions to the identification framework; `false` otherwise. |
| `lineList` | ([`Line[]`](#Line)) Array of all possible clothing lines and corresponding collections that a garment with such characteristics may be from, according to the identification framework and exception status. |
| `stylizedCode` | (`string`) Stylized product code. |
| `garmentType` | (`string`) Garment type. |
| `garmentSize` | (`string`) Garment size notation; `null` if none. |
| `counterfeit` | (`boolean`) Possibility of counterfeit: `true` if such characteristics have been observed on a counterfeit before; `false` otherwise. |

As stated above, the list of all possible clothing lines and corresponding collections (`lineList`) takes the form of an array of [`Line`](#Line) items. Each item contains the name of the clothing line (`name`) and the list of corresponding collections (`collectionList`).

<a id="Line"></a>
##### `Line` parameters

| Key | Description |
| :- | :- |
| `name` | (`string`) Name of the clothing line. |
| `collectionList` | ([`Collection[]`](#Collection)) Array of corresponding collections. |

As stated above, the list of corresponding collections (`collectionList`) takes the form of an array of [`Collection`](#Collection) items. Each item contains the year of the collection (`year`) and possibly the season (`season`), the title (`title`), and other information (`text`).

<a id="Collection"></a>
##### `Collection` parameters

| Key | Description |
| :- | :- |
| `year` | (`number`) Year of the collection. |
| `season` | (`string`) Semiannual season of the collection: `Spring/Summer` or `Autumn/Winter`; `null` if none. |
| `title` | (`string`) Title of the collection; `null` if none. |
| `text` | (`string`) Other information; `null` if none. |

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

---

<a id="label-specific"></a>
## Label-specific information

<a id="CDG"></a>
### COMME des GARÇONS

#### Values to enter

| Key | Characteristic value |
| :- | :- |
| `label` | (`string`) `COMME des GARÇONS`, which can be returned using [`CDG.Label`](#CDG-NoYearPrintType). |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically located at the top of the care label, as a `string`. Its structure depends on the clothing line and the moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string` &#124; [`CDG.NoYearPrintType`](#CDG-NoYearPrintType)) Information regarding the production year print of the garment, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label, as a `string` if the year has a definite integer value; as a value of `NoYearPrintType` enum otherwise. |

| Key | Characteristic value |
| :- | :- |
| `label` | (`string`) `COMME des GARÇONS`, which can be returned using [`CDG.Label`](#CDG-NoYearPrintType). |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically located at the top of the care label, as a `string`. Its structure depends on the clothing line and the moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string` or [`CDG.NoYearPrintType`](#CDG-NoYearPrintType)) Information regarding the production year print of the garment, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label, as a `string` if the year has a definite integer value; as a value of `NoYearPrintType` enum otherwise. |

| Key | Characteristic value |
| :- | :- |
| `label` | (`string`) `COMME des GARÇONS`, which can be returned using [`CDG.Label`](#CDG-NoYearPrintType). |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically located at the top of the care label, as a `string`. Its structure depends on the clothing line and the moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string` &#124; [`NoYearPrintType`](#CDG-NoYearPrintType)) Information regarding the production year print of the garment, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label, as a `string` if the year has a definite integer value; as a value of `NoYearPrintType` enum otherwise. |

| Key | Characteristic value |
| :- | :- |
| `label` | (`string`) `COMME des GARÇONS`, which can be returned using [`CDG.Label`](#CDG-NoYearPrintType). |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically located at the top of the care label, as a `string`. Its structure depends on the clothing line and the moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string` or [`NoYearPrintType`](#CDG-NoYearPrintType)) Information regarding the production year print of the garment, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label, as a `string` if the year has a definite integer value; as a value of `NoYearPrintType` enum otherwise. |

| Key | Characteristic value |
| :- | :- |
| `label` | (`string`) `COMME des GARÇONS`, which can be returned using [`CDG.Label`](#CDG-NoYearPrintType). |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically located at the top of the care label, as a `string`. Its structure depends on the clothing line and the moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string`) Information regarding the production year print of the garment, which corresponds to the letters "AD" followed by a year since 1988 on the right of the care label, as a `string` if the year has a definite integer value; as a value of [`NoYearPrintType`](#CDG-NoYearPrintType) enum otherwise. |

<a id="CDG-NoYearPrintType"></a>
__`NoYearPrintType` enum__

| Key | Description |
| :- | :- |
| `BLANK` | No "AD" followed by an integer printed on the care label. |
| `INDEFINITE` | Indefinite integer following "AD" on the right of the care label. |
| `UNKNOWN` | Uncertainty regarding whether "AD" followed by an integer was printed on the care label. |

<table>
  <tr>
    <td> <b>Enum</b> </td>
    <td> <b>Key</b> </td>
  </tr>
  <tr>
    <td> &#8212; </td>
    <td> <code>Label</code> </td>
  </tr>
  <tr>
    <td rowspan="3"> <code>NoYearPrintType</code> </td>
    <td> <code>BLANK</code> </td>
  </tr>
  <tr>
    <td> <code>INDEFINITE</code> </td>
  </tr>
  <tr>
    <td> <code>UNKNOWN</code> </td>
  </tr>
</table>

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

Consult the [_Identification data-related classes_](#data-classes) section for a proper documentation of the [`Identification`](#Identification) class, [`Line`](#Line) class, and [`Collection`](#Collection) class and their parameters.

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

# Contact

Don't hesitate to contact us if you have any questions or suggestions.

Email: contact@myclothingarchive.com  
Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)  
Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### Don't forget to [subscribe on Patreon](https://www.patreon.com/bePatron?u=36066750) or [donate on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL)!
