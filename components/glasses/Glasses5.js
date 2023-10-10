import React from "react";
import { G, Path } from "react-native-svg";

export default function Glasses5({ glassesColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M27748 21448c2441,0 4551,1419 5550,3476 999,-2057 3109,-3476 5550,-3476 3406,0 6167,2761 6167,6167 0,3406 -2761,6167 -6167,6167 -2441,0 -4551,-1419 -5550,-3476 -999,2057 -3109,3476 -5550,3476 -3406,0 -6167,-2761 -6167,-6167 0,-3406 2761,-6167 6167,-6167zm11100 1233c2724,0 4933,2209 4933,4933 0,2724 -2209,4933 -4933,4933 -2724,0 -4933,-2209 -4933,-4933 0,-2724 2209,-4933 4933,-4933zm-11100 0c2724,0 4933,2209 4933,4933 0,2724 -2209,4933 -4933,4933 -2724,0 -4933,-2209 -4933,-4933 0,-2724 2209,-4933 4933,-4933z"
        fill={glassesColor1}
      />
      <Path
        d="M19127 26985l3700 0 0 1261 -3700 0 0 -1261zm28346 0l-3700 0 0 1261 3700 0 0 -1261z"
        fill={glassesColor1}
      />
      <Path
        d="M27748 22682c-2262,0 -4168,1522 -4750,3598 560,461 1282,738 2070,738 1780,0 3223,-1414 3223,-3157 0,-413 -81,-807 -228,-1169 -104,-7 -209,-10 -315,-10z"
        fill="#fff"
      />
      <Path
        d="M38849 22682c2262,0 4168,1522 4750,3598 -560,461 -1282,738 -2070,738 -1780,0 -3223,-1414 -3223,-3157 0,-413 81,-807 228,-1169 104,-7 209,-10 315,-10z"
        fill="#fff"
      />
    </G>
  );
}
