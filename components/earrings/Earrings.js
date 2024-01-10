import React, { useMemo } from "react";

import Earrings1 from "./Earrings1";
import Earrings2 from "./Earrings2";
import Earrings3 from "./Earrings3";
import Earrings4 from "./Earrings4";
import Earrings5 from "./Earrings5";
import Earrings6 from "./Earrings6";
import Earrings7 from "./Earrings7";

export default function Earrings({ borderColor2, color, type }) {
  const components = useMemo(
    () => [
      Earrings1,
      Earrings2,
      Earrings3,
      Earrings4,
      Earrings5,
      Earrings6,
      Earrings7,
    ],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} color={color} />;
}
