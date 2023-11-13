/**
 * Initialization of TITLES.
 *
 * Initialization of the COMME des GARÇONS collection titles.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
import LINES from "./LINES.js";

// Initializing useful parameter
const SEASONS = Collection.SEASONS;
let TITLES_tofill = {};

TITLES_tofill[LINES.CDG.name] = [
    // 1980s
    new Collection(1981, SEASONS.W, "Pirates"),
    new Collection(1982, SEASONS.S, "Indigo Dye and Twist"),
    new Collection(1982, SEASONS.W, "Holes"),
    new Collection(1983, SEASONS.S, "Patchworks and X"),
    new Collection(1983, SEASONS.W, "Gloves, Skirts, Quilted Big Coats"),
    new Collection(1984, SEASONS.S, "Round Rubber"),
    new Collection(1984, SEASONS.W, "Twist, Silk + Jersey, Knits (Patchworks)"),
    new Collection(1985, SEASONS.S, "Mud-Dyed"),
    new Collection(1985, SEASONS.W, "Dots, Polyester Pleats"),
    new Collection(1986, SEASONS.S, "Bias Cutting"),
    new Collection(1986, SEASONS.W, "Bonding"),
    new Collection(1987, SEASONS.S, "Young Chic, No Shoulder"),
    new Collection(1987, SEASONS.W, "White Shirt + Pants, Khaki, Lili Marleen"),
    new Collection(1988, SEASONS.S, "Frontless, Lamé, Sequins"),
    new Collection(1988, SEASONS.W, "Red is Black"),
    new Collection(1989, SEASONS.S, "Movement"),
    new Collection(1989, SEASONS.W, "Liberation from Tailoring (Next New One)"),

    // 1990s
    new Collection(1990, SEASONS.S, "Refresh the Spirits"),
    new Collection(1990, SEASONS.W, "Modern Sweetness"),
    new Collection(1991, SEASONS.S, "Ink Dye, Stained Glass"),
    new Collection(1991, SEASONS.W, "Chic Punk"),
    new Collection(1992, SEASONS.S, "Unfinished"),
    new Collection(1992, SEASONS.W, "Lilith"),
    new Collection(1993, SEASONS.S, "Ultrasimple"),
    new Collection(1993, SEASONS.W, "Synergy"),
    new Collection(1994, SEASONS.S, "Eccentric"),
    new Collection(1994, SEASONS.W, "Metamorphosis"),
    new Collection(1995, SEASONS.S, "Transcending Gender"),
    new Collection(1995, SEASONS.W, "Sweeter Than Sweet"),
    new Collection(1996, SEASONS.S, "Kaleidoscope"),
    new Collection(1996, SEASONS.W, "Flowering Clothes"),
    new Collection(1997, SEASONS.S, "Body Meets Dress—Dress Meets Body"),
    new Collection(1997, SEASONS.W, "Adult Punk"),
    new Collection(1998, SEASONS.S, "Clustering Beauty"),
    new Collection(1998, SEASONS.W, "Fusion"),
    new Collection(1999, SEASONS.S, "New Essential"),
    new Collection(1999, SEASONS.W, "Transformed Glamour"),

    // 2000s
    new Collection(2000, SEASONS.S, "Coercion"),
    new Collection(2000, SEASONS.W, "Hard and Foreceful (Energy)"),
    new Collection(2001, SEASONS.S, "Optical Shock (Volume)"),
    new Collection(2001, SEASONS.W, "Beyond Taboo"),
    new Collection(2002, SEASONS.S, "Ethnic Couture (White)"),
    new Collection(2002, SEASONS.W, "Free Knitting (Freedom of Knits)"),
    new Collection(2003, SEASONS.S, "Extreme Embellishment (Adornment)"),
    new Collection(2003, SEASONS.W, "Square"),
    new Collection(2004, SEASONS.S, "Abstract Excellence"),
    new Collection(2004, SEASONS.W, "Dark Romance, Witch"),
    new Collection(2005, SEASONS.S, "Ballerine Motorbike"),
    new Collection(2005, SEASONS.W, "Broken Bride"),
    new Collection(2006, SEASONS.S, "Lost Empire"),
    new Collection(2006, SEASONS.W, "Persona"),
    new Collection(2007, SEASONS.S, "Cubisme"),
    new Collection(2007, SEASONS.W, "Curiosity"),
    new Collection(2008, SEASONS.S, "Cacophony"),
    new Collection(2008, SEASONS.W, "Bad Taste"),
    new Collection(2009, SEASONS.S, "Tomorrow's Black"),
    new Collection(2009, SEASONS.W, "Wonderland"),

    // 2010s
    new Collection(2010, SEASONS.S, "Adult Delinquent"),
    new Collection(2010, SEASONS.W, "Inside Decoration"),
    new Collection(2011, SEASONS.S, "No Theme (Multiple Personalities, Psychological Fear)"),
    new Collection(2011, SEASONS.W, "Hybrid"),
    new Collection(2012, SEASONS.S, "White Drama"),
    new Collection(2012, SEASONS.W, "2 Dimensions"),
    new Collection(2013, SEASONS.S, "Crush"),
    new Collection(2013, SEASONS.W, "The Infinity of Tailoring"),
    new Collection(2014, SEASONS.S, "Not Making Clothing"),
    new Collection(2014, SEASONS.W, "MONSTER"),
    new Collection(2015, SEASONS.S, "Blood and Roses"),
    new Collection(2015, SEASONS.W, "Ceremony of Separation"),
    new Collection(2016, SEASONS.S, "Blue Witch"),
    new Collection(2016, SEASONS.W, "18th-Century Punk"),
    new Collection(2017, SEASONS.S, "Invisible Clothes"),
    new Collection(2017, SEASONS.W, "The Future of Silhouette"),
    new Collection(2018, SEASONS.S, "Multidimensional Graffiti"),
    new Collection(2018, SEASONS.W, "Comme des Garçons Camp"),
    new Collection(2019, SEASONS.S), // UNKNOWN
    new Collection(2019, SEASONS.W, "A Gathering of Shadows"),

    // 2020s
    new Collection(2020, SEASONS.S, "Orlando (Act Two)"),
    new Collection(2020, SEASONS.W), // UNKNOWN
    new Collection(2021, SEASONS.S, "Dissonance"),
    new Collection(2021, SEASONS.W, "Landscape of Shadows"),
    new Collection(2022, SEASONS.S, "My Present State of Mind (rather than a theme)"),
    new Collection(2022, SEASONS.W, "BLACK ROSE"),
    new Collection(2023, SEASONS.S, "A lamentation for the sorrow in the world today. And a feeling of wanting to stand together"),
    new Collection(2023, SEASONS.W, "Return to the Source"),
];

TITLES_tofill[LINES.HP.name] = [
    // 1990s
    new Collection(1993, SEASONS.W, "Artists in their Studios"),
    new Collection(1994, SEASONS.S, "Smart Boy"),
    new Collection(1994, SEASONS.W, "Offbeat Humor"),
    new Collection(1995, SEASONS.S, "Work"),
    new Collection(1995, SEASONS.W, "Sleep"),
    new Collection(1996, SEASONS.S, "Disconnected Gentleman"),
    new Collection(1996, SEASONS.W, "Traditional"),
    new Collection(1997, SEASONS.S, "Check"),
    new Collection(1997, SEASONS.W, "Magic of Bias"),
    new Collection(1998, SEASONS.S, "New Natural"),
    new Collection(1998, SEASONS.W, "Inside Outside"),
    new Collection(1999, SEASONS.S, "Secret Treasure"),
    new Collection(1999, SEASONS.W, "Souvenir Kitsch"),

    // 2000s
    new Collection(2000, SEASONS.S, "Evolution of Color"),
    new Collection(2000, SEASONS.W, "Docking Rock"),
    new Collection(2001, SEASONS.S, "Double Face"),
    new Collection(2001, SEASONS.W, "Looking at Different World"),
    new Collection(2002, SEASONS.S, "Destruction of Trad"),
    new Collection(2002, SEASONS.W, "Black"),
    new Collection(2003, SEASONS.S, "Daytime Evening"),
    new Collection(2003, SEASONS.W, "Curve"),
    new Collection(2004, SEASONS.S, "Simple & Utility"),
    new Collection(2004, SEASONS.W, "Lost Englishman"),
    new Collection(2005, SEASONS.S, "Pink Panther"),
    new Collection(2005, SEASONS.W, "Sports Tailoring"),
    new Collection(2006, SEASONS.S, "Rip & Tongue"),
    new Collection(2006, SEASONS.W, "Bad Boy"),
    new Collection(2007, SEASONS.S, "Golden Boy"),
    new Collection(2007, SEASONS.W, "My Way"),
    new Collection(2008, SEASONS.S, "Super Imposition"),
    new Collection(2008, SEASONS.W, "Time for Magic"),
    new Collection(2009, SEASONS.S, "Black Is Best"),
    new Collection(2009, SEASONS.W, "Fashion Illusion"),

    // 2010s
    new Collection(2010, SEASONS.S, "Random Collage"),
    new Collection(2010, SEASONS.W, "Protection"),
    new Collection(2011, SEASONS.S, "Skull of Life"),
    new Collection(2011, SEASONS.W, "Décadence"),
    new Collection(2012, SEASONS.S, "Tailoring for Punks"),
    new Collection(2012, SEASONS.W, "Neither Man nor Woman"),
    new Collection(2013, SEASONS.S, "Poor King"),
    new Collection(2013, SEASONS.W, "The Tree of Youth"),
    new Collection(2014, SEASONS.S, "Hatching"),
    new Collection(2014, SEASONS.W, "Holy Jacket"),
    new Collection(2015, SEASONS.S, "Anti War"),
    new Collection(2015, SEASONS.W, "The Power of Ceremony"),
    new Collection(2016, SEASONS.S, "Broken Tailoring"),
    new Collection(2016, SEASONS.W, "The Armor of Peace"),
    new Collection(2017, SEASONS.S, "The King is Naked"),
    new Collection(2017, SEASONS.W, "Boyhood"),
    new Collection(2018, SEASONS.S, "Disco"),
    new Collection(2018, SEASONS.W, "White Shock"),
    new Collection(2019, SEASONS.S, "Suit Comeback"),
    new Collection(2019, SEASONS.W, "Finding Beauty in the Dark"),

    // 2020s
    new Collection(2020, SEASONS.S, "Orlando"),
    new Collection(2020, SEASONS.W, "Color Resistance"),
    new Collection(2021, SEASONS.S, "Metal Outlaw"),
    new Collection(2021, SEASONS.W, "DARKROOM"),
    new Collection(2022, SEASONS.S, "The Existence of Flowers"),
    new Collection(2022, SEASONS.W, "Nomad"),
    new Collection(2023, SEASONS.S, "ANOTHER KIND OF PUNK"),
    new Collection(2023, SEASONS.W, "Tailoring of the Avant-Garde"),
    new Collection(2024, SEASONS.S, "Beyond Reality"),
];

/**
 * Enum for the array of COMME des GARÇONS collection titles by line.
 * @constant
 * @readonly
 * @enum {Collection[]}
 */
const TITLES = deepFreeze(TITLES_tofill);

export default TITLES;