// line ID dictionary for the different line IDs and their information (name, schedule, and span of existence)
// categorized alphabetically and chronologically
// key: line ID / value: [list of possible [name, type of schedule, [first [season, year] pair, last [season, year] pair]]]
// the type of schedule relates to the production schedule during the year
// high-end lines are generally produced early ('E')
// auxiliary lines are generally produced late ('L')
// meaningless for lines that appeared in 2001 or later
// 'S' is for Spring/Summer and 'W' is for Autumn/Winter
// if it is unclear or if it is not a seasonal matter, the season is left as an empty string
// if the line is still ongoing, the season is left as an empty string and the year is set to 9999
const lineID_dict = {

  '_': [[name_dict['cdg'],        'L',    [['',  1969], ['S', 1982]]]],

  '1': [[name_dict['blk'],        'L',    [['S', 2009], ['',  9999]]]],

  '2': [[name_dict['pocket'],     'L',    [['S', 2011], ['',  2017]]]],

  '3': [[name_dict['taocdg'],     'E',    [['W', 2005], ['S', 2011]]],
        [name_dict['noirkn'],     'E',    [['W', 2013], ['',  9999]]]],

  '5': [[name_dict['speed'],      'L',    [['S', 2007], ['S', 2009]]]],

  '6': [[name_dict['editw'],      'L',    [['S', 2007], ['',  9999]]]],

  '7': [[name_dict['editm'],      'L',    [['S', 2007], ['',  9999]]]],

  '8': [[name_dict['wal'],        'L',    [['',  1980], ['',  9999]]]],

  'A': [[name_dict['noir'],       'E',    [['W', 1987], ['W', 1995]]],
        [name_dict['play'],       'L',    [['',  2002], ['',  9999]]]],

  'B': [[name_dict['ppDSM'],      'L',    [['W', 2009], ['W', 2009]]]],

  'D': [[name_dict['h2'],         'L',    [['',  1987], ['',  9999]]]],

  'E': [[name_dict['cdg'],        'E',    [['W', 1982], ['W', 2005]]],
        [name_dict['rkcdg'],      'E',    [['S', 1984], ['W', 1995]]],
        [name_dict['noir'],       'E',    [['W', 1987], ['W', 1995]]],
        [name_dict['gan'],        'E',    [['S', 2008], ['S', 2017]]]],

  'F': [[name_dict['shirtFO'],    'L',    [['W', 2020], ['',  9999]]],
        [name_dict['shirt'],      'L',    [['S', 2021], ['',  9999]]]],

  'G': [[name_dict['cdg'],        'E',    [['W', 1982], ['',  9999]]],
        [name_dict['noir'],       'E',    [['W', 2005], ['S', 2009]]],
        [name_dict['bm'],         'E',    [['S', 2017], ['',  9999]]]],

  'H': [[name_dict['hcdg'],       'L',    [['',  1978], ['W', 1983]]],
        [name_dict['h'],          'L',    [['S', 1984], ['',  9999]]]],

  'I': [[name_dict['ind'],        'L',    [['S', 1984], ['W', 1987]]],
        [name_dict['hi'],         'L',    [['S', 1994], ['W', 1998]]],
        [name_dict['hh'],         'L',    [['S', 1999], ['W', 2001]]],
        [name_dict['jwman'],      'L',    [['S', 2006], ['S', 2006]]],
        [name_dict['alive'],      'L',    [['W', 2009], ['W', 2009]]],
        [name_dict['cdgSE'],      'L',    [['W', 2011], ['W', 2012]]],
        [name_dict['gds'],        'L',    [['',  2011], ['',  2018]]]],

  'J': [[name_dict['jw'],         'E',    [['W', 1992], ['',  9999]]]],

  'K': [[name_dict['aoy'],        'E',    [['S', 1989], ['',  9999]]],
        [name_dict['chaoy'],      'E',    [['S', 2012], ['W', 2012]]]],

  'L': [[name_dict['ise115'],     'L',    [['W', 2001], ['W', 2001]]],
        [name_dict['ise2man'],    'L',    [['W', 2004], ['W', 2004]]],
        [name_dict['ppoh'],       'L',    [['W', 2019], ['W', 2019]]]],

  'N': [[name_dict['girl'],       'L',    [['S', 2015], ['',  9999]]]],

  'O': [[name_dict['10ccno'],     'L',    [['S', 2002], ['W', 2003]]],
        [name_dict['aoySE'],      'E',    [['W', 2004], ['W', 2004]]],
        [name_dict['cdgcdg'],     'L',    [['S', 2005], ['S', 2005]]],
        [name_dict['cdgSE'],      'L',    [['',  2005], ['',  9999]]],
        [name_dict['walSE'],      'L',    [['',  2005], ['',  9999]]],
        [name_dict['eyeSE'],      'L',    [['W', 2005], ['W', 2005]]],
        [name_dict['speedSE'],    'L',    [['S', 2006], ['S', 2006]]],
        [name_dict['trad'],       'L',    [['W', 2009], ['',  9999]]],
        [name_dict['playxmas'],   'L',    [['W', 2013], ['W', 2017]]],
        [name_dict['bm'],         'L',    [['S', 2017], ['',  9999]]],
        [name_dict['CDGSE'],      'L',    [['S', 2018], ['S', 2018]]],
        [name_dict['friends'],    'L',    [['W', 2018], ['W', 2018]]],
        [name_dict['ppoh'],       'L',    [['W', 2019], ['W', 2019]]],
        [name_dict['people'],     'L',    [['W', 2020], ['W', 2020]]]],

  'P': [[name_dict['hp'],         'E',    [['S', 1985], ['',  9999]]],
        [name_dict['hps'],        'E',    [['W', 2005], ['W', 2006]]],
        [name_dict['hpeg'],       'E',    [['W', 2005], ['W', 2009]]]],

  'R': [[name_dict['rdc'],        'L',    [['',  1981], ['W', 2004]]],
        [name_dict['cdgcdg'],     'L',    [['S', 2005], ['',  9999]]]],

  'S': [[name_dict['10cc'],       'L',    [['S', 2002], ['W', 2011]]],
        [name_dict['CDG'],        'L',    [['S', 2018], ['',  9999]]]],

  'T': [[name_dict['tric'],       'L',    [['',  1981], ['W', 2021]]],
        [name_dict['tao'],        'E',    [['S', 2022], ['',  9999]]]],

  'U': [[name_dict['hpd'],        'E',    [['W', 2000], ['W', 2005]]],
        [name_dict['pink'],       'L',    [['S', 2003], ['S', 2014]]]],

  'V': [[name_dict['jw'],         'E',    [['W', 1992], ['W', 2005]]],
        [name_dict['beat'],       'L',    [['S', 2009], ['',  9999]]]],

  'W': [[name_dict['jwman'],      'E',    [['S', 2002], ['',  9999]]],
        [name_dict['eye'],        'L',    [['W', 2005], ['',  9999]]]],

  'X': [[name_dict['hp'],         'E',    [['S', 1985], ['W', 2005]]],
        [name_dict['rkhp'],       'E',    [['S', 1985], ['W', 1995]]],
        [name_dict['jwd'],        'L',    [['',  2014], ['W', 2021]]]],

  'Y': [[name_dict['jwman'],      'E',    [['S', 2002], ['W', 2005]]]],

  'Z': [[name_dict['two'],        'L',    [['S', 1999], ['W', 2001]]],
        [name_dict['peg'],        'L',    [['S', 2003], ['W', 2005]]],
        [name_dict['cdgch'],      'L',    [['',  2012], ['',  2018]]]]

};

export default lineID_dict;
