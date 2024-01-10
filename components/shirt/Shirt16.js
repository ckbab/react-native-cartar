import React from "react";
import { G, Path } from "react-native-svg";

export default function Shirt16({
  borderColor2,
  shirtColor1,
  shirtColor2,
  shirtColor3,
  shirtColor4,
}) {
  return (
    <G scale="0.00001">
      <Path
        d="M14109 66666l38449 0 0 -6469c0,-7785 -6645,-14151 -14771,-14151l-8906 0c-8126,0 -14771,6366 -14771,14151l0 6469z"
        fill={borderColor2}
      />
      <Path
        d="M51421 66666l-36176 0 0 -6469c0,-7184 5878,-13062 13062,-13062l10052 0c7184,0 13062,5878 13062,13062l0 6469z"
        fill={shirtColor1}
      />
      <Path
        d="M51421 66666l-26150 0 19386 -17901c4024,2232 6764,6528 6764,11432l0 6469z"
        fill={shirtColor3}
      />
      <Path
        d="M20031 50110c2257,-1857 5142,-2976 8276,-2976l10052 0c3133,0 6019,1119 8276,2976 -2474,4489 -7502,7561 -13302,7561 -5800,0 -10828,-3072 -13302,-7561z"
        fill={shirtColor2}
      />
      <Path
        d="M44657 48765c701,389 1362,840 1977,1346 -2216,4021 -6481,6905 -11515,7462l9538 -8808z"
        fill={shirtColor4}
      />
    </G>
  );
}
