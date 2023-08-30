/**
 * Initialization of TITLES.
 *
 * Initialization of the collection titles of certain lines.
 *
 * @author Etienne Bolduc
 */

import { Collection, Seasons, deepFreeze } from "../../../utils/index.js";
import LINES from "./LINES.js";

let TITLES_tofill = {};

TITLES_tofill[LINES.CDG.name] = [
    // 1980s
    new Collection(1981, Seasons.W, "Pirates"),
    new Collection(1982, Seasons.S, "Indigo Dye and Twist"),
    new Collection(1982, Seasons.W, "Holes"),
    new Collection(1983, Seasons.S, "Patchworks and X"),
    new Collection(1983, Seasons.W, "Gloves, Skirts, Quilted Big Coats"),
    new Collection(1984, Seasons.S, "Round Rubber"),
    new Collection(1984, Seasons.W, "Twist, Silk + Jersey, Knits (Patchworks)"),
    new Collection(1985, Seasons.S, "Mud-Dyed"),
    new Collection(1985, Seasons.W, "Dots, Polyester Pleats"),
    new Collection(1986, Seasons.S, "Bias Cutting"),
    new Collection(1986, Seasons.W, "Bonding"),
    new Collection(1987, Seasons.S, "Young Chic, No Shoulder"),
    new Collection(1987, Seasons.W, "White Shirt + Pants, Khaki, Lili Marleen"),
    new Collection(1988, Seasons.S, "Frontless, Lamé, Sequins"),
    new Collection(1988, Seasons.W, "Red is Black"),
    new Collection(1989, Seasons.S, "Movement"),
    new Collection(1989, Seasons.W, "Liberation from Tailoring (Next New One)"),

    // 1990s
    new Collection(1990, Seasons.S, "Refresh the Spirits"),
    new Collection(1990, Seasons.W, "Modern Sweetness"),
    new Collection(1991, Seasons.S, "Ink Dye, Stained Glass"),
    new Collection(1991, Seasons.W, "Chic Punk"),
    new Collection(1992, Seasons.S, "Unfinished"),
    new Collection(1992, Seasons.W, "Lilith"),
    new Collection(1993, Seasons.S, "Ultrasimple"),
    new Collection(1993, Seasons.W, "Synergy"),
    new Collection(1994, Seasons.S, "Eccentric"),
    new Collection(1994, Seasons.W, "Metamorphosis"),
    new Collection(1995, Seasons.S, "Transcending Gender"),
    new Collection(1995, Seasons.W, "Sweeter Than Sweet"),
    new Collection(1996, Seasons.S, "Kaleidoscope"),
    new Collection(1996, Seasons.W, "Flowering Clothes"),
    new Collection(1997, Seasons.S, "Body Meets Dress—Dress Meets Body"),
    new Collection(1997, Seasons.W, "Adult Punk"),
    new Collection(1998, Seasons.S, "Clustering Beauty"),
    new Collection(1998, Seasons.W, "Fusion"),
    new Collection(1999, Seasons.S, "New Essential"),
    new Collection(1999, Seasons.W, "Transformed Glamour"),

    // 2000s
    new Collection(2000, Seasons.S, "Coercion"),
    new Collection(2000, Seasons.W, "Hard and Foreceful (Energy)"),
    new Collection(2001, Seasons.S, "Optical Shock (Volume)"),
    new Collection(2001, Seasons.W, "Beyond Taboo"),
    new Collection(2002, Seasons.S, "Ethnic Couture (White)"),
    new Collection(2002, Seasons.W, "Free Knitting (Freedom of Knits)"),
    new Collection(2003, Seasons.S, "Extreme Embellishment (Adornment)"),
    new Collection(2003, Seasons.W, "Square"),
    new Collection(2004, Seasons.S, "Abstract Excellence"),
    new Collection(2004, Seasons.W, "Dark Romance, Witch"),
    new Collection(2005, Seasons.S, "Ballerine Motorbike"),
    new Collection(2005, Seasons.W, "Broken Bride"),
    new Collection(2006, Seasons.S, "Lost Empire"),
    new Collection(2006, Seasons.W, "Persona"),
    new Collection(2007, Seasons.S, "Cubisme"),
    new Collection(2007, Seasons.W, "Curiosity"),
    new Collection(2008, Seasons.S, "Cacophony"),
    new Collection(2008, Seasons.W, "Bad Taste"),
    new Collection(2009, Seasons.S, "Tomorrow's Black"),
    new Collection(2009, Seasons.W, "Wonderland"),

    // 2010s
    new Collection(2010, Seasons.S, "Adult Delinquent"),
    new Collection(2010, Seasons.W, "Inside Decoration"),
    new Collection(2011, Seasons.S, "No Theme (Multiple Personalities, Psychological Fear)"),
    new Collection(2011, Seasons.W, "Hybrid"),
    new Collection(2012, Seasons.S, "White Drama"),
    new Collection(2012, Seasons.W, "2 Dimensions"),
    new Collection(2013, Seasons.S, "Crush"),
    new Collection(2013, Seasons.W, "The Infinity of Tailoring"),
    new Collection(2014, Seasons.S, "Not Making Clothing"),
    new Collection(2014, Seasons.W, "MONSTER"),
    new Collection(2015, Seasons.S, "Blood and Roses"),
    new Collection(2015, Seasons.W, "Ceremony of Separation"),
    new Collection(2016, Seasons.S, "Blue Witch"),
    new Collection(2016, Seasons.W, "18th-Century Punk"),
    new Collection(2017, Seasons.S, "Invisible Clothes"),
    new Collection(2017, Seasons.W, "The Future of Silhouette"),
    new Collection(2018, Seasons.S, "Multidimensional Graffiti"),
    new Collection(2018, Seasons.W, "Comme des Garçons Camp"),
    new Collection(2019, Seasons.S), // UNKNOWN
    new Collection(2019, Seasons.W, "A Gathering of Shadows"),

    // 2020s
    new Collection(2020, Seasons.S, "Orlando (Act Two)"),
    new Collection(2020, Seasons.W), // UNKNOWN
    new Collection(2021, Seasons.S, "Dissonance"),
    new Collection(2021, Seasons.W, "Landscape of Shadows"),
    new Collection(2022, Seasons.S, "My Present State of Mind (rather than a theme)"),
    new Collection(2022, Seasons.W, "BLACK ROSE"),
    new Collection(2023, Seasons.S, "A lamentation for the sorrow in the world today. And a feeling of wanting to stand together"),
    new Collection(2023, Seasons.W, "Return to the Source"),
];

