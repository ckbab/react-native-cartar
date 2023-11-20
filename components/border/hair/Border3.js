import React from "react";
import { Path } from "react-native-svg";

export default function Border3({ borderColor1, clipPath }) {
  return (
    <Path
      clipPath={clipPath}
      clipRule="evenodd"
      d="M0.535571 0.666661l-0.40448 0 0 -0.0646929c0,-0.0723465 0.0529488,-0.131843 0.121622,-0.147465 -0.0126417,-0.0105315 -0.0235472,-0.023185 -0.0324961,-0.0369528 -0.0124134,-0.0191024 -0.0212835,-0.0402283 -0.0273819,-0.062126 -0.025,-0.0038189 -0.0458425,-0.0232992 -0.0489173,-0.0491496l-0.000204724 -0.00172047c-0.00316535,-0.0265906 0.0135945,-0.050685 0.0380354,-0.0593071 0.000255906,-0.00401181 0.000543307,-0.00802362 0.000535433,-0.0120276 -0.000456693,-0.236291 0.300602,-0.246744 0.301563,0.00239764 1.1811e-005,0.0032126 0.000204724,0.0064252 0.000393701,0.0096378 0.0244291,0.00862598 0.041185,0.0327165 0.0380197,0.0592992l-0.000204724 0.00172047c-0.0030748,0.0258504 -0.0239173,0.0453307 -0.0489173,0.0491496 -0.00610236,0.0218976 -0.0149764,0.0430236 -0.0273858,0.062122 -0.00891339,0.0137205 -0.0197717,0.0263268 -0.0323504,0.0368346 0.068937,0.0154252 0.122169,0.0750472 0.122169,0.147587l0 0.0646929z"
      fill={borderColor1}
    />
  );
}
