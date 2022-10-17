import React from "react";
import { Path } from "react-native-svg";

export default function Mouth4({ mouthColor, teethColor }) {
  return (
    <>
      <Path
        d="M0.293126 0.360831l0.0813504 0c0,0.0507717 -0.0813504,0.0507874 -0.0813504,0z"
        fill={mouthColor}
      />
      <Path
        d="M0.300457 0.366122l0.066685 0c0,0.0366654 -0.066685,0.0366772 -0.066685,0z"
        fill={teethColor}
      />
    </>
  );
}
