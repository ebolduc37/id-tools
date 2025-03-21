/**
 * Initialization of LINE_ID.
 *
 * Initialization of the Yohji Yamamoto line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
import LINE from "./LINE.js";

// Initializing useful parameter
const Season = Collection.Season;
const COL_CODE_START = {
     YS: new Collection(1984, Season.W),
     YY: new Collection(1986, Season.W),
}
const COL_BLANK_END = {
     YS: new Collection(1984, Season.S),
     YY: new Collection(1992, Season.S),
}

/**
 * Enum for the Yohji Yamamoto line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     // B
     B:   [LINE.BISL],

     //
     D:   [LINE.DISC],

     // F
     F:   [LINE.YY.newLowerBound(COL_CODE_START["YY"]),
          LINE.YJD,
          LINE.RYY,
          LINE.PLYY,
          LINE.YYRI,
          LINE.YYC,
          LINE.YYM],

     // G
     G:   [LINE.GRY],

     // H
     H:   [LINE.YYPH.newLowerBound(COL_CODE_START["YY"]),
          LINE.YYCH,
          LINE.YJD,
          LINE.RYYM,
          LINE.GOTHIC,
          LINE.PLYYM,
          LINE.PROD,
          LINE.YYREP,
          LINE.BSYY,
          LINE.YYRI],
     
     // L
     L:   [LINE.LIMI,],

     // M
     M:   [LINE.YFM.newLowerBound(COL_CODE_START["YS"]),
          LINE.YFMRL],

     // N
     N:   [LINE.NOIR,
          LINE.BYY],

     // O
     O:   [LINE.SYTW],

     // P
     P:   [LINE.POWS],

     // S
     S:   [LINE.WILDC],

     // U
     U:   [//LINE.YFM.newBounds(new Collection(1997, Season.W), new Collection(1997, Season.W)),
          // Wool pants, UI-P09-103, new logo, size M - only time seen YFM with U
          LINE.SYTE],

     // W
     W:   [LINE.WILD],

     // Y
     Y:   [LINE.YS.newLowerBound(COL_CODE_START["YS"]),
          LINE.YP,
          LINE.YSEX,
          LINE.RISM,
          LINE.TAKE,
          LINE.MICH,
          LINE.KAYO,
          LINE.GIPSY,
          LINE.YPTK,
          LINE.BANG,
          LINE.YSB,],

     // BLANK
     BLANK:         [LINE.YS.newUpperBound(COL_BLANK_END["YS"]),
                    LINE.YFM.newUpperBound(COL_BLANK_END["YS"]),
                    LINE.YY.newUpperBound(COL_BLANK_END["YY"]), //LINE.YYFI,
                    LINE.YYPH.newUpperBound(COL_BLANK_END["YY"]), //LINE.YYPHFI,
                    LINE.YYPN,
                    LINE.GOTH,
                    LINE.GOTHH,
                    ],
     
     // UNREADABLE
     UNREADABLE:    [LINE.YS.newLowerBound(COL_CODE_START["YS"]),
                    LINE.YFM.newLowerBound(COL_CODE_START["YS"]),
                    LINE.YY.newLowerBound(COL_CODE_START["YY"]),
                    LINE.YYPH.newLowerBound(COL_CODE_START["YY"]),
                    LINE.YYCH,
                    LINE.YFMRL,
                    LINE.NOIR,
                    LINE.BISL,
                    LINE.LIMI,
                    LINE.YJD,
                    LINE.YP,
                    LINE.SYTE,
                    LINE.YSEX,
                    LINE.RYY,
                    LINE.RYYM,
                    LINE.GOTHIC,
                    LINE.RISM,
                    LINE.TAKE,
                    LINE.MICH,
                    LINE.KAYO,
                    LINE.GIPSY,
                    LINE.GRY,
                    LINE.DISC,
                    LINE.PLYY,
                    LINE.PLYYM,
                    LINE.PROD,
                    LINE.YYREP,
                    LINE.YPTK,
                    LINE.BYY,
                    LINE.BSYY,
                    LINE.BANG,
                    LINE.YYRI,
                    LINE.YYC,
                    LINE.YYM,
                    LINE.WILD,
                    LINE.POWS,
                    LINE.YSB,
               ],

     // UNSPECIFIED
     UNSPECIFIED:   [LINE.YS,
                    LINE.YFM,
                    LINE.YY,
                    LINE.YYPH,
                    LINE.YYPN,
                    LINE.GOTH,
                    LINE.GOTHH,
                    LINE.YYCH,
                    LINE.YFMRL,
                    LINE.NOIR,
                    LINE.BISL,
                    LINE.LIMI,
                    LINE.YJD,
                    LINE.YP,
                    LINE.SYTE,
                    LINE.YSEX,
                    LINE.RYY,
                    LINE.RYYM,
                    LINE.GOTHIC,
                    LINE.RISM,
                    LINE.TAKE,
                    LINE.MICH,
                    LINE.KAYO,
                    LINE.GIPSY,
                    LINE.GRY,
                    LINE.DISC,
                    LINE.PLYY,
                    LINE.PLYYM,
                    LINE.PROD,
                    LINE.YYREP,
                    LINE.YPTK,
                    LINE.BYY,
                    LINE.BSYY,
                    LINE.BANG,
                    LINE.YYRI,
                    LINE.YYC,
                    LINE.YYM,
                    LINE.WILD,
                    LINE.POWS,
                    LINE.YSB,
               ],
     
});

export default LINE_ID;
