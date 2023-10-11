import React, { useMemo } from "react";

import Necklace1 from "./Necklace1";
import Necklace2 from "./Necklace2";
import Necklace3 from "./Necklace3";

export default function Necklace({ borderColor2, color, type }) {
  const components = useMemo(() => [Necklace1, Necklace2, Necklace3], []);

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} color={color} />;
}
