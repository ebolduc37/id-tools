/**
 * Initialization of LABEL_NOTATION.
 *
 * Initialization of the Maison Margiela label notations and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
import LINE from "./LINE.js";

// Initializing useful parameter
const Season = Collection.Season;

/**
 * Enum for the Maison Margiela label notations and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LABEL_NOTATION = deepFreeze({

     // BLANK
     //"BLANK":  [LINE['1'],
     //           LINE['SHOW']],
     "BLANK":  [LINE['(1)'].newUpperBound(new Collection(2008, Season.S)),
                LINE['SHOW']],

     // 0
     '0':      [LINE['(0)']],
     '0-10':   [LINE['(0)(10)']],

     // 1
     //'1':      [LINE['1'],
     //           LINE['(1)']],
     '1':      [LINE['(1)'].newLowerBound(new Collection(1998, Season.S))],

     // 3
     '3':      [LINE['(3)']],

     // 4
     '4':      [LINE['(4)']],

     // 6
     '6':      [LINE['(6)'],
                LINE['MM6']],
     'MM6':    [LINE['MM6']],

     // 8
     '8':      [LINE['(8)']],

     // 10
     '10':     [LINE['(10)']],

     // 11
     '11':     [LINE['(11)']],

     // 12
     '12':     [LINE['(12)D'],
                LINE['(12)']],

     // 13
     '13':     [LINE['(13)']],

     // 14
     '14':     [LINE['(14)']],

     // 15
     '15':     [LINE['(15)']],

     // 22
     '22':     [LINE['(22)'],
                LINE['(22)U']],
     
});

export default LABEL_NOTATION;
