import React from "react";
import { G, Path } from "react-native-svg";

export default function Border6({ borderColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M39013 58485c-219,661 -802,1168 -1502,1327l710 1082c579,882 365,2086 -531,2667l-1594 1032c-858,556 -1998,307 -2596,-498 -411,649 -1183,1025 -1983,860l-1861 -383c-1041,-214 -1688,-1256 -1482,-2289l491 -2460c-616,-220 -1108,-717 -1284,-1335 -94,-3 -188,-12 -281,-28 -866,-143 -1589,-803 -1710,-1636 -139,-20 -276,-55 -409,-103 -886,-319 -1463,-1190 -1348,-2096 -57,-25 -113,-52 -168,-83 -786,-430 -1207,-1308 -1028,-2145 -219,-122 -416,-284 -580,-478 -300,-355 -461,-789 -481,-1224 -407,-102 -788,-331 -1074,-670 -691,-819 -636,-2061 213,-2747 844,-683 2078,-507 2767,309 285,337 443,746 470,1159 431,98 835,335 1136,692 399,473 564,1100 449,1689 15,7 29,15 43,23 724,396 1147,1182 1059,1967 639,270 1109,840 1226,1503 29,4 58,8 87,13 781,129 1438,693 1647,1430 94,3 188,12 281,28 565,94 1076,413 1393,882 34,5 68,11 102,18l1848 380 431 -279c566,-366 1260,-386 1839,-118 306,-506 841,-865 1446,-965 161,-27 325,-35 487,-24 231,-699 869,-1225 1623,-1350 0,0 0,0 1,0 100,-727 628,-1357 1344,-1614 28,-10 56,-20 84,-28 -7,-667 347,-1306 918,-1685 -195,-638 -45,-1357 400,-1883 143,-170 309,-311 490,-425 -172,-609 -33,-1295 404,-1813 689,-816 1922,-992 2767,-309 849,686 904,1928 213,2747 -131,155 -281,287 -445,394 193,630 57,1348 -397,1886 -114,135 -244,254 -387,356 302,893 -127,1882 -975,2346 -115,63 -235,115 -359,156 19,835 -538,1609 -1361,1905 -111,40 -225,70 -340,91 -105,861 -815,1557 -1704,1704 -161,26 -324,35 -486,24zm-5248 4943l0 0c0,0 0,0 0,0z"
        fill={borderColor1}
      />
    </G>
  );
}
