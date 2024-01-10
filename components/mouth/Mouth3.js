import React from "react";
import { G, Path } from "react-native-svg";

export default function Mouth3({ borderColor2 }) {
  return (
    <G scale="0.00001" translateY={0.02}>
      <Path
        d="M28050 35619c3474,2017 7389,1873 9872,-782 160,-171 457,-78 257,217 -2747,4176 -7338,4058 -10129,565z"
        fill={borderColor2}
      />
      <Path
        d="M36915 34587c1216,-377 2296,199 1615,1519 -283,-875 -903,-1345 -1615,-1519z"
        fill={borderColor2}
      />
      <Path
        d="M29194 35186c-1074,27 -1648,609 -988,1555 75,-649 454,-1344 988,-1555z"
        fill={borderColor2}
      />
    </G>
  );
}
