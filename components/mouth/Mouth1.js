import React from "react";
import { G, Path } from "react-native-svg";

export default function Mouth1({ borderColor2 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M38616 37069c-3474,-2017 -7389,-1873 -9872,782 -160,171 -457,78 -257,-217 2747,-4176 7338,-4058 10129,-565z"
        fill={borderColor2}
      />
      <Path
        d="M27402 37321c1216,-377 2296,199 1615,1519 -283,-875 -903,-1345 -1615,-1519z"
        fill={borderColor2}
      />
      <Path
        d="M39324 36383c-1074,27 -1648,609 -988,1555 75,-649 454,-1344 988,-1555z"
        fill={borderColor2}
      />
    </G>
  );
}
