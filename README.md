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

<!-----------
-------------
-------------

HOW TO IDENTIFY

-------------
-------------
------------>

<a id="how-to"></a>
## How to identify a piece of garment with the identification module

<a id="preparing"></a>
### Preparing for identification

A garment is identified through a small set of label-specific characteristics. This information must be entered in an `Object` as values to a label-specific set of keys. Consult the [_Label-specific information_](#label-specific) section to know the set of keys to enter for each label.

<a id="returning"></a>
### Returning the identification results

The identification results of a specified set of characteristics can be returned as a string representation or as raw identification data, for more malleability.

<!-----------
-------------
-------------

STRING REPRESENTATION

-------------
-------------
------------>

<a id="returning-1"></a>
#### Option 1 (simple): obtaining a string representation using `identify()`

The `identify()` method returns a `string` that confirms the specified element's characteristics and, according to the possible identification frameworks and exception statuses, lists all possible clothing lines and corresponding collections that a garment with such characteristics may be from, along with other information that can be extracted from such characteristics, such as the stylized product code, the garment type, the garment size, and the possibility of counterfeit.

__Example:__
```
import { identify, CDG } from "path/to/release/index.js";

const garmentData = {
  label: CDG.Label,
  productCode: "GJ-10009S",
  yearPrint: "1994"
};

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

<!-----------
-------------
-------------

RAW IDENTIFICATION

-------------
-------------
------------>

<a id="returning-2"></a>
#### Option 2 (advanced): accessing the raw identification data using `extract()`

The `extract()` method returns the raw identification data according to the specified element's characteristics in the form of an array of [`Identification`](#Identification) items. Each item contains a copy of the specified element (`input`) and label (`label`) and, according to the identification framework (`framework`) and exception status (`exception`), the list of all possible clothing lines and corresponding collections that a garment with such characteristics may be from (`lineList`), along with other information that can be extracted from such characteristics, such as the stylized product code (`stylizedCode`), the garment type (`garmentType`), the garment size (`garmentSize`), and the possibility of counterfeit (`counterfeit`).

In turn, the list of all possible clothing lines and corresponding collections (`lineList`) takes the form of an array of [`Line`](#Line) items, where each item contains the name of the clothing line (`name`) and the list of corresponding collections (`collectionList`).

Finally, the list of corresponding collections (`collectionList`) takes the form of an array of [`Collection`](#Collection) items, where each item contains the year of the collection (`year`) and possibly the season (`season`), the title (`title`), and other information (`text`).

<a id="Identification"></a>
##### `Identification` class properties
  
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
##### `Line` class properties

| Key | Description |
| :- | :- |
| `name` | (`string`) Name of the clothing line. |
| `collectionList` | ([`Collection[]`](#Collection)) Array of corresponding collections. |

<a id="Collection"></a>
##### `Collection` class properties

| Key | Description |
| :- | :- |
| `year` | (`number`) Year of the collection. |
| `season` | (`string`) Semiannual season of the collection: `Spring/Summer` or `Autumn/Winter`; `null` if none. |
| `title` | (`string`) Title of the collection; `null` if none. |
| `text` | (`string`) Other information; `null` if none. |

__Example:__
```
import { extract, CDG } from "path/to/release/index.js";

const garmentData = {
  label: CDG.Label,
  productCode: "GJ-10009S",
  yearPrint: "1994"
};

const idList = extract(garmentData);
console.log(JSON.stringify(idList));
```
__Expected output:__
```
[{"input":{"label":"COMME des GARÇONS","productCode":"GJ-10009S","yearPrint":"1994"},"label":"COMME des GARÇONS","framework":"monthly","exception":false,"lineList":[{"name":"COMME des GARÇONS","collectionList":[{"year":1995,"season":"Spring/Summer","title":"Transcending Gender"}]}],"stylizedCode":"GJ-10009S","garmentType":"a jacket","garmentSize":"S","counterfeit":false}]
```

---

<!-----------
-------------
-------------

LABEL-SPECIFIC CHARACTERISTICS

-------------
-------------
------------>

<a id="label-specific"></a>
## Label-specific characteristics

Recall that a garment is identified through a small set of label-specific characteristics. Keeping track of these characteristics and their acceptable values gets tedious considering how severely the identification process differs between labels. Luckily, many of these are limited to small sets of qualitative options, allowing for the use of enum types to simplify the classification of garments. As such, each label has a corresponding namespace providing access to useful enums and variables to be used as values when putting together the characteristics data of a garment in an `Object`. This section describes the label-specific sets of keys required for identification and the corresponding namespaces.

<!-----------
-------------
-------------

COMME DES GARÇONS

-------------
-------------
------------>

<a id="CDG"></a>
### COMME des GARÇONS

The current version should be able to identify all pieces of garments from the __COMME des GARÇONS__ label.

<a id="CDG-key"></a>
#### Key characteristics for identification

Garments from the __COMME des GARÇONS__ label (`label`) are characterized by their product code (`productCode`) and year print (`yearPrint`).

##### Garment characteristics object properties

| Key | Description |
| :- | :- |
| `label` | (`string`) Name of the label, i.e., `COMME des GARÇONS`, which can be returned using [`Label`](#CDG-namespace-prop) from the namespace. |
| `productCode` | (`string`) Product code of the garment, which corresponds to the seemingly random string of 6-9 characters typically found at the top of the care label. Its structure depends on the clothing line and moment of production. Although the code `D-TK9210` occasionally appears on the care label, it is not the product code. |
| `yearPrint` | (`string` &#124; [`NoYearPrint`](#CDG-NoYearPrint)) Year print of the garment, which corresponds to the year following the letters _AD_ typically found on the right side of the care label: a `string` containing the four (4) digits if it is a defined value; an option from the `NoYearPrint` enum otherwise. |

<a id="CDG-namespace"></a>
#### Namespace

The namespace for the __COMME des GARÇONS__ label (`CDG`) provides access to the name of the label as a string (`CDG.Label`) and the possible statuses of the year print when there is no year defined (`CDG.NoYearPrint`).

<a id="CDG-namespace-prop"></a>
##### `CDG` namespace properties

| Key | Description |
| :- | :- |
| `Label` | (`string`) Name of the label, i.e., `COMME des GARÇONS`. |
| `NoYearPrint`| ([`enum`](#CDG-NoYearPrint)) Status of the year print when there is no year defined. |

<a id="CDG-NoYearPrint"></a>
##### `NoYearPrint` enum properties

| Key | Description |
| :- | :- |
| `BLANK` | No year was originally printed on the care label. |
| `UNCLEAR` | Unclear integer following _AD_ on the care label. |
| `UNKNOWN` | Uncertainty whether _AD_ followed by an integer was originally printed on the care label. |

__Example:__
```
import { identify, CDG } from "path/to/release/index.js";

const garmentData = {
  label: CDG.Label,
  productCode: "GJ-10009S",
  yearPrint: CDG.NoYearPrint.UNCLEAR
};

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

<!-----------
-------------
-------------

YOHJI YAMAMOTO

-------------
-------------
------------>

<a id="YY"></a>
### Yohji Yamamoto

The current version should be able to identify all pieces of garments from the main womenswear and menswear lines of the __Yohji Yamamoto__ label, i.e., from the lines _Yohji Yamamoto_ and _Yohji Yamamoto POUR HOMME_.

<a id="YY-key"></a>
#### Key characteristics for identification

Garments from the __Yohji Yamamo__ label (`label`) are characterized by their product code (`productCode`), logo style (`logoStyle`), sizing system (`sizingSystem`), font type (`fontType`), and laundry symbols position (`laundryPosition`).

##### Garment characteristics object properties

| Key | Description |
| :- | :- |
| `label` | (`string`) Name of the label, i.e., `Yohji Yamamoto`, which can be returned using [`Label`](#YY-namespace-prop) from the namespace. |
| `productCode` | (`string` &#124; [`NoProductCode`](#YY-NoProductCode)) Product code of the garment, which corresponds to the larger, seemingly random string of 8 characters typically found on the care label: a `string` containing the eight (8) characters if it is a defined entry; an option from the `NoProductCode` enum otherwise. |
| `logoStyle` | ([`LogoStyle`](#YY-LogoStyle)) Logo style on the clothing line tag. |
| `sizingSystem` | ([`SizingSystem`](#YY-SizingSystem)) Garment sizing system used. |
| `fontType` | ([`FontType`](#YY-FontType)) Font type used on the care label. |
| `laundryPosition` | ([`LaundryPosition`](#YY-LaundryPosition)) Laundry symbols position relative to the product code on the care label. |

<a id="YY-namespace"></a>
#### Namespace

The namespace for the __Yohji Yamamoto__ label (`YY`) provides access to the name of the label as a string (`YY.Label`), the possible statuses of the product code print when there is no product code defined (`YY.NoProductCode`), the possible options of logo style on the clothing line tag (`YY.LogoStyle`), of garment sizing system (`YY.SizingSystem`), of font type (`YY.FontType`), and of laundry symbols position (`YY.LaundryPosition`).

<a id="YY-namespace-prop"></a>
##### `YY` namespace properties

| Key | Description |
| :- | :- |
| `Label` | (`string`) Name of the label, i.e., `Yohji Yamamoto`. |
| `NoProductCode`| ([`enum`](#YY-NoProductCode)) Status of the product code print when there is no product code defined. |
| `LogoStyle`| ([`enum`](#YY-LogoStyle)) Logo style options on the clothing line tag. |
| `SizingSystem`| ([`enum`](#YY-SizingSystem)) Garment sizing system options. |
| `FontType`| ([`enum`](#YY-FontType)) Font type options. |
| `LaundryPosition`| ([`enum`](#YY-LaundryPosition)) Laundry symbols position options. |

<a id="YY-NoProductCode"></a>
##### `NoProductCode` enum properties

| Key | Description |
| :- | :- |
| `BLANK` | No product code was originally printed on the care label. |
| `UNCLEAR` | Unclear product code on the care label. |
| `UNKNOWN` | Uncertainty whether a product code was originally printed on the care label. |

<a id="YY-LogoStyle"></a>
##### `LogoStyle` enum properties

<table>
  <tr>
    <td> <b>Key</b> </td>
    <td> <b>ID</b> </td>
    <td> <b>Description</b> </td>
  </tr>
  <tr>
    <td rowspan="3"> <code>YY</code> </td>
    <td> <code>1</code> </td>
    <td> <picture><source srcset="./assets/YohjiYamamoto/README/LogoStyle/YY/YohjiYamamoto_LogoStyle_YY_1_white.png" media="(prefers-color-scheme:dark)"><img src="./assets/YohjiYamamoto/README/LogoStyle/YY/YohjiYamamoto_LogoStyle_YY_1_black.png"></picture> </td>
  </tr>
  <tr>
    <td> <code>2</code> </td>
    <td> <picture><source srcset="./assets/YohjiYamamoto/README/LogoStyle/YY/YohjiYamamoto_LogoStyle_YY_2_white.png" media="(prefers-color-scheme:dark)"><img src="./assets/YohjiYamamoto/README/LogoStyle/YY/YohjiYamamoto_LogoStyle_YY_2_black.png"></picture> </td>
  </tr>
  <tr>
    <td> <code>3</code> </td>
    <td> <picture><source srcset="./assets/YohjiYamamoto/README/LogoStyle/YY/YohjiYamamoto_LogoStyle_YY_3_white.png" media="(prefers-color-scheme:dark)"><img src="./assets/YohjiYamamoto/README/LogoStyle/YY/YohjiYamamoto_LogoStyle_YY_3_black.png"></picture> </td>
  </tr>
</table>

<!--| Key[ID] | Description |
| :- | :- |
| `YY[1]` | ![YY_1](./assets/YohjiYamamoto/README/LogoStyle/YY/name#gh-dark-mode-only) ![YY_1](./assets/YohjiYamamoto/README/LogoStyle/YY/name#gh-light-mode-only) |
| `YY[2]` | ![YY_2](./assets/YohjiYamamoto/README/LogoStyle/YY/name#gh-dark-mode-only) ![YY_2](./assets/YohjiYamamoto/README/LogoStyle/YY/name#gh-light-mode-only) |
| `YY[3]` | ![YY_3](./assets/YohjiYamamoto/README/LogoStyle/YY/name#gh-dark-mode-only) ![YY_3](./assets/YohjiYamamoto/README/LogoStyle/YY/name#gh-light-mode-only) |-->

<a id="YY-SizingSystem"></a>
##### `SizingSystem` enum properties

| Key | Description |
| :- | :- |
| `ALPHABETICAL` | Alphabetical garment sizing system. |
| `NUMERICAL` | Numerical garment sizing system. |
| `UNKNOWN` | Uncertainty about the garment sizing system. |

<a id="YY-FontType"></a>
##### `FontType` enum properties

| Key | Description |
| :- | :- |
| `SERIF` | Serif font type on the care label. |
| `SANS_SERIF` | Sans serif font type on the care label. |
| `UNKNOWN` | Uncertainty about the font type on the care label. |

<a id="YY-LaundryPosition"></a>
##### `LaundryPosition` enum properties

| Key | Description |
| :- | :- |
| `BELOW` | Laundry symbols positioned below the product code on the care label. |
| `ABOVE` | Laundry symbols positioned above the product code on the care label. |
| `UNKNOWN` | Uncertainty about the position of the laundry symbols relative to the product code on the care label. |

__Example:__
```
import { identify, YY } from "path/to/release/index.js";

const garmentData = {
  label: YY.Label,
  logoStyle: YY.LogoStyle.YY[3],
  productCode: "FY-C10-104",
  sizingSystem: YY.SizingSystem.ALPHABETICAL,
  fontType: YY.FontType.SERIF,
  laundryPosition: YY.LaundryPosition.BELOW
};

const idString = identify(garmentData);
console.log(idString);
```
__Expected output:__
```
> Label: Yohji Yamamoto
> Logo style: current, sharp Yohji Yamamoto signature
> Product code: FY-C10-104
> Sizing system: alphabetical
> Font type: serif
> Laundry symbols position: below

According to the regular identification framework of Yohji Yamamoto, the garment should be a coat from the following:

Yohji Yamamoto
> Autumn/Winter 1998-1999
```

---

<!-----------
-------------
-------------

CONTACT

-------------
-------------
------------>

# Contact

Contact us for any questions or suggestions.

Email: contact@myclothingarchive.com  
Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)  
Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

__Support this project by [subscribing to our Patreon](https://www.patreon.com/bePatron?u=36066750) or [donating on PayPal](https://www.paypal.com/donate/?hosted_button_id=AP5AP2WBUNNQL).__
