/**
 * Initialization of TITLES.
 *
 * Initialization of the COMME des GARÇONS collection titles.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";

// Initializing useful parameter
const Season = Collection.Season;
let TITLES_tofill = {};

TITLES_tofill["CDG"] = [
    // 1980s
    new Collection(1981, Season.W, "Pirates"),
    new Collection(1982, Season.S, "Indigo Dye and Twist"),
    new Collection(1982, Season.W, "Holes"),
    new Collection(1983, Season.S, "Patchworks and X"),
    new Collection(1983, Season.W, "Gloves, Skirts, Quilted Big Coats"),
    new Collection(1984, Season.S, "Round Rubber"),
    new Collection(1984, Season.W, "Twist, Silk + Jersey, Knits (Patchworks)"),
    new Collection(1985, Season.S, "Mud-Dyed"),
    new Collection(1985, Season.W, "Dots, Polyester Pleats"),
    new Collection(1986, Season.S, "Bias Cutting"),
    new Collection(1986, Season.W, "Bonding"),
    new Collection(1987, Season.S, "Young Chic, No Shoulder"),
    new Collection(1987, Season.W, "White Shirt + Pants, Khaki, Lili Marleen"),
    new Collection(1988, Season.S, "Frontless, Lamé, Sequins"),
    new Collection(1988, Season.W, "Red is Black"),
    new Collection(1989, Season.S, "Movement"),
    new Collection(1989, Season.W, "Liberation from Tailoring (Next New One)"),

    // 1990s
    new Collection(1990, Season.S, "Refresh the Spirits"),
    new Collection(1990, Season.W, "Modern Sweetness"),
    new Collection(1991, Season.S, "Ink Dye, Stained Glass"),
    new Collection(1991, Season.W, "Chic Punk"),
    new Collection(1992, Season.S, "Unfinished"),
    new Collection(1992, Season.W, "Lilith"),
    new Collection(1993, Season.S, "Ultrasimple"),
    new Collection(1993, Season.W, "Synergy"),
    new Collection(1994, Season.S, "Eccentric"),
    new Collection(1994, Season.W, "Metamorphosis"),
    new Collection(1995, Season.S, "Transcending Gender"),
    new Collection(1995, Season.W, "Sweeter Than Sweet"),
    new Collection(1996, Season.S, "Kaleidoscope"),
    new Collection(1996, Season.W, "Flowering Clothes"),
    new Collection(1997, Season.S, "Body Meets Dress—Dress Meets Body"),
    new Collection(1997, Season.W, "Adult Punk"),
    new Collection(1998, Season.S, "Clustering Beauty"),
    new Collection(1998, Season.W, "Fusion"),
    new Collection(1999, Season.S, "New Essential"),
    new Collection(1999, Season.W, "Transformed Glamour"),

    // 2000s
    new Collection(2000, Season.S, "Coercion"),
    new Collection(2000, Season.W, "Hard and Foreceful (Energy)"),
    new Collection(2001, Season.S, "Optical Shock (Volume)"),
    new Collection(2001, Season.W, "Beyond Taboo"),
    new Collection(2002, Season.S, "Ethnic Couture (White)"),
    new Collection(2002, Season.W, "Free Knitting (Freedom of Knits)"),
    new Collection(2003, Season.S, "Extreme Embellishment (Adornment)"),
    new Collection(2003, Season.W, "Square"),
    new Collection(2004, Season.S, "Abstract Excellence"),
    new Collection(2004, Season.W, "Dark Romance, Witch"),
    new Collection(2005, Season.S, "Ballerine Motorbike"),
    new Collection(2005, Season.W, "Broken Bride"),
    new Collection(2006, Season.S, "Lost Empire"),
    new Collection(2006, Season.W, "Persona"),
    new Collection(2007, Season.S, "Cubisme"),
    new Collection(2007, Season.W, "Curiosity"),
    new Collection(2008, Season.S, "Cacophony"),
    new Collection(2008, Season.W, "Bad Taste"),
    new Collection(2009, Season.S, "Tomorrow's Black"),
    new Collection(2009, Season.W, "Wonderland"),

    // 2010s
    new Collection(2010, Season.S, "Adult Delinquent"),
    new Collection(2010, Season.W, "Inside Decoration"),
    new Collection(2011, Season.S, "No Theme (Multiple Personalities, Psychological Fear)"),
    new Collection(2011, Season.W, "Hybrid"),
    new Collection(2012, Season.S, "White Drama"),
    new Collection(2012, Season.W, "2 Dimensions"),
    new Collection(2013, Season.S, "Crush"),
    new Collection(2013, Season.W, "The Infinity of Tailoring"),
    new Collection(2014, Season.S, "Not Making Clothing"),
    new Collection(2014, Season.W, "MONSTER"),
    new Collection(2015, Season.S, "Blood and Roses"),
    new Collection(2015, Season.W, "Ceremony of Separation"),
    new Collection(2016, Season.S, "Blue Witch"),
    new Collection(2016, Season.W, "18th-Century Punk"),
    new Collection(2017, Season.S, "Invisible Clothes"),
    new Collection(2017, Season.W, "The Future of Silhouette"),
    new Collection(2018, Season.S, "Multidimensional Graffiti"),
    new Collection(2018, Season.W, "Comme des Garçons Camp"),
    new Collection(2019, Season.S), // UNKNOWN
    new Collection(2019, Season.W, "A Gathering of Shadows"),

    // 2020s
    new Collection(2020, Season.S, "Orlando (Act Two)"),
    new Collection(2020, Season.W), // UNKNOWN
    new Collection(2021, Season.S, "Dissonance"),
    new Collection(2021, Season.W, "Landscape of Shadows"),
    new Collection(2022, Season.S, "My Present State of Mind (rather than a theme)"),
    new Collection(2022, Season.W, "BLACK ROSE"),
    new Collection(2023, Season.S, "A lamentation for the sorrow in the world today. And a feeling of wanting to stand together"),
    new Collection(2023, Season.W, "Return to the Source"),
    new Collection(2024, Season.S), // UNKNOWN
    new Collection(2024, Season.W, "Anger"),
];

TITLES_tofill["HP"] = [
    // 1990s
    new Collection(1993, Season.W, "Artists in their Studios"),
    new Collection(1994, Season.S, "Smart Boy"),
    new Collection(1994, Season.W, "Offbeat Humor"),
    new Collection(1995, Season.S, "Work"),
    new Collection(1995, Season.W, "Sleep"),
    new Collection(1996, Season.S, "Disconnected Gentleman"),
    new Collection(1996, Season.W, "Traditional"),
    new Collection(1997, Season.S, "Check"),
    new Collection(1997, Season.W, "Magic of Bias"),
    new Collection(1998, Season.S, "New Natural"),
    new Collection(1998, Season.W, "Inside Outside"),
    new Collection(1999, Season.S, "Secret Treasure"),
    new Collection(1999, Season.W, "Souvenir Kitsch"),

    // 2000s
    new Collection(2000, Season.S, "Evolution of Color"),
    new Collection(2000, Season.W, "Docking Rock"),
    new Collection(2001, Season.S, "Double Face"),
    new Collection(2001, Season.W, "Looking at Different World"),
    new Collection(2002, Season.S, "Destruction of Trad"),
    new Collection(2002, Season.W, "Black"),
    new Collection(2003, Season.S, "Daytime Evening"),
    new Collection(2003, Season.W, "Curve"),
    new Collection(2004, Season.S, "Simple & Utility"),
    new Collection(2004, Season.W, "Lost Englishman"),
    new Collection(2005, Season.S, "Pink Panther"),
    new Collection(2005, Season.W, "Sports Tailoring"),
    new Collection(2006, Season.S, "Rip & Tongue"),
    new Collection(2006, Season.W, "Bad Boy"),
    new Collection(2007, Season.S, "Golden Boy"),
    new Collection(2007, Season.W, "My Way"),
    new Collection(2008, Season.S, "Super Imposition"),
    new Collection(2008, Season.W, "Time for Magic"),
    new Collection(2009, Season.S, "Black Is Best"),
    new Collection(2009, Season.W, "Fashion Illusion"),

    // 2010s
    new Collection(2010, Season.S, "Random Collage"),
    new Collection(2010, Season.W, "Protection"),
    new Collection(2011, Season.S, "Skull of Life"),
    new Collection(2011, Season.W, "Décadence"),
    new Collection(2012, Season.S, "Tailoring for Punks"),
    new Collection(2012, Season.W, "Neither Man nor Woman"),
    new Collection(2013, Season.S, "Poor King"),
    new Collection(2013, Season.W, "The Tree of Youth"),
    new Collection(2014, Season.S, "Hatching"),
    new Collection(2014, Season.W, "Holy Jacket"),
    new Collection(2015, Season.S, "Anti War"),
    new Collection(2015, Season.W, "The Power of Ceremony"),
    new Collection(2016, Season.S, "Broken Tailoring"),
    new Collection(2016, Season.W, "The Armor of Peace"),
    new Collection(2017, Season.S, "The King is Naked"),
    new Collection(2017, Season.W, "Boyhood"),
    new Collection(2018, Season.S, "Disco"),
    new Collection(2018, Season.W, "White Shock"),
    new Collection(2019, Season.S, "Suit Comeback"),
    new Collection(2019, Season.W, "Finding Beauty in the Dark"),

    // 2020s
    new Collection(2020, Season.S, "Orlando"),
    new Collection(2020, Season.W, "Color Resistance"),
    new Collection(2021, Season.S, "Metal Outlaw"),
    new Collection(2021, Season.W, "DARKROOM"),
    new Collection(2022, Season.S, "The Existence of Flowers"),
    new Collection(2022, Season.W, "Nomad"),
    new Collection(2023, Season.S, "ANOTHER KIND OF PUNK"),
    new Collection(2023, Season.W, "Tailoring of the Avant-Garde"),
    new Collection(2024, Season.S, "Beyond Reality"),
    new Collection(2024, Season.W, "Spiritual World"),
];

TITLES_tofill["RKCDG"] = TITLES_tofill["CDG"];
TITLES_tofill["RKHP"] = TITLES_tofill["HP"];

/**
 * Enum for the array of COMME des GARÇONS collection titles by line.
 * @constant
 * @readonly
 * @enum {Collection[]}
 */
const TITLES = deepFreeze(TITLES_tofill);

export default TITLES;