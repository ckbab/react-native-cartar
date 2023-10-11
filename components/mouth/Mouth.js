import React, { useMemo } from "react";

import Mouth1 from "./Mouth1";
import Mouth2 from "./Mouth2";
import Mouth3 from "./Mouth3";
import Mouth4 from "./Mouth4";
import Mouth5 from "./Mouth5";
import Mouth6 from "./Mouth6";
import Mouth7 from "./Mouth7";
import Mouth8 from "./Mouth8";
import Mouth9 from "./Mouth9";
import Mouth10 from "./Mouth10";
import Mouth11 from "./Mouth11";

export default function Mouth({
  mouthColor,
  teethColor,
  tongueColor1,
  tongueColor2,
  tongueColor3,
  type,
}) {
  const components = useMemo(
    () => [
      Mouth1,
      Mouth2,
      Mouth3,
      Mouth4,
      Mouth5,
      Mouth6,
      Mouth7,
      Mouth8,
      Mouth9,
      Mouth10,
      Mouth11,
    ],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return (
    <Component
      mouthColor={mouthColor}
      teethColor={teethColor}
      tongueColor1={tongueColor1}
      tongueColor2={tongueColor2}
      tongueColor3={tongueColor3}
    />
  );
}
