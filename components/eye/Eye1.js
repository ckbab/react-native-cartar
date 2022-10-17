import React from "react";
import { Path } from "react-native-svg";

export default function Eye1({ eyeColor1, eyeColor2 }) {
  return (
    <>
      <Path
        d="M0.293311 0.242693l3.93701e-006 0c0.0115748,0 0.0210433,0.0094685 0.0210433,0.0210433l0 0.0334331c0,0.0115748 -0.0094685,0.0210433 -0.0210433,0.0210433l-3.93701e-006 0c-0.0115748,0 -0.0210433,-0.0094685 -0.0210433,-0.0210433l0 -0.0334331c0,-0.0115748 0.0094685,-0.0210433 0.0210433,-0.0210433z"
        fill={eyeColor1}
      />
      <Path
        d="M0.372661 0.242693l3.93701e-006 0c0.0115748,0 0.0210433,0.0094685 0.0210433,0.0210433l0 0.0334331c0,0.0115748 -0.0094685,0.0210433 -0.0210433,0.0210433l-3.93701e-006 0c-0.0115748,0 -0.0210433,-0.0094685 -0.0210433,-0.0210433l0 -0.0334331c0,-0.0115748 0.0094685,-0.0210433 0.0210433,-0.0210433z"
        fill={eyeColor1}
      />
      <Path
        d="M0.284425 0.205642c0.0395512,-0.0036063 0.0438386,0.0336024 0.0287874,0.0278071 -0.00891339,-0.00343307 -0.0130906,-0.0171654 -0.0305315,-0.0133228 -0.0174449,0.00383858 -0.0209646,0.0163228 -0.0209646,0.0163228 -0.0167677,0.00858268 -0.0109055,-0.0277441 0.0227087,-0.0308071z"
        fill={eyeColor2}
      />
      <Path
        d="M0.381547 0.205642c-0.0395512,-0.0036063 -0.0438346,0.0336024 -0.0287874,0.0278071 0.00891339,-0.00343307 0.0130945,-0.0171654 0.0305354,-0.0133228 0.0174409,0.00383858 0.0209606,0.0163228 0.0209606,0.0163228 0.0167717,0.00858268 0.0109055,-0.0277441 -0.0227087,-0.0308071z"
        fill={eyeColor2}
      />
    </>
  );
}
