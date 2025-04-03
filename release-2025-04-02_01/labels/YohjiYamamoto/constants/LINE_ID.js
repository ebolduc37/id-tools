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

     // C
     C:   [LINE.BLUEC],

     //
     D:   [LINE.DISC],

     // F
     F:   [LINE.YY.newLowerBound(COL_CODE_START["YY"]),
          LINE.YJD,
          LINE.RYY,
          LINE.PLYY,
          LINE.YYRI,
          LINE.YYCOL,
          LINE.YYM],

     // G
     G:   [LINE.GRY,
          LINE.JEANS.newBounds(new Collection(2014, Season.W), new Collection(2014, Season.W))],

     // H
     H:   [LINE.YYPH.newLowerBound(COL_CODE_START["YY"]),
          LINE.YYCH,
          LINE.YYOJ,
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
          LINE.YFMRL,
          LINE.YFMS,
          LINE.YASP.newUpperBound(new Collection(2008, Season.W))],

     // N
     N:   [LINE.NOIR,
          LINE.BYY,
          LINE.BSYY.newUpperBound(new Collection(2020, Season.W))],

     // O
     O:   [LINE.SYTW],

     // P
     P:   [LINE.POWS],

     // R
     R:   [LINE.YSRED.newLowerBound(new Collection(2008, Season.S))],

     // S
     S:   [LINE.YYOJ,
          LINE.WILDC],

     // U
     U:   [//LINE.YFM.newBounds(new Collection(1997, Season.W), new Collection(1997, Season.W)),
          // Wool pants, UI-P09-103, new logo, size M - only time seen YFM with U
          LINE.SYTE],

     // W
     W:   [LINE.WILD],

     // Y
     Y:   [LINE.YS.newLowerBound(COL_CODE_START["YS"]),
          LINE.YSRED.newUpperBound(new Collection(2007, Season.W)),
          LINE.YASP.newLowerBound(new Collection(2009, Season.S)),
          LINE.YP,
          LINE.TAKE,
          LINE.YPTK,
          LINE.YSEX,
          LINE.RISM,
          LINE.MICH,
          LINE.KAYO,
          LINE.GIPSY,
          LINE.YSIND,
          LINE.BANG,
          LINE.YSB,],

     // BLANK
     BLANK:         [LINE.YY.newUpperBound(COL_BLANK_END["YY"]), //LINE.YYFI,
                    LINE.YYPH.newUpperBound(COL_BLANK_END["YY"]), //LINE.YYPHFI,
                    LINE.YS.newUpperBound(COL_BLANK_END["YS"]),
                    LINE.YFM.newUpperBound(COL_BLANK_END["YS"]),
                    LINE.YYSB,
                    LINE.YYPN,
                    LINE.GOTH,
                    LINE.GOTHH,
                    ],
     
     // UNREADABLE
     UNREADABLE:    [LINE.YY.newLowerBound(COL_CODE_START["YY"]),
                    LINE.YYPH.newLowerBound(COL_CODE_START["YY"]),
                    LINE.YS.newLowerBound(COL_CODE_START["YS"]),
                    LINE.YFM.newLowerBound(COL_CODE_START["YS"]),
                    LINE.YFMRL,
                    LINE.BLUEC,
                    LINE.YYCH,
                    LINE.NOIR,
                    LINE.YFMS,
                    LINE.BISL,
                    LINE.LIMI,
                    LINE.YYOJ,
                    LINE.YSRED,
                    LINE.YASP,
                    LINE.YJD,
                    LINE.YP,
                    LINE.TAKE,
                    LINE.YPTK,
                    LINE.SYTE,
                    LINE.YSEX,
                    LINE.RYY,
                    LINE.RYYM,
                    LINE.GOTHIC,
                    LINE.RISM,
                    LINE.MICH,
                    LINE.KAYO,
                    LINE.GIPSY,
                    LINE.GRY,
                    LINE.DISC,
                    LINE.JEANS.newBounds(new Collection(2014, Season.W), new Collection(2014, Season.W)),
                    LINE.PLYY,
                    LINE.PLYYM,
                    LINE.YSIND,
                    LINE.PROD,
                    LINE.YYREP,
                    LINE.BYY,
                    LINE.NOIRSB,
                    LINE.BSYY,
                    LINE.BANG,
                    LINE.YYRI,
                    LINE.YYCOL,
                    LINE.YYM,
                    LINE.WILD,
                    LINE.POWS,
                    LINE.YSB,
               ],

     // UNSPECIFIED
     UNSPECIFIED:   [LINE.YY,
                    LINE.YYPH,
                    LINE.YS,
                    LINE.YFM,
                    LINE.YFMRL,
                    LINE.YYSB,
                    LINE.YYPN,
                    LINE.GOTH,
                    LINE.GOTHH,
                    LINE.BLUEC,
                    LINE.YYCH,
                    LINE.NOIR,
                    LINE.YFMS,
                    LINE.BISL,
                    LINE.LIMI,
                    LINE.YYOJ,
                    LINE.YSRED,
                    LINE.YASP,
                    LINE.YJD,
                    LINE.YP,
                    LINE.TAKE,
                    LINE.YPTK,
                    LINE.SYTE,
                    LINE.YSEX,
                    LINE.RYY,
                    LINE.RYYM,
                    LINE.GOTHIC,
                    LINE.RISM,
                    LINE.MICH,
                    LINE.KAYO,
                    LINE.GIPSY,
                    LINE.GRY,
                    LINE.DISC,
                    LINE.JEANS.newBounds(new Collection(2014, Season.W), new Collection(2014, Season.W)),
                    LINE.PLYY,
                    LINE.PLYYM,
                    LINE.YSIND,
                    LINE.PROD,
                    LINE.YYREP,
                    LINE.BYY,
                    LINE.NOIRSB,
                    LINE.BSYY,
                    LINE.BANG,
                    LINE.YYRI,
                    LINE.YYCOL,
                    LINE.YYM,
                    LINE.WILD,
                    LINE.POWS,
                    LINE.YSB,
               ],
     
});

export default LINE_ID;
