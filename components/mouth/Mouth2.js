import React from "react";
import { G, Path, Polygon } from "react-native-svg";

export default function Mouth({ borderColor2 }) {
  return (
    <G scale="0.00001" translateY={0.02}>
      <Path
        d="M37320 34659c1385,456 2101,1541 638,2692 132,-1233 33,-2058 -638,-2692z"
        fill={borderColor2}
      />
      <Path
        d="M28705 35029c-728,249 -1226,1236 -298,1815 -95,-678 -178,-1459 298,-1815z"
        fill={borderColor2}
      />
      <Polygon
        fill={borderColor2}
        points="28015,35631 38384,35290 38310,36255 27992,36167 "
      />
    </G>
  );
}
