import React from "react";
import { Rect } from "react-native-svg";

export default function Eye2({ eyeColor1, eyeColor2 }) {
  return (
    <>
      <Rect
        fill={eyeColor1}
        height="0.0755202"
        rx="0.11735"
        ry="0.11735"
        width="0.0420891"
        x="0.272268"
        y="0.242692"
      />
      <Rect
        fill={eyeColor1}
        height="0.0755202"
        rx="0.11735"
        ry="0.11735"
        width="0.0420891"
        x="0.351617"
        y="0.242692"
      />
      <Rect
        fill={eyeColor2}
        height="0.0235433"
        width="0.06794"
        x="0.256406"
        y="0.226933"
      />
      <Rect
        fill={eyeColor2}
        height="0.0235433"
        width="0.06794"
        x="0.34163"
        y="0.226933"
      />
    </>
  );
}
