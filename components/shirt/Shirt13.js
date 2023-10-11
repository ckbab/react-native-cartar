import React from "react";
import { G, Path } from "react-native-svg";

export default function Shirt13({
  borderColor2,
  shirtColor1,
  shirtColor2,
  shirtColor3,
  shirtColor4,
}) {
  return (
    <G scale="0.00001">
      <Path
        d="M52557 66666l-38449 0 0 -6469c0,-7785 6645,-14151 14771,-14151l8906 0c8126,0 14771,6366 14771,14151l0 6469z"
        fill={borderColor2}
      />
      <Path
        d="M15245 66666l36176 0 0 -6469c0,-7184 -5878,-13062 -13062,-13062l-10052 0c-7184,0 -13062,5878 -13062,13062l0 6469z"
        fill={shirtColor1}
      />
      <Path
        d="M37167 66666l7667 0 0 -17803c-1911,-1099 -4122,-1729 -6474,-1729l-1193 0 0 19531z"
        fill={shirtColor3}
      />
      <Path
        d="M46635 50110c-2257,-1857 -5142,-2976 -8276,-2976l-10052 0c-3133,0 -6019,1119 -8276,2976 2474,4489 7502,7561 13302,7561 5800,0 10828,-3072 13302,-7561z"
        fill={shirtColor2}
      />
      <Path
        d="M44833 48864c-1911,-1099 -4122,-1729 -6474,-1729l-1193 0 0 10074c3046,-750 5712,-2371 7667,-4561l0 -3785z"
        fill={shirtColor4}
      />
    </G>
  );
}