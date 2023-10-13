import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { Ellipse, G, Path } from "react-native-svg";

export default function Hat6({ borderColor2, color }) {
  const darkColor = changeColor(color, "#000", 0.8);
  const lightColor = changeColor(color, "#fff", 0.6);

  // Always use white for the bottom part of the hat.
  const snow = "#fff";
  const darkSnow = changeColor(snow, "#000", 0.9);

  return (
    <G scale="0.00001">
      <Path
        d="M11809 20752c1777,-3183 5517,-2315 7061,569 332,620 455,1314 250,2001 -536,1796 -2943,2340 -3265,3038 -44,167 -87,326 -135,491 -328,1117 -896,2737 -2237,2813 -1161,67 -1764,-1025 -2095,-1998 -852,-2501 -871,-4598 422,-6914z"
        fill={borderColor2}
      />
      <Path
        d="M12926 21418c-857,1864 -1138,3413 -324,5805 815,2391 1581,418 2008,-1218 427,-1636 4195,-2050 3130,-4039 -1065,-1989 -3378,-2704 -4815,-548z"
        fill={darkColor}
      />
      <Ellipse
        class={borderColor2}
        rx="5097"
        ry="5020"
        transform="matrix(0.58767 -0.912167 0.881129 0.492186 12076.9 31417.5)"
      />
      <Path
        d="M8915 29494c-1094,1697 -904,3996 932,5022 1905,1064 4372,109 5526,-1683 1094,-1698 904,-3996 -933,-5023 -1905,-1064 -4372,-108 -5526,1683z"
        fill={snow}
      />
      <Path
        d="M8279 31192c-181,1304 302,2617 1569,3324 1905,1064 4372,109 5526,-1683 881,-1369 929,-3128 -48,-4296 676,2047 -1129,1285 -1129,1285 0,0 -65,2614 -1292,2994 -1227,380 -1477,-1059 -1477,-1059 0,0 -897,1574 -1916,1488 -1011,-85 -1230,-2026 -1233,-2054z"
        fill={darkSnow}
      />
      <Path
        d="M51776 12578c266,1294 131,2605 -644,3695 -2069,2912 -6956,2309 -9763,1078 -3717,-1631 -15867,-448 -19786,945 -2251,800 -4864,605 -6211,-1684 -746,-1268 -833,-2842 -356,-4228 563,-1635 2828,-3651 4118,-4704 2334,-1906 5016,-3585 7737,-4825 2262,-1030 4731,-1834 7202,-2057 3234,-292 6520,266 9267,2125 790,534 1741,1346 2418,2194 1357,9 2826,476 3772,1422 1270,1270 1984,4232 2246,6039z"
        fill={borderColor2}
      />
      <Path
        d="M50506 12817c0,0 -571,-4017 -1873,-5319 -1302,-1302 -3504,-1009 -3504,-1009 17,15 -4118,2653 -6522,2857 -2259,191 -2770,-2581 138,-1977 2256,469 4421,-832 5852,-1590 -1169,-1370 -4356,-4198 -10412,-3652 -7937,716 -17069,8139 -17954,10705 -883,2566 901,5637 4932,4204 4030,-1432 16555,-2734 20709,-911 4155,1823 9859,977 8633,-3307z"
        fill={color}
      />
      <Path
        d="M50506 12817c0,0 -571,-4017 -1873,-5319 -1302,-1302 -3504,-1009 -3504,-1009 17,15 -4118,2653 -6522,2857 -404,34 -751,-26 -1034,-145 -1282,217 -2544,174 -3285,-530 -1953,-1856 -2930,1595 -8633,2572 -2355,403 -3505,-1464 -4046,-3795 -2896,2076 -4979,4226 -5379,5385 -883,2566 901,5637 4932,4204 4030,-1432 16555,-2734 20709,-911 1072,470 2248,763 3381,865l5307 -3960c-17,-69 -35,-140 -56,-211zm-13175 -5434l25 -9 -26 9 1 0zm56 -20c322,-102 771,-117 1358,5 2256,469 4421,-832 5852,-1590 -356,-417 -900,-970 -1654,-1521 -1240,1563 -5042,2928 -5556,3106z"
        fill={darkColor}
      />
      <Path
        d="M50506 12817c0,0 -571,-4017 -1873,-5319 -1302,-1302 -3504,-1009 -3504,-1009 13,12 -2359,1529 -4555,2352l-1 1c0,0 2976,-343 4696,-1285 1720,-941 4513,696 4991,7838 426,-653 552,-1508 246,-2578zm-6724 -6603c292,-154 565,-303 816,-436 -1169,-1370 -4356,-4198 -10412,-3652 -2884,260 -5926,1406 -8672,2883 226,-91 7473,-2994 8745,-1808 1292,1205 3111,2174 4978,1074 1867,-1100 4546,1938 4546,1938l0 0z"
        fill={lightColor}
      />
      <Path
        d="M10816 17148c52,-1502 562,-2917 1593,-3994 2138,-2235 5441,-2112 8067,-974 4354,1889 7806,2342 12175,-37 2527,-1376 5051,-1695 7861,-1504 1248,85 3786,522 4927,183 387,-115 759,-287 1118,-474 2588,-1356 4774,-3193 7502,-636 1828,1713 1983,4932 1186,7194 -1281,3634 -4539,4871 -8061,3952 -4583,-1196 -9990,-1656 -14687,-851 -883,152 -1895,493 -2757,758 -1404,431 -2802,877 -4210,1292 -1988,585 -5878,1743 -7889,1332 -156,-32 -312,-61 -469,-88 -1552,-268 -3251,-388 -4561,-1388 -1488,-1135 -1859,-2950 -1795,-4764z"
        fill={borderColor2}
      />
      <Path
        d="M12106 17196c126,-3776 3726,-5584 7871,-3787 4144,1797 8142,2708 13276,-87 5135,-2796 9816,-408 12543,-1220 2728,-812 4834,-3804 7396,-1404 2562,2400 1308,10693 -5692,8866 -7000,-1827 -12743,-1297 -15214,-873 -2472,423 -11572,3966 -14395,3389 -2822,-577 -5952,-264 -5785,-4884z"
        fill={snow}
      />
      <Path
        d="M12105 17196c127,-3776 3727,-5584 7871,-3787 166,72 332,142 498,211 0,0 -3495,-948 -4393,1251 -897,2199 1167,4107 3553,3839 2386,-267 4016,-976 4016,-976 0,0 1021,1584 3416,933 2395,-651 4381,-1970 4381,-1970 0,0 882,1448 4122,750 3239,-698 5359,-1649 5359,-1649 0,0 3855,2683 5820,1981 1965,-702 1308,-2039 1308,-2039 0,0 4120,1282 5001,-589 881,-1871 381,-6148 -3165,-5100l-2 0c1074,-422 2141,-442 3302,646 2561,2400 1307,10693 -5693,8866 -7000,-1827 -12742,-1297 -15214,-873 -2472,423 -11572,3966 -14394,3389 -2823,-577 -5953,-264 -5786,-4884z"
        fill={darkSnow}
      />
    </G>
  );
}