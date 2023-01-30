# Comme des Garçons Identification Function / JavaScript

### Made possible by the support our [Patreon](https://www.patreon.com/bePatron?u=36066750) subscribers. Thank you!

This JavaScript function can help you identify any Comme des Garçons piece from the product code and production year on the care label. For more information on how to identify Comme des Garçons, please consult the identification chart.

### Try it out on our [website](https://www.myclothingarchive.net/identification).

## Function

### identify_cdg( *product code, production year / "blank" / "erased"* )

Simply provide the product code and the production year (*AD####*) found on the care label. Replace the year number with the string *blank* if there is no production year or with the string *erased* if it has been washed off.

## Output

### *[ product code, production year / "blank" / "erased", garment type ID, size, collections ]*

The function will output a single array consisting of the stylized product code, the production year (or the string *blank* or *erased* as described above), the garment type ID, the size (if it can be deduced from the product code), and the possible collections related to the product code and production year.

#### Garment type ID:

The garment type as a string can be immediately accessed by calling the garment type ID as an index of the dictionary *garmentID_dict*.

#### Collections:

The collections are given as a single array of the form *[ [ line name, [ [ season, year ], ... ] ], ...]* containing arrays for which the first element consists of the name of the line while the second is an array of elements the form *[ season, year ]*, where the season is given as the character *S* for Spring/Summer, *W* for Autumn/Winter, or as an empty string if it not not seasonal.

- The collections consist of an empty array if no match can be found with the given inputs.

- The first element of the collections array consists of the string *fake* if the given inputs have been observed on reproductions before.

## Contact

Please contact My Clothing Archive if you have any question or suggestion.

Email: contact@myclothingarchive.com

Website: [https://www.myclothingarchive.net/](https://www.myclothingarchive.net/)

Instagram: [@myclothingarchive](https://www.instagram.com/myclothingarchive/)

### [And thank you for supporting our Patreon!](https://www.patreon.com/bePatron?u=36066750)
