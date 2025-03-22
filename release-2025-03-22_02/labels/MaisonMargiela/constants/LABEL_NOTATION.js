/**
 * Initialization of LABEL_NOTATION.
 *
 * Initialization of the Maison (Martin) Margiela label notations and their corresponding
 * lines with adjusted operation period.
 *
 * @author Etienne Bolduc
 */

import { Collection, deepFreeze } from "../../../utils/index.js";
import LINE from "./LINE.js";

// Initializing useful parameter
const Season = Collection.Season;
const COL_LAST_NOT_CIRCLED = new Collection(1998, Season.S);
const COL_CIRCLED = new Collection(1998, Season.W);

/**
 * Enum for the Maison Margiela label notations and their corresponding lines.
 * @constant
 * @readonly
 * @enum {{stylized: string, listList: LINE[]}}
 */
const LABEL_NOTATION = deepFreeze({

     // BLANK
     "BLANK":       {
          stylized: "blank",
          lineList: [LINE['(0)'].newUpperBound(COL_LAST_NOT_CIRCLED),
                     LINE['1'],
                     LINE['SHOW']]
     },

     // 0
     '0':           {
          stylized: "⓪",
          lineList: [LINE['(0)'].newLowerBound(COL_CIRCLED)]
     },
     '0-10':        {
          stylized: "⓪⑩",
          lineList: [LINE['(0)(10)']]
     },

     // 1
     '1':           {
          stylized: "①",
          lineList: [LINE['(1)']]
     },
     '1-10':        {
          stylized: "①⑩",
          lineList: [LINE['(1)(10)']]
     },

     // 3
     '3':           {
          stylized: "③",
          lineList: [LINE['(3)']]
     },

     // 4
     '4':           {
          stylized: "④",
          lineList: [LINE['(4)']]
     },
     '4-14':        {
          stylized: "④⑭",
          lineList: [LINE['(4)(14)']]
     },

     // 6
     '6_BLANK':     {
          stylized: "６ [on blank label]",
          lineList: [LINE['(6)'].newUpperBound(COL_LAST_NOT_CIRCLED)]
     },
     '6':           {
          stylized: "⑥",
          lineList: [LINE['(6)'].newLowerBound(COL_CIRCLED)]
     },
     '6_BIG':       {
          stylized: "⑥ [enlarged]",
          lineList: [LINE['MM6'].newFilter(
                         col => col.isBetween(new Collection(2005, Season.S), new Collection(2008, Season.S))
                              || col.isEqualTo(new Collection(2021, Season.S))
                              || col.isAfterOrIn(new Collection(2023, Season.S)))]
     },
     'MM6_MMM':     {
          stylized: "MM⑥ Maison Martin Margiela",
          lineList: [LINE['MM6'].newBounds(new Collection(2008, Season.W), new Collection(2015, Season.W))]
     },
     'MM6_MM':      {
          stylized: "MM⑥ Maison Margiela",
          lineList: [LINE['MM6'].newBounds(new Collection(2015, Season.W), new Collection(2023, Season.W))]
     },

     // 8
     '8':      {
          stylized: "⑧",
          lineList: [LINE['(8)']]
     },

     // 10
     '10':     {
          stylized: "⑩",
          lineList: [LINE['(10)']]
     },

     // 11
     '11':     {
          stylized: "⑪",
          lineList: [LINE['(11)']]
     },

     // 12
     '12':     {
          stylized: "⑫",
          lineList: [LINE['(12)D'],
                     LINE['(12)']]
     },

     // 13
     '13':     {
          stylized: "⑬",
          lineList: [LINE['(13)']]
     },

     // 14
     '14':     {
          stylized: "⑭",
          lineList: [LINE['(14)']]
     },

     // 15
     '15':     {
          stylized: "⑮",
          lineList: [LINE['(15)']]
     },

     // 15
     '20':     {
          stylized: "⑳",
          lineList: [LINE['(20)']]
     },

     // 22
     '22':     {
          stylized: "㉒",
          lineList: [LINE['(22)'],
                     LINE['(22)U']]
     },

     // OTHERS
     'REP':    {
          stylized: "REPRODUCTION OF [...]",
          lineList: [LINE['1'].newBounds(new Collection(1994, Season.W), new Collection(1999, Season.S))]
     },
     'HM':     {
          stylized: "Maison Martin Margiela × H&M",
          lineList: [LINE['HM']]
     },
     'TNF':    {
          stylized: "THE NORTH FACE × MM⑥ Maison Margiela",
          lineList: [LINE['TNF']]
     },
     'SUP':    {
          stylized: "⑥ [enlarged] × Supreme",
          lineList: [LINE['SUP']]
     },

     'UNSPECIFIED':    {
          stylized: "unspecified",
          lineList: []
     },
     
});

export default LABEL_NOTATION;
