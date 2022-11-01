import React from "react";
import { Path } from "react-native-svg";

export default function Hair23({ borderColor2, hairColor1, hairColor3 }) {
  return (
    <>
      <Path
        d="M0.333 0.1302 c-0.0176 0 -0.0352 0.0027 -0.0515 0.008 l0 0 c-0.0059 0.0019 -0.0116 0.0042 -0.0171 0.0069 l0.0224 -0.0022 l0.0462 0.041 l0.0462 -0.041 l0.0224 0.0022 c-0.0055 -0.0026 -0.0112 -0.0049 -0.0171 -0.0069 l0 0 l-0.0008 -0.0002 l-0.0002 -0.0001 l-0.0011 -0.0003 l-0.0003 -0.0001 l-0.0003 -0.0001 l-0.0005 -0.0002 l-0.0001 0 l0 0 l-0.0015 -0.0004 l-0.0002 0 l-0.0006 -0.0002 l-0.0001 0 l-0.0005 -0.0001 l-0.0011 -0.0003 l-0.0001 0 l-0.0006 -0.0002 l-0.0011 -0.0003 l-0.0006 -0.0001 l0 0 l-0.0005 -0.0001 l-0.0003 -0.0001 l-0.0003 -0.0001 l-0.0005 -0.0001 l-0.0001 0 l-0.0015 -0.0004 l-0.0002 0 l-0.0006 -0.0001 l0 0 l-0.0005 -0.0001 l-0.0003 -0.0001 l-0.0003 -0.0001 l-0.0005 -0.0001 l-0.0001 0 l-0.0006 -0.0001 l-0.0011 -0.0002 l-0.0006 -0.0001 l0 0 l-0.0005 -0.0001 c-0.011 -0.0022 -0.0224 -0.0034 -0.0337 -0.0034 z"
        fill={hairColor3}
      />
      <Path
        d="M0.333 0.0506 c-0.0105 0.0121 -0.0366 0.0637 -0.0336 0.0911 l0.0336 0.0422 l0.0336 -0.0422 c0.003 -0.0274 -0.023 -0.079 -0.0336 -0.0911 z"
        fill={borderColor2}
      />
      <Path
        d="M0.333 0.0839 c-0.0026 0.0091 -0.009 0.0478 -0.0083 0.0683 l0.0083 0.0317 l0.0083 -0.0317 c0.0007 -0.0206 -0.0057 -0.0593 -0.0083 -0.0683 z"
        fill={hairColor1}
      />
    </>
  );
}
