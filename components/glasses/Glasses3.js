import React from "react";
import { G, Path } from "react-native-svg";

export default function Glasses3({ glassesColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M38436 19373c3866,0 7000,3134 7000,7000 0,3866 -3134,7000 -7000,7000 -3866,0 -7000,-3134 -7000,-7000 0,-3866 3134,-7000 7000,-7000zm0 1400c3093,0 5600,2508 5600,5600 0,3093 -2507,5600 -5600,5600 -3093,0 -5600,-2508 -5600,-5600 0,-3093 2507,-5600 5600,-5600z"
        fill={glassesColor1}
      />
      <Path
        d="M43751 24607c-740,-2227 -2840,-3834 -5315,-3834 -103,0 -205,3 -307,9 -129,363 -199,754 -199,1161 0,1933 1581,3499 3532,3499 874,0 1673,-314 2289,-835z"
        fill="#fff"
      />
      <Path
        d="M44036 26374c6061,-680 779,6776 3393,11080"
        fill="none"
        stroke={glassesColor1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1377.95}
      />
    </G>
  );
}
