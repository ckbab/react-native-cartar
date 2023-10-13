import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { G, Path } from "react-native-svg";

export default function Earrings1({ borderColor2, color }) {
  const lightColor = changeColor(color, "#fff", 0.8);
  const lighterColor = changeColor(color, "#fff", 0.6);

  const borderLightColor = changeColor(borderColor2, "#fff", 0.8);
  const borderLighterColor = changeColor(borderColor2, "#fff", 0.7);

  // Always use gold medal in middle of hat.
  const medalColor = "#ffd700";
  const darkMedalColor = changeColor(medalColor, "#000", 0.8);
  const lightMedalColor = changeColor(medalColor, "#fff", 0.8);

  return (
    <G scale="0.00001">
      <Path
        d="M14539 13252c0,0 2717,-1684 2556,-4110 -160,-2426 -2805,-4072 -1523,-5199 1282,-1126 8896,-2657 19956,-2426 11059,231 14825,1473 16508,2455 1684,982 -2324,3668 -2404,4881 -80,1213 1763,4130 1763,4130 0,0 -15294,3180 -36857,269z"
        fill={color}
      />
      <Path
        d="M16965 8383c-555,-2017 -2536,-3435 -1392,-4440 1282,-1126 8896,-2657 19956,-2426 4174,87 7309,319 9685,626 405,454 622,930 622,1422 0,3094 -8557,5603 -19113,5603 -3565,0 -6902,-286 -9758,-784z"
        fill={lightColor}
      />
      <Path
        d="M16854 8036c-665,-1833 -2358,-3146 -1281,-4092 1282,-1126 8896,-2657 19956,-2426 3131,65 5677,212 7757,411 -874,81 -2188,98 -4082,22 -11924,-478 -18370,1459 -18370,1459 0,0 842,231 160,766 -681,534 -2364,318 -3045,881 -681,563 2164,1357 2285,2095 63,384 -1687,684 -3380,885z"
        fill={lighterColor}
      />
      <Path
        d="M13804 13101c7,-5 2601,-1613 2447,-3951 -70,-1065 -640,-1986 -1126,-2774 -633,-1026 -1138,-1841 -334,-2548 796,-699 3665,-1524 8052,-2057 3387,-412 7719,-662 12731,-557 5662,118 9480,500 12105,978 2705,493 4169,1092 5076,1621 1240,724 62,2041 -1028,3259 -628,702 -1223,1367 -1251,1789 -77,1173 1739,4047 1744,4055l140 221 -551 112c-45,9 -15633,3250 -37565,289l-934 -126 493 -311zm4137 -3966c124,1880 -1425,3334 -2217,3949 18389,2359 31878,250 34707,-261 -432,-716 -1712,-2934 -1643,-3976 34,-512 665,-1218 1330,-1961 975,-1090 2029,-2269 1200,-2753 -776,-452 -2038,-966 -4400,-1397 -2443,-445 -6039,-801 -11436,-914 -4783,-100 -8898,137 -12102,526 -3902,474 -6394,1156 -7026,1711 -603,530 -149,1263 420,2185 503,815 1093,1767 1166,2891z"
        fill={borderColor2}
      />
      <Path
        d="M16679 10980c282,-541 461,-1160 417,-1837 -28,-431 -135,-838 -285,-1221 6391,-926 20460,-2454 33657,-429 -454,527 -813,1007 -836,1361 -24,358 120,865 335,1401 -10765,-460 -22873,-236 -33289,725z"
        fill={borderLightColor}
      />
      <Path
        d="M16679 10980c282,-541 461,-1160 417,-1837 -28,-431 -135,-838 -285,-1221 2317,-335 5643,-750 9570,-1046l44 871c-2755,231 -4913,502 -4913,502 311,733 -486,2067 -486,2067l387 284c-1609,110 -3190,236 -4734,379zm20501 -4481c3172,26 6468,184 9756,537 964,266 1427,470 -312,284 -2764,-296 -5850,-2 -9302,104l-143 -926z"
        fill={borderLighterColor}
      />
      <Path
        d="M15848 10924c142,-272 257,-569 330,-885 65,-287 94,-585 74,-889 -13,-197 -47,-402 -97,-609 -50,-207 -112,-398 -181,-577l-91 -235 615 -89c3880,-562 10552,-1343 18165,-1440 5140,-65 10709,181 16138,1014l703 108 -226 262c-219,254 -417,498 -563,724 -138,213 -227,402 -237,554 -9,150 17,342 69,559l0 1c59,248 151,517 260,790l157 393 -1095 -47c-5412,-231 -11165,-288 -16865,-164 -5536,120 -11028,412 -16116,881l-1286 119 246 -471zm2019 -837c-38,167 -88,328 -148,486 4828,-413 9986,-674 15185,-787 5426,-118 10896,-75 16081,123 -52,-152 -95,-298 -128,-435l0 0c-54,-226 -81,-439 -69,-626 13,-202 117,-431 276,-678 101,-157 229,-324 372,-499 -4953,-711 -10018,-922 -14714,-862 -6978,89 -13155,774 -16987,1310 42,124 79,248 108,370 47,198 81,414 97,647 22,337 -7,655 -74,951z"
        fill={borderColor2}
      />
      <Path
        d="M26731 5368c0,0 8260,-533 11503,-133 3243,401 460,1757 458,3191 -2,1435 663,2553 -350,3022 -1015,469 -7681,46 -10197,184 -2515,139 -3541,-786 -3002,-2129 294,-732 -111,-2007 -554,-2865 -439,-851 507,-1174 2141,-1270zm2792 1631c0,0 3776,-243 5259,-60 1483,183 210,803 209,1459 -1,656 303,1167 -160,1381 -464,214 -3512,21 -4662,84 -1150,63 -1619,-359 -1372,-974 134,-335 -51,-918 -253,-1310 -201,-389 232,-537 979,-581z"
        fill={medalColor}
      />
      <Path
        d="M38731 9071c126,1122 467,1981 -389,2378 -573,265 -2948,245 -5360,203l5749 -2580z"
        fill={darkMedalColor}
      />
      <Path
        d="M34738 5087c1359,0 2613,40 3496,149 1444,178 1693,546 1526,1026l-4748 2453c-12,-101 -20,-206 -20,-316 0,-656 1274,-1276 -209,-1459 -705,-87 -1928,-78 -3018,-44l2974 -1809zm-5320 6517c-487,1 -921,9 -1272,29 -1517,83 -2492,-220 -2909,-768l3604 -2192c-4,80 -19,153 -44,218 -246,614 222,1036 1373,973 575,-31 1624,1 2589,15l-3340 1726z"
        fill={lightMedalColor}
      />
      <Path
        d="M26596 5067c398,-26 8546,-536 11911,-120 2858,353 2315,1145 1642,2130 -290,424 -611,893 -611,1350 0,430 65,847 122,1223 138,893 242,1572 -650,1986 -900,415 -3920,360 -6768,307 -1572,-29 -3087,-57 -3969,-9 -388,21 -757,22 -1102,4 -842,-44 -1517,-196 -2019,-434 -453,-215 -752,-501 -895,-839 -146,-346 -130,-756 50,-1205 122,-304 113,-718 28,-1157 -107,-557 -336,-1147 -575,-1611 -265,-513 -83,-881 432,-1147 534,-276 1370,-418 2405,-479l0 0zm11367 457c-3043,-376 -11056,142 -11079,143l-16 1c-598,35 -1055,104 -1292,226 -256,132 -328,351 -154,689 250,486 490,1102 601,1680 92,476 99,933 -41,1283 -157,389 -172,739 -50,1028 100,237 292,429 571,562 230,110 533,179 905,198 180,9 385,8 612,-4 1033,-57 2640,-27 4307,4 2422,44 4992,92 5350,-73 500,-232 411,-813 293,-1578 -57,-375 -122,-793 -122,-1256 0,-534 346,-1039 658,-1496 467,-685 844,-1236 -543,-1407zm-8576 1174c254,-16 4041,-250 5670,-48l0 0c1702,210 1410,638 1047,1169 -125,183 -264,385 -264,578 0,209 28,389 52,550 68,444 120,781 -395,1019 -557,258 -2061,230 -3478,204 -693,-13 -1361,-25 -1724,-5 -219,12 -431,12 -633,2l-4 0c-511,-26 -919,-119 -1223,-263l-3 0c-254,-121 -421,-278 -497,-460 -73,-173 -65,-376 23,-598 50,-126 46,-304 9,-494 -48,-249 -150,-512 -256,-718 -146,-282 -33,-491 273,-649 326,-168 811,-253 1402,-288l0 0zm5120 529c-1281,-158 -4826,70 -4835,71l-13 1c-155,9 -261,20 -289,34 -46,24 -50,83 6,191 118,228 230,517 282,787 44,228 46,449 -23,621 -65,161 -72,304 -23,421 35,81 93,144 174,183l-2 0c31,15 70,24 115,26l0 0c38,2 87,1 146,-2 513,-28 1274,-14 2062,0 991,18 2044,37 2060,30 122,-57 85,-296 37,-611 -28,-182 -59,-383 -59,-583 0,-260 167,-504 317,-724 157,-231 285,-417 50,-446l-3 0z"
        fill={borderColor2}
      />
      <Path
        d="M14506 19695c2428,941 5218,1610 15237,-1074 10020,-2684 16299,1006 21038,407 4739,-598 6755,-7655 656,-9265 -6098,-1610 -13105,4304 -19110,4415 -6006,112 -13980,-3795 -17977,-1975 -3997,1821 -4023,5291 155,7492z"
        fill={color}
      />
      <Path
        d="M53972 11093c-604,-573 -1437,-1040 -2534,-1330 -6098,-1610 -13105,4304 -19110,4415 -6006,112 -13980,-3795 -17977,-1975 -3268,1489 -3881,4080 -1711,6179 -654,-2754 1057,-5145 5933,-4230 4876,916 10590,3560 17633,1261 7042,-2299 12189,-6557 16209,-4723 746,340 1243,449 1557,401z"
        fill={lightColor}
      />
      <Path
        d="M14820 19241c1137,439 2365,811 4465,764 2196,-50 5341,-547 10291,-1872 6547,-1754 11505,-859 15494,-139 2168,391 4039,729 5644,526 1185,-150 2182,-780 2870,-1634 519,-644 863,-1413 983,-2202 120,-785 20,-1585 -348,-2296 -485,-937 -1444,-1728 -2988,-2136 -3241,-856 -6900,626 -10501,2084 -2862,1159 -5691,2304 -8412,2355 -2648,49 -5607,-642 -8462,-1309 -3668,-857 -7157,-1672 -9223,-731 -917,418 -1599,926 -2041,1481 -375,472 -578,980 -606,1496 -28,526 122,1066 451,1591 454,722 1246,1419 2383,2023zm4452 1789c-2386,54 -3764,-371 -5045,-868l-67 -30c-1333,-702 -2273,-1535 -2824,-2411 -430,-685 -626,-1395 -588,-2093 38,-707 312,-1398 817,-2034 556,-699 1393,-1329 2506,-1836 2522,-1149 6247,-279 10162,636 2770,648 5641,1319 8107,1272 2442,-46 5148,-1141 7885,-2250 3825,-1549 7711,-3122 11422,-2143 1909,504 3103,1498 3714,2679 456,881 582,1863 436,2817 -145,950 -563,1881 -1192,2663 -882,1094 -2183,1906 -3754,2104 -1831,231 -3804,-125 -6091,-538 -3845,-694 -8622,-1556 -14848,111 -5069,1357 -8329,1868 -10640,1920z"
        fill={borderColor2}
      />
    </G>
  );
}
