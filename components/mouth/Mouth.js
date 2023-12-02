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
import Mouth12 from "./Mouth12";
import Mouth13 from "./Mouth13";
import Mouth14 from "./Mouth14";
import Mouth15 from "./Mouth15";

export default function Mouth({
  mouthColor,
  teethColor1,
  teethColor2,
  tongueColor,
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
      Mouth12,
      Mouth13,
      Mouth14,
      Mouth15,
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
      teethColor1={teethColor1}
      teethColor2={teethColor2}
      tongueColor={tongueColor}
    />
  );
}
