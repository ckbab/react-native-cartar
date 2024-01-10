import React from "react";
import { G, Path } from "react-native-svg";

export default function Border1({ borderColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M14987 10411c94,-189 169,-387 215,-594 30,-131 50,-265 54,-400l2 -66 -1 -59 -2 -65 -8 -98c-19,-119 -36,-239 -64,-356 -37,-152 -84,-301 -141,-446l-36 -93c-183,-469 -467,-906 -731,-1333 -768,-1244 -1502,-2630 -143,-3824 1523,-1339 6631,-2061 8592,-2299 4244,-516 8602,-654 12873,-564 4015,83 8304,272 12263,994 1787,326 3816,817 5401,1741 2236,1305 335,3527 -784,4787l-391 440 -49 57c-25,30 -51,59 -76,89 1792,485 3415,1482 4289,3171 546,1056 716,2257 537,3428 -176,1146 -676,2237 -1402,3139 -1100,1366 -2665,2248 -4407,2469 -2094,265 -4333,-174 -6394,-546 -5172,-933 -9215,-1298 -14412,93 -3388,907 -7352,1874 -10876,1953 -1948,44 -3692,-147 -5480,-956l-67 -30c-1331,-603 -2478,-1549 -3258,-2791 -507,-807 -791,-1720 -740,-2678 52,-967 434,-1850 1033,-2603 747,-939 1790,-1630 2874,-2124 427,-194 874,-337 1331,-437z"
        fill={borderColor1}
      />
    </G>
  );
}
