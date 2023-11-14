import React, { useMemo } from "react";

import Eye1 from "./Eye1";
import Eye2 from "./Eye2";
import Eye3 from "./Eye3";
import Eye4 from "./Eye4";
import Eye5 from "./Eye5";
import Eye6 from "./Eye6";
import Eye7 from "./Eye7";
import Eye8 from "./Eye8";
import Eye9 from "./Eye9";
import Eye10 from "./Eye10";
import Eye11 from "./Eye11";
import Eye12 from "./Eye12";
import Eye13 from "./Eye13";

export default function Eye({
  borderColor2,
  eyeColor1,
  eyeColor2,
  eyeColor3,
  skinColor2,
  type,
}) {
  const components = useMemo(
    () => [
      Eye1,
      Eye2,
      Eye3,
      Eye4,
      Eye5,
      Eye6,
      Eye7,
      Eye8,
      Eye9,
      Eye10,
      Eye11,
      Eye12,
      Eye13,
    ],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return (
    <Component
      borderColor2={borderColor2}
      eyeColor1={eyeColor1}
      eyeColor2={eyeColor2}
      eyeColor3={eyeColor3}
      skinColor2={skinColor2}
    />
  );
}
