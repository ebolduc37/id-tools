# Identification module in JavaScript

[> Try it out on our website! <](https://www.myclothingarchive.net/id-tools)

__Serviceable labels:__
- __COMME des GARÇONS__
- __Yohji Yamamoto__

This JavaScript module implements the identification of garments from different fashion labels. It is usually feasible to extract valuable information from a small, finite set of label-specific characteristics, such as the possible clothing lines and corresponding collections that a garment with such characteristics may be from, the garment type, the possibility of counterfeit, etc. This module attempts to formalize this process for certain fashion labels coveted by buyers and collectors. Please consult our identification charts for more details on the identification process.

__Support this project by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).__

| Table of contents |
| :- |
| <ul><li>[How to identify a piece of garment with the identification module](#how-to)<ul><li>[Preparing for identification](#preparing)</li><li>[Returning the identification results](#returning)<ul><li>[Option 1 (simple): obtaining a string representation using "identify()"](#returning-1)</li><li>[Option 2 (advanced): accessing the raw identification data using "extract()"](#returning-2)</li></ul></li></ul></li><li>[Label-specific characteristics](#label-specific)<ul><li>[COMME des GARÇONS](#CDG)</li><li>[Yohji Yamamoto](#YY)</li></ul></li></ul> |

---

<a id="how-to"></a>
## How to identify a piece of garment with the identification module

<a id="preparing"></a>
### Preparing for identification

A garment is identified through a small set of label-specific characteristics. This information must be entered in an `Object` as values to a label-specific set of keys. Consult the [_Label-specific information_](#label-specific) section to know the set of keys to enter for each label.

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

In turn, the list of all possible clothing lines and corresponding collections (`lineList`) takes the form of an array of [`Line`](#Line) items, where each item contains the name of the clothing line (`name`) and the list of corresponding collections (`collectionList`).

Finally, the list of corresponding collections (`collectionList`) takes the form of an array of [`Collection`](#Collection) items, where each item contains the year of the collection (`year`) and possibly the season (`season`), the title (`title`), and other information (`text`).

<a id="Identification"></a>
##### `Identification` properties
  
| Key | Description |
| :- | :- |
| `input` | (`Object`) Garment characteristics used for identification. |
| `label` | (`string`) Name of the garment label. |
| `framework` | (`string`) Name of the identification framework. |
| `exception` | (`boolean`) Exception status: `true` if the results are exceptions to the identification framework; `false` otherwise. |
| `lineList` | ([`Line[]`](#Line)) Array of all possible clothing lines and corresponding collections that a garment with such characteristics may be from, according to the identification framework and exception status. |
| `stylizedCode` | (`string`) Stylized product code. |
| `garmentType` | (`string`) Garment type. |
| `garmentSize` | (`string`) Garment size notation; `null` if none. |
| `counterfeit` | (`boolean`) Possibility of counterfeit: `true` if such characteristics have been observed on a counterfeit before; `false` otherwise. |

<a id="Line"></a>
##### `Line` properties

| Key | Description |
| :- | :- |
| `name` | (`string`) Name of the clothing line. |
| `collectionList` | ([`Collection[]`](#Collection)) Array of corresponding collections. |

<a id="Collection"></a>
##### `Collection` properties

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
## Label-specific characteristics

Recall that a garment is identified through a small set of label-specific characteristics. Keeping track of these characteristics and their acceptable values gets tedious considering how severely the identification process differs between labels. Luckily, many of these are limited to small sets of qualitative options, allowing for the use of enum types to simplify the classification of garments. As such, each label has a corresponding namespace providing access to useful enums and variables to be used as values when putting together the characteristics data of a garment in an `Object`. This section describes the label-specific sets of keys required for identification and the corresponding namespaces.









<a id="CDG"></a>
### COMME des GARÇONS

The current version should be able to identify all pieces of garments from the __COMME des GARÇONS__ label.

<a id="CDG-key"></a>
#### Key characteristics for identification

Garments from the __COMME des GARÇONS__ label (`label`) are characterized by their product code (`productCode`) and year print (`yearPrint`).

##### Garment characteristics properties

| Key | Description |
| :- | :- |
| `label` | (`string`) Name of the label, i.e., `COMME des GARÇONS`, which can be returned using [`Label`](#CDG-namespace-prop) from the namespace. |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically found at the top of the care label. Its structure depends on the clothing line and moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string` &#124; [`NoYearPrint`](#CDG-NoYearPrint)) Year print of the garment, which corresponds to the year following the letters _AD_ typically found on the right side of the care label: a `string` containing the four (4) digits of the year if it is a defined value; an option from the `NoYearPrint` enum otherwise. |

<a id="CDG-namespace"></a>
#### Namespace

The namespace for the __COMME des GARÇONS__ label (`CDG`) provides access to the name of the label as a string (`CDG.Label`) and to the different possible status of the year print when there is no year defined (`CDG.NoYearPrint`).

<a id="CDG-namespace-prop"></a>
##### `CDG` properties

| Key | Description |
| :- | :- |
| `Label` | (`string`) Name of the label, i.e., `COMME des GARÇONS`. |
| `NoYearPrint`| ([`enum`](#CDG-NoYearPrint)) Status of the year print when there is no year defined. |

<a id="CDG-NoYearPrint"></a>
##### `NoYearPrint` properties

| Key | Description |
| :- | :- |
| `BLANK` | No year print originally printed on the care label. |
| `UNCLEAR` | Unclear integer following _AD_ on the care label. |
| `UNKNOWN` | Uncertainty whether _AD_ followed by an integer was originally printed on the care label. |

__Example:__
```
import { identify, CDG } from "path/to/release/index.js";

const garmentData = { label: CDG.Label, productCode: "GJ-10009S", yearPrint: CDG.NoYearPrint.UNCLEAR };
const idString = identify(garmentData);

console.log(idString);
```
__Expected output:__
```
> Label: COMME des GARÇONS
> Product code: GJ-10009S
> Year print: unclear

According to the monthly identification framework of COMME des GARÇONS, the garment should be a jacket in size S from one of the following:

COMME des GARÇONS
> any Spring/Summer collection between Spring/Summer 1989 and Spring/Summer 2002
```









<a id="YY"></a>
### Yohji Yamamoto

The current version should be able to identify all pieces of garments from the main womenswear and menswear lines of the __Yohji Yamamoto__ label, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_.

<a id="YY-key"></a>
#### Key characteristics for identification

Garments from the __Yohji Yamamo__ label (`label`) are characterized by their product code (`productCode`), logo style (`logoStyle`), sizing system (`sizingSystem`), font type (`fontType`), and laundry symbols location (`laundryLocation`).

##### Garment characteristics properties

| Key | Description |
| :- | :- |
| `label` | (`string`) Name of the label, i.e., `Yohji Yamamoto`, which can be returned using [`Label`](#YY-namespace-prop) from the namespace. |
| `productCode` | (`string` &#124; [`NoProductCode`](#YY-NoProductCode)) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically found at the top of the care label. |
| `logoStyle` | ([`LogoStyle`](#YY-LogoStyle)) |
| `sizingSystem` | ([`SizingSystem`](#YY-SizingSystem)) |
| `fontType` | ([`FontType`](#YY-FontType)) |
| `laundryLocation` | ([`LaundryLocation`](#YY-LaundryLocation)) |

<a id="YY-namespace"></a>
#### Namespace

The namespace for the __Yohji Yamamoto__ label (`YY`) provides access to the name of the label as a string (`YY.Label`), etc.

<a id="YY-namespace-prop"></a>
##### `YY` properties

| Key | Description |
| :- | :- |
| `Label` | (`string`) Name of the label, i.e., `Yohji Yamamoto`. |
| `NoProductCode`| ([`enum`](#YY-NoProductCode)) Status of the year print when there is no year defined. |
| `LogoStyle`| ([`enum`](#YY-LogoStyle)) Status of the year print when there is no year defined. |
| `SizingSystem`| ([`enum`](#YY-SizingSystem)) Status of the year print when there is no year defined. |
| `FontType`| ([`enum`](#YY-FontType)) Status of the year print when there is no year defined. |
| `LaundryLocation`| ([`enum`](#YY-LaundryLocation)) Status of the year print when there is no year defined. |

<a id="YY-NoProductCode"></a>
##### `NoProductCode` properties

| Key | Description |
| :- | :- |
| `BLANK` | (`string`) No year print originally printed on the care label. |
| `UNCLEAR` | (`string`) Unclear integer following _AD_ on the care label. |
| `UNKNOWN` | (`string`) Uncertainty whether _AD_ followed by an integer was originally printed on the care label. |

<a id="YY-LogoStyle"></a>
##### `LogoStyle` properties

<table>
  <tr>
    <td> <b>Key</b> </td>
    <td> <b>ID</b> </td>
    <td> <b>Description</b> </td>
  </tr>
  <tr>
    <td rowspan="3"> <code>YY</code> </td>
    <td> <code>1</code> </td>
    <td> <picture><source srcset="./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png" media="(prefers-color-scheme: dark)"><img src="./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png"></picture> </td>
  </tr>
  <tr>
    <td> <code>2</code> </td>
    <td> <picture><source srcset="./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png" media="(prefers-color-scheme: dark)"><img src="./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png"></picture> </td>
  </tr>
  <tr>
    <td> <code>3</code> </td>
    <td> <picture><source srcset="./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png" media="(prefers-color-scheme: dark)"><img src="./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png"></picture> </td>
  </tr>
</table>

| Key[ID] | Description |
| :- | :- |
| `YY[1]` | ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png#gh-dark-mode-only) ![Y_I](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png#gh-light-mode-only) |
| `YY[2]` | ![YY_2](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png#gh-dark-mode-only) ![YY_2](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png#gh-light-mode-only) |
| `YY[3]` | ![YY_3](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png#gh-dark-mode-only) ![YY_3](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png#gh-light-mode-only) |

| Key | Description |
| :- | :- |
| `YY` | ([`enum`](#YY-LogoStyle-YY)) Yohji Yamamoto signature logo on the clothing line label over the years. |

<a id="YY-LogoStyle-YY"></a>
###### `LogoStyle.YY` properties

| Key | Description |
| :- | :- |
| `1` | ![YY_1](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_white.png#gh-dark-mode-only) ![YY_1](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_I_black.png#gh-light-mode-only) |
| `2` | ![YY_2](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_white.png#gh-dark-mode-only) ![YY_2](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_II_black.png#gh-light-mode-only) |
| `3` | ![YY_3](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_white.png#gh-dark-mode-only) ![YY_3](./assets/YohjiYamamoto/small/YohjiYamamoto_MAIN_III_black.png#gh-light-mode-only) |

<a id="YY-SizingSystem"></a>
##### `SizingSystem` properties

| Key | Description |
| :- | :- |
| `ALPHABETICAL` | (`string`) No year print originally printed on the care label. |
| `NUMERICAL` | (`string`) Unclear integer following _AD_ on the care label. |
| `UNKNOWN` | (`string`) Uncertainty whether _AD_ followed by an integer was originally printed on the care label. |

<a id="YY-FontType"></a>
##### `FontType` properties

| Key | Description |
| :- | :- |
| `SERIF` | (`string`) No year print originally printed on the care label. |
| `SANS_SERIF` | (`string`) Unclear integer following _AD_ on the care label. |
| `UNKNOWN` | (`string`) Uncertainty whether _AD_ followed by an integer was originally printed on the care label. |

<a id="YY-LaundryLocation"></a>
##### `LaundryLocation` properties

| Key | Description |
| :- | :- |
| `BELOW` | (`string`) No year print originally printed on the care label. |
| `ABOVE` | (`string`) Unclear integer following _AD_ on the care label. |
| `UNKNOWN` | (`string`) Uncertainty whether _AD_ followed by an integer was originally printed on the care label. |

__Example:__
```
import { identify, YY } from "path/to/release/index.js";

const garmentData = { ... };
const idString = identify(garmentData);

console.log(idString);
```
__Expected output:__
```
output
```








































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