TITLES_tofill[LINES.HP.name] = [
    // 1990s
    new Collection(1993, Seasons.W, "Artists in their Studios"),
    new Collection(1994, Seasons.S, "Smart Boy"),
    new Collection(1994, Seasons.W, "Offbeat Humor"),
    new Collection(1995, Seasons.S, "Work"),
    new Collection(1995, Seasons.W, "Sleep"),
    new Collection(1996, Seasons.S, "Disconnected Gentleman"),
    new Collection(1996, Seasons.W, "Traditional"),
    new Collection(1997, Seasons.S, "Check"),
    new Collection(1997, Seasons.W, "Magic of Bias"),
    new Collection(1998, Seasons.S, "New Natural"),
    new Collection(1998, Seasons.W, "Inside Outside"),
    new Collection(1999, Seasons.S, "Secret Treasure"),
    new Collection(1999, Seasons.W, "Souvenir Kitsch"),

    // 2000s
    new Collection(2000, Seasons.S, "Evolution of Color"),
    new Collection(2000, Seasons.W, "Docking Rock"),
    new Collection(2001, Seasons.S, "Double Face"),
    new Collection(2001, Seasons.W, "Looking at Different World"),
    new Collection(2002, Seasons.S, "Destruction of Trad"),
    new Collection(2002, Seasons.W, "Black"),
    new Collection(2003, Seasons.S, "Daytime Evening"),
    new Collection(2003, Seasons.W, "Curve"),
    new Collection(2004, Seasons.S, "Simple & Utility"),
    new Collection(2004, Seasons.W, "Lost Englishman"),
    new Collection(2005, Seasons.S, "Pink Panther"),
    new Collection(2005, Seasons.W, "Sports Tailoring"),
    new Collection(2006, Seasons.S, "Rip & Tongue"),
    new Collection(2006, Seasons.W, "Bad Boy"),
    new Collection(2007, Seasons.S, "Golden Boy"),
    new Collection(2007, Seasons.W, "My Way"),
    new Collection(2008, Seasons.S, "Super Imposition"),
    new Collection(2008, Seasons.W, "Time for Magic"),
    new Collection(2009, Seasons.S, "Black Is Best"),
    new Collection(2009, Seasons.W, "Fashion Illusion"),

    // 2010s
    new Collection(2010, Seasons.S, "Random Collage"),
    new Collection(2010, Seasons.W, "Protection"),
    new Collection(2011, Seasons.S, "Skull of Life"),
    new Collection(2011, Seasons.W, "Décadence"),
    new Collection(2012, Seasons.S, "Tailoring for Punks"),
    new Collection(2012, Seasons.W, "Neither Man nor Woman"),
    new Collection(2013, Seasons.S, "Poor King"),
    new Collection(2013, Seasons.W, "The Tree of Youth"),
    new Collection(2014, Seasons.S, "Hatching"),
    new Collection(2014, Seasons.W, "Holy Jacket"),
    new Collection(2015, Seasons.S, "Anti War"),
    new Collection(2015, Seasons.W, "The Power of Ceremony"),
    new Collection(2016, Seasons.S, "Broken Tailoring"),
    new Collection(2016, Seasons.W, "The Armor of Peace"),
    new Collection(2017, Seasons.S, "The King is Naked"),
    new Collection(2017, Seasons.W, "Boyhood"),
    new Collection(2018, Seasons.S, "Disco"),
    new Collection(2018, Seasons.W, "White Shock"),
    new Collection(2019, Seasons.S, "Suit Comeback"),
    new Collection(2019, Seasons.W, "Finding Beauty in the Dark"),

    // 2020s
    new Collection(2020, Seasons.S, "Orlando"),
    new Collection(2020, Seasons.W, "Color Resistance"),
    new Collection(2021, Seasons.S, "Metal Outlaw"),
    new Collection(2021, Seasons.W, "DARKROOM"),
    new Collection(2022, Seasons.S, "The Existence of Flowers"),
    new Collection(2022, Seasons.W, "Nomad"),
    new Collection(2023, Seasons.S, "ANOTHER KIND OF PUNK"),
    new Collection(2023, Seasons.W, "Tailoring of the Avant-Garde"),
    new Collection(2024, Seasons.S, "Beyond Reality"),
];

/**
 * Enum for the array of collection titles by line.
 * @constant
 * @readonly
 * @enum {Collection[]}
 */
const TITLES = deepFreeze(TITLES_tofill);

export default TITLES;