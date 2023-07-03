// exception dictionary for the different product code exceptions and their information (stylized code, garment ID, name, and point in time)
// categorized chronologically
// key: product code exception / value: [list of possible [stylized code, garment ID, [list of possible [name, [list of possible [season, year] pairs]]]]]
// 'S' is for Spring/Summer and 'W' is for Autumn/Winter
// if it is unclear or if it is not a seasonal matter, the season is left as an empty string
const exception_code_dict = {
  "08BBT01":          ["08BBT01",         0,      'T',    '',     [[name_dict['10ccBB'],  [['',  2004]]]]],
  "08BBT02":          ["08BBT02",         0,      'T',    '',     [[name_dict['10ccBB'],  [['',  2004]]]]],
  "BEARBRICKT001":    ["BEARBRICK-T001",  2004,   'T',    '',     [[name_dict['10ccBB'],  [['',  2004]]]]],
  "BEARBRICKT002":    ["BEARBRICK-T002",  2004,   'T',    '',     [[name_dict['10ccBB'],  [['',  2004]]]]],
  "BEARBRICKT002":    ["BEARBRICK-T003",  2004,   'T',    '',     [[name_dict['10ccBB'],  [['',  2004]]]]],
  "BEARBRICKT004":    ["BEARBRICK-T004",  2004,   'T',    '',     [[name_dict['10ccBB'],  [['',  2004]]]]],
  "PSJ063":           ["PS-J063",         2006,   'J',    '',     [[name_dict['hpch'],    [['W', 2007]]]]],
  "OTJ007":           ["OT-J007",         2007,   'J',    '',     [[name_dict['hpch'],    [['W', 2007]]]]],
  "SD19T60C":         ["SD19T60C",        0,      'T',    '',     [[name_dict['speed'],   [['S', 2009]]]]],
  "5FT08A":           ["5FT08A",          0,      'T',    '',     [[name_dict['10ccSS'],  [['S', 2011]]]]],
  "5FT08B":           ["5FT08B",          0,      'T',    '',     [[name_dict['10ccSS'],  [['S', 2011]]]]],
  "CDGS2ST":          ["CDGS2ST",         0,      'B',    '',     [[name_dict['shchre'],  [['',  2013]]],
                                                                   [name_dict['shch'],    [['',  2014],
                                                                                           ['',  2015]]]]],
  "CDGS2PL":          ["CDGS2PL",         0,      'B',    '',     [[name_dict['shch'],    [['',  2015]]]]],
  "PDB007":           ["PD-B007",         2019,   'B',    '',     [[name_dict['hpch'],    [['W', 2021]]]]],
  "PFP043":           ["PF-P043",         2020,   'P',    '',     [[name_dict['hpch'],    [['W', 2021]]]]],
  "CDGCH01":          ["CDG-CH-01",       0,      'B',    '',     [[name_dict['chlim'],   [['W', 2021]]]]],
  "CDGCH02":          ["CDG-CH-02",       0,      'B',    '',     [[name_dict['chlim'],   [['W', 2021]]]]],
  "CDGCH03":          ["CDG-CH-03",       0,      'B',    '',     [[name_dict['chlim'],   [['W', 2021]]]]],
  "CDGCH04":          ["CDG-CH-04",       0,      'B',    '',     [[name_dict['chlim'],   [['W', 2021]]]]],
};

export default exception_code_dict;
