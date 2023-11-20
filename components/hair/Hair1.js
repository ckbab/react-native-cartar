import React from "react";
import { G, Path } from "react-native-svg";

export default function Hair({
  borderColor2,
  clipPath,
  hairColor1,
  hairColor2,
  hairColor3,
}) {
  return (
    <G clipPath={clipPath} clipRule="evenodd">
      <Path
        d="M0.44174 0.17624c-0.0492835,-0.0613858 -0.16824,-0.0613858 -0.217516,1.1811e-005 0.0562795,-0.0466535 0.161228,-0.0466575 0.217516,-1.1811e-005z"
        fill={hairColor3}
      />
      <Path
        d="M0.458189 0.183429c0,0 -0.0243268,-0.0523976 -0.0565591,-0.0749449 -0.0519803,-0.0363583 -0.0853031,-0.0363583 -0.137283,0 -0.0322323,0.0225472 -0.0565591,0.0749449 -0.0565591,0.0749449 0.0542638,-0.0690118 0.196138,-0.0690118 0.250402,0z"
        fill={borderColor2}
      />
      <Path
        d="M0.43674 0.16272c0,0 -0.0133307,-0.0262638 -0.0422205,-0.0464685 -0.0465906,-0.0325866 -0.0764685,-0.0325866 -0.123063,0 -0.0288898,0.0202047 -0.0394961,0.0444882 -0.0394961,0.0444882 0.0526299,-0.0443937 0.155362,-0.0376299 0.20478,0.00198031z"
        fill={hairColor1}
      />
      <Path
        d="M0.261835 0.136752c0,0 0.0330512,-0.0316496 0.072685,-0.032685 0.0396339,-0.00103543 0.0677835,0.0331102 0.0677835,0.0331102 0,0 -0.0552047,-0.0466417 -0.140469,-0.000425197z"
        fill={hairColor2}
      />
    </G>
  );
}
