/**
 * Initialization of LINE_ID.
 *
 * Initialization of the ISSEY MIYAKE INT'L. INC. line IDs and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { deepFreeze } from "../../../../utils/index.js";
import LINE from "../LINE.js";

/**
 * Enum for the ISSEY MIYAKE INT'L. INC. line IDs and their corresponding lines.
 * @constant
 * @readonly
 * @enum {LINE[]}
 */
const LINE_ID = deepFreeze({

     A: [LINE.PLIM,
          LINE.PL],
     B: [LINE.ME,//LINE.IMM,
          LINE.DT],
     C: [LINE.IS,
          LINE.SP],
     E: [LINE.IM],
     F: [LINE.ZU],
     G: [LINE.IM,
          LINE.PE],
     H: [LINE.ME],//LINE.IMM],
     I: [LINE.PLIN],
     J: [LINE.IM],
     K: [LINE.PLJE],
     L: [LINE.IM,
          LINE.ME],//LINE.IMM],
     M: [LINE.IM],
     P: [LINE.PLIM,
          LINE.PL],
     R: [LINE.SP,
          LINE.IS],
     T: [LINE.WCIM],
     V: [LINE.PE],
     W: [LINE.WCIM],
     Z: [LINE.IM,
          LINE.ME],
});

export default LINE_ID;
