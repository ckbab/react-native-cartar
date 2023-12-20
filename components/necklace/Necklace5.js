import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { G, Path } from "react-native-svg";

export default function Necklace5({ borderColor2, color }) {
  const shadowColor = changeColor(color, "#000", 0.8);

  return (
    <G scale={0.00001}>
      <Path
        d="M42808 52184c251,396 429,867 478,1328 72,680 -178,1375 -558,1904 178,1581 -618,2680 -1973,3178l-170 62 -177 -32c-2292,-428 -5021,-1995 -6645,-3917l-525 -622 513 -636c1113,-1378 2787,-2970 4267,-3739 1031,-536 2665,-1067 3816,-840l89 18 82 40c509,253 813,1002 950,1591 128,549 61,1147 -146,1666l0 -1z"
        fill={borderColor2}
      />
      <Path
        d="M34305 54069c0,0 2009,-2490 4021,-3536 2011,-1045 3381,-776 3381,-776 0,0 312,156 509,1000 197,844 -389,1530 -389,1530 0,0 613,529 699,1337 87,809 -629,1496 -629,1496 314,1342 -211,2187 -1370,2613 0,0 -2568,-479 -4878,-2351l3600 -829 -3660 -155 4537 -2554 -5813 2237 -10 -12 1 0z"
        fill={color}
      />
      <Path
        d="M34305 54069c0,0 980,-1213 2255,-2302 48,95 110,180 188,251 707,641 2183,285 2183,285l0 0 -4616 1776 -11 -12 0 2zm4479 3122c-906,-360 -2047,-931 -3132,-1810l2035 -469c-361,461 -560,1281 1098,2279zm-639 -2686l-2553 -108 2519 -1419c-280,269 -524,564 -523,779 2,494 539,739 556,748l0 0z"
        fill={shadowColor}
      />
      <Path
        d="M23790 52184c-251,396 -429,867 -478,1328 -72,680 178,1375 558,1904 -178,1581 618,2680 1973,3178l170 62 176 -32c2293,-428 5021,-1995 6645,-3917l525 -622 -513 -636c-1113,-1378 -2787,-2970 -4267,-3739 -1031,-536 -2665,-1067 -3816,-840l-89 18 -83 40c-509,253 -813,1002 -949,1591 -128,549 -61,1147 146,1666l0 -1z"
        fill={borderColor2}
      />
      <Path
        d="M32294 54069c0,0 -2009,-2490 -4021,-3536 -2011,-1045 -3381,-776 -3381,-776 0,0 -312,156 -509,1000 -197,844 389,1530 389,1530 0,0 -613,529 -699,1337 -87,809 630,1496 630,1496 -315,1342 211,2187 1369,2613 0,0 2568,-479 4878,-2351l-3600 -829 3659 -155 -4537 -2554 5813 2237 10 -12 -1 0z"
        fill={color}
      />
      <Path
        d="M32294 54069c0,0 -980,-1213 -2255,-2302 -48,95 -110,180 -189,251 -707,641 -2183,285 -2183,285l0 0 4617 1776 10 -12 0 2zm-4479 3122c906,-360 2047,-931 3132,-1810l-2035 -469c361,461 560,1281 -1098,2279zm639 -2686l2553 -108 -2519 -1419c280,269 524,564 523,779 -2,494 -539,739 -556,748l0 0z"
        fill={shadowColor}
      />
      <Path
        d="M33300 51498c1528,0 3457,1049 3457,3121 0,2072 -1928,3121 -3457,3121 -1528,0 -3457,-1050 -3457,-3121 0,-2072 1928,-3121 3457,-3121z"
        fill={borderColor2}
      />
      <Path
        d="M33300 52400c1487,0 2692,994 2692,2219 0,1227 -1206,2219 -2692,2219 -1486,0 -2691,-994 -2691,-2219 0,-1227 1206,-2219 2691,-2219z"
        fill={shadowColor}
      />
      <Path
        d="M33300 52400c1045,0 1950,491 2396,1207 -278,899 -1245,1563 -2396,1563 -1151,0 -2118,-664 -2396,-1563 446,-717 1352,-1207 2396,-1207z"
        fill={color}
      />
    </G>
  );
}