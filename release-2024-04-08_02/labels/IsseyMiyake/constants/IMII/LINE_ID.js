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

     B: [LINE.ME,
          LINE.DT],
     C: [LINE.IS,
          LINE.SP],
     E: [LINE.IM],
     G: [LINE.IM,
          LINE.PE],
     H: [LINE.ME],
     I: [LINE.PLIN],
     J: [LINE.IM],
     K: [LINE.PLJE],
     L: [LINE.IM,
          LINE.ME],
     M: [LINE.IM],
     P: [LINE.PL],
     R: [LINE.IS,
          LINE.SP],
     T: [LINE.WCIM],
     V: [LINE.PE]
});

export default LINE_ID;
