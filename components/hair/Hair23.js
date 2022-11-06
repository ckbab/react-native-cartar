import React from "react";
import { Path } from "react-native-svg";

export default function Hair23({
  borderColor2,
  hairColor1,
  hairColor2,
  hairColor3,
}) {
  return (
    <>
      <Path
        d="M0.333 0.1302c-0.0176 0 -0.0352 0.0027 -0.0515 0.0081l0 0c-0.0059 0.0019 -0.0116 0.0042 -0.0171 0.0069l0.0224 -0.0022l0.0462 0.041l0.0462 -0.041l0.0224 0.0022c-0.0055 -0.0026 -0.0112 -0.0049 -0.0171 -0.0069l0 0l-0.0008 -0.0003l-0.0002 -0.0001l-0.0011 -0.0004l-0.0003 -0.0001l-0.0003 -0.0001l-0.0005 -0.0002l-0.0001 0l0 0l-0.0015 -0.0004l-0.0002 -0.0001l-0.0006 -0.0002l-0.0001 0l-0.0005 -0.0001l-0.0011 -0.0003l-0.0001 0l-0.0006 -0.0002l-0.0011 -0.0003l-0.0006 -0.0002l0 0l-0.0005 -0.0001l-0.0003 -0.0001l-0.0003 -0.0001l-0.0005 -0.0001l-0.0001 0l-0.0015 -0.0004l-0.0002 0l-0.0006 -0.0001l0 0l-0.0005 -0.0001l-0.0003 -0.0001l-0.0003 -0.0001l-0.0005 -0.0001l-0.0001 0l-0.0006 -0.0001l-0.0011 -0.0002l-0.0006 -0.0001l0 0l-0.0006 -0.0001c-0.011 -0.0022 -0.0224 -0.0034 -0.0337 -0.0034z"
        fill={hairColor3}
      />
      <Path
        d="M0.3405 0.044c0.0155 0.0178 0.0352 0.0644 0.0362 0.0919l-0.001 -0.0003l-0.0006 -0.0002l0 0l-0.0005 -0.0001l-0.0003 -0.0001l-0.0003 -0.0001l-0.0005 -0.0001l-0.0001 0l-0.0015 -0.0004l-0.0002 0l-0.0006 -0.0001l0 0l-0.0005 -0.0001l-0.0003 -0.0001l-0.0003 -0.0001l-0.0005 -0.0001l-0.0001 0l-0.0006 -0.0001l-0.0011 -0.0002l-0.0006 -0.0001l0 0l-0.0006 -0.0001c-0.011 -0.0022 -0.0224 -0.0034 -0.0337 -0.0034c-0.0148 0 -0.0297 0.0019 -0.0437 0.0057c0.001 -0.0275 0.0207 -0.0741 0.0362 -0.0919l0.0075 -0.0087l0.0075 0.0087z"
        fill={borderColor2}
      />
      <Path
        d="M0.333 0.0506c-0.0105 0.0121 -0.0366 0.0637 -0.0336 0.0911l0.0336 0.0422l0.0336 -0.0422c0.003 -0.0274 -0.0231 -0.079 -0.0336 -0.0911z"
        fill={hairColor1}
      />
      <Path
        d="M0.333 0.0839c-0.0026 0.0091 -0.009 0.0478 -0.0083 0.0684l0.0083 0.0317l0.0083 -0.0317c0.0008 -0.0206 -0.0057 -0.0593 -0.0083 -0.0684z"
        fill={hairColor2}
      />
    </>
  );
}
