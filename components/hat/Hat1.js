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
        d="M17690 13252c0,0 2263,-1684 2130,-4110 -133,-2426 -2337,-4072 -1269,-5199 1069,-1126 7413,-2657 16627,-2426 9215,231 12352,1473 13755,2455 1403,982 -1937,3668 -2003,4881 -67,1213 1469,4130 1469,4130 0,0 -12743,3180 -30709,269z"
        fill={color}
      />
      <Path
        d="M17690 13252c0,0 2263,-1684 2130,-4110 -15,-261 -53,-514 -109,-757l3123 -354c0,0 734,3297 -226,5888 -1589,-174 -3230,-393 -4918,-667z"
        fill={lighterColor}
      />
      <Path
        d="M19711 8383c-462,-2017 -2113,-3435 -1160,-4440 1069,-1126 7413,-2657 16627,-2426 3478,87 6090,319 8070,626 338,454 518,930 518,1422 0,3094 -7130,5603 -15925,5603 -2970,0 -5750,-286 -8130,-784z"
        fill={lightColor}
      />
      <Path
        d="M19619 8036c-554,-1833 -1965,-3146 -1068,-4092 1069,-1126 7413,-2657 16627,-2426 2609,65 4730,212 6463,411 -728,81 -1823,98 -3401,22 -9935,-478 -15306,1459 -15306,1459 0,0 701,231 133,766 -568,534 -1970,318 -2537,881 -568,563 1803,1357 1904,2095 52,384 -1405,684 -2816,885z"
        fill={lighterColor}
      />
      <Path
        d="M17077 13101c6,-5 2167,-1613 2039,-3951 -58,-1065 -533,-1986 -938,-2774 -528,-1026 -948,-1841 -278,-2548 663,-699 3054,-1524 6709,-2057 2822,-412 6431,-662 10608,-557 4718,118 7898,500 10086,978 2254,493 3473,1092 4229,1621 1033,724 52,2041 -856,3259 -523,702 -1019,1367 -1043,1789 -64,1173 1449,4047 1453,4055l117 221 -459 112c-38,9 -13026,3250 -31300,289l-778 -126 411 -311zm3447 -3966c103,1880 -1188,3334 -1847,3949 15322,2359 26561,250 28919,-261 -360,-716 -1426,-2934 -1369,-3976 28,-512 554,-1218 1108,-1961 812,-1090 1691,-2269 1000,-2753 -646,-452 -1698,-966 -3667,-1397 -2035,-445 -5032,-801 -9528,-914 -3985,-100 -7414,137 -10083,526 -3251,474 -5327,1156 -5854,1711 -502,530 -124,1263 350,2185 419,815 910,1767 972,2891z"
        fill={borderColor2}
      />
      <Path
        d="M19473 10980c235,-541 384,-1160 347,-1837 -24,-431 -113,-838 -237,-1221 5326,-926 17048,-2454 28044,-429 -378,527 -677,1007 -696,1361 -20,358 100,865 280,1401 -8969,-460 -19058,-236 -27737,725z"
        fill={borderLightColor}
      />
      <Path
        d="M19473 10980c235,-541 384,-1160 347,-1837 -24,-431 -113,-838 -237,-1221 1930,-335 4702,-750 7974,-1046l36 871c-2295,231 -4093,502 -4093,502 259,733 -404,2067 -404,2067l322 284c-1341,110 -2658,236 -3944,379zm17081 -4481c2643,26 5389,184 8129,537 803,266 1189,470 -259,284 -2303,-296 -4874,-2 -7750,104l-119 -926z"
        fill={borderLighterColor}
      />
      <Path
        d="M18780 10924c118,-272 215,-569 274,-885 54,-287 78,-585 62,-889 -11,-197 -39,-402 -81,-609 -41,-207 -93,-398 -151,-577l-76 -235 512 -89c3233,-562 8793,-1343 15135,-1440 4283,-65 8923,181 13447,1014l585 108 -188 262c-183,254 -347,498 -469,724 -115,213 -189,402 -197,554 -8,150 14,342 57,559l0 1c49,248 126,517 217,790l131 393 -912 -47c-4509,-231 -9303,-288 -14052,-164 -4613,120 -9189,412 -13428,881l-1072 119 205 -471zm1682 -837c-31,167 -73,328 -123,486 4022,-413 8320,-674 12652,-787 4520,-118 9078,-75 13398,123 -43,-152 -80,-298 -107,-435l0 0c-45,-226 -67,-439 -57,-626 11,-202 97,-431 230,-678 84,-157 191,-324 310,-499 -4127,-711 -8347,-922 -12260,-862 -5814,89 -10961,774 -14153,1310 35,124 65,248 90,370 40,198 68,414 81,647 19,337 -6,655 -62,951z"
        fill={borderColor2}
      />
      <Path
        d="M27848 5368c0,0 6882,-533 9584,-133 2702,401 383,1757 382,3191 -1,1435 552,2553 -292,3022 -845,469 -6400,46 -8496,184 -2096,139 -2951,-786 -2501,-2129 244,-732 -92,-2007 -461,-2865 -366,-851 422,-1174 1784,-1270zm2326 1631c0,0 3146,-243 4382,-60 1235,183 175,803 174,1459 -1,656 253,1167 -133,1381 -386,214 -2926,21 -3884,84 -959,63 -1349,-359 -1144,-974 112,-335 -42,-918 -211,-1310 -167,-389 193,-537 816,-581z"
        fill={medalColor}
      />
      <Path
        d="M37847 9071c104,1122 389,1981 -324,2378 -477,265 -2457,245 -4466,203l4790 -2580z"
        fill={darkMedalColor}
      />
      <Path
        d="M34520 5087c1131,0 2177,40 2913,149 1203,178 1411,546 1271,1026l-3956 2453c-10,-101 -17,-206 -17,-316 0,-656 1061,-1276 -174,-1459 -587,-87 -1607,-78 -2515,-44l2478 -1809zm-4433 6517c-406,1 -767,9 -1060,29 -1264,83 -2076,-220 -2424,-768l3004 -2192c-4,80 -16,153 -37,218 -206,614 185,1036 1144,973 479,-31 1354,1 2157,15l-2783 1726z"
        fill={lightMedalColor}
      />
      <Path
        d="M27735 5067c331,-26 7121,-536 9924,-120 2381,353 1929,1145 1369,2130 -242,424 -510,893 -510,1350 0,430 54,847 102,1223 115,893 202,1572 -542,1986 -749,415 -3267,360 -5639,307 -1310,-29 -2572,-57 -3307,-9 -323,21 -631,22 -919,4 -701,-44 -1263,-196 -1681,-434 -377,-215 -627,-501 -746,-839 -122,-346 -108,-756 42,-1205 102,-304 94,-718 23,-1157 -89,-557 -280,-1147 -480,-1611 -221,-513 -69,-881 360,-1147 445,-276 1142,-418 2004,-479l0 0zm9471 457c-2535,-376 -9212,142 -9231,143l-14 1c-498,35 -879,104 -1076,226 -213,132 -274,351 -128,689 209,486 408,1102 501,1680 77,476 82,933 -34,1283 -131,389 -144,739 -42,1028 83,237 243,429 476,562 192,110 444,179 754,198 150,9 320,8 509,-4 861,-57 2200,-27 3589,4 2018,44 4159,92 4457,-73 417,-232 343,-813 244,-1578 -48,-375 -102,-793 -101,-1256 0,-534 288,-1039 548,-1496 389,-685 704,-1236 -453,-1407zm-7145 1174c211,-16 3366,-250 4724,-48l0 0c1419,210 1175,638 872,1169 -104,183 -220,385 -220,578 0,209 23,389 44,550 56,444 100,781 -329,1019 -464,258 -1717,230 -2898,204 -578,-13 -1134,-25 -1436,-5 -183,12 -360,12 -528,2l-3 0c-426,-26 -766,-119 -1019,-263l-3 0c-212,-121 -350,-278 -414,-460 -61,-173 -55,-376 19,-598 42,-126 38,-304 8,-494 -40,-249 -125,-512 -213,-718 -122,-282 -28,-491 228,-649 271,-168 675,-253 1168,-288l0 0zm4266 529c-1067,-158 -4021,70 -4029,71l-11 1c-129,9 -218,20 -240,34 -39,24 -42,83 4,191 98,228 191,517 235,787 36,228 38,449 -19,621 -54,161 -60,304 -19,421 28,81 77,144 144,183l-2 0c26,15 58,24 96,26l0 0c31,2 72,1 121,-2 427,-28 1061,-14 1718,0 826,18 1703,37 1717,30 102,-57 71,-296 31,-611 -23,-182 -49,-383 -49,-583 0,-260 139,-504 264,-724 131,-231 237,-417 41,-446l-2 0z"
        fill={borderColor2}
      />
      <Path
        d="M14485 18351c2434,706 5230,1209 15272,-806 10043,-2015 16337,755 21087,306 4750,-449 6770,-5746 658,-6956 -6113,-1209 -13135,3231 -19155,3315 -6019,84 -14013,-2849 -18019,-1482 -4006,1367 -4033,3972 156,5624z"
        fill={color}
      />
      <Path
        d="M54043 11893c-605,-430 -1440,-780 -2540,-998 -6113,-1209 -13135,3231 -19155,3315 -6019,84 -14013,-2849 -18019,-1482 -3276,1117 -3890,3063 -1715,4639 -656,-2068 1059,-3863 5947,-3175 4888,687 10615,2672 17674,946 7059,-1726 12217,-4922 16247,-3545 747,255 1245,337 1561,301z"
        fill={lightColor}
      />
      <Path
        d="M14799 18011c1140,329 2371,609 4475,573 2201,-37 5354,-411 10315,-1406 6562,-1316 11531,-644 15530,-104 2173,294 4048,548 5657,395 1188,-112 2187,-586 2876,-1227 520,-483 865,-1061 985,-1652 120,-589 20,-1191 -349,-1724 -486,-703 -1447,-1297 -2995,-1604 -3248,-643 -6916,470 -10525,1565 -2869,870 -5704,1730 -8431,1768 -2654,37 -5620,-482 -8482,-983 -3676,-644 -7173,-1256 -9244,-549 -919,314 -1602,695 -2045,1112 -376,354 -580,736 -607,1123 -28,395 122,800 452,1194 455,543 1250,1066 2389,1519zm4462 1343c-2391,40 -3772,-279 -5057,-651l-67 -23c-1336,-527 -2279,-1152 -2831,-1811 -431,-514 -627,-1047 -590,-1571 38,-531 313,-1050 819,-1527 557,-525 1397,-998 2511,-1378 2529,-862 6261,-209 10185,478 2776,486 5654,990 8126,955 2448,-34 5159,-857 7904,-1689 3834,-1163 7729,-2344 11449,-1608 1913,378 3110,1124 3722,2011 457,662 583,1399 437,2115 -146,713 -564,1412 -1195,1998 -884,822 -2188,1431 -3763,1580 -1835,173 -3813,-94 -6105,-404 -3854,-521 -8642,-1169 -14882,83 -5081,1019 -8348,1402 -10665,1441z"
        fill={borderColor2}
      />
    </G>
  );
}
