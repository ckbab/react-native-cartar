import React from "react";
import { Path } from "react-native-svg";

export default function Border2({ borderColor1 }) {
  return (
    <Path
      d="M0.535571 0.666661l-0.40448 0 0 -0.0646929c0,-0.0723465 0.0529488,-0.131843 0.121622,-0.147465 -0.0126417,-0.0105315 -0.0235472,-0.023185 -0.0324961,-0.0369528 -0.0124134,-0.0191024 -0.0212874,-0.0402283 -0.0273858,-0.062126 -0.025,-0.0038189 -0.0458386,-0.0233031 -0.0489134,-0.0491496l-0.000204724 -0.00172047c-0.00316535,-0.0265906 0.0135984,-0.050689 0.0380433,-0.059311 0.000145669,-0.00249213 0.000271654,-0.00498819 0.000248031,-0.0074685 -0.000779528,-0.0776417 0.0316063,-0.128835 0.100969,-0.162067l0.0499252 -0.0239173 0.0500945 0.0239134c0.0694291,0.0331457 0.101787,0.0844803 0.100976,0.162102 -2.75591e-005,0.0024685 9.84252e-005,0.00495276 0.000244094,0.00743701 0.0244488,0.00861811 0.0412126,0.0327165 0.0380472,0.059311l-0.000204724 0.00172047c-0.0030748,0.0258504 -0.0239213,0.0453346 -0.0489213,0.0491496 -0.00609843,0.0218976 -0.0149724,0.0430236 -0.0273819,0.062122 -0.00891339,0.0137205 -0.0197717,0.0263268 -0.0323504,0.0368346 0.068937,0.0154252 0.122169,0.0750472 0.122169,0.147587l0 0.0646929z"
      fill={borderColor1}
    />
  );
}