import React, { useMemo } from "react";

import Necklace1 from "./Necklace1";
import Necklace2 from "./Necklace2";
import Necklace3 from "./Necklace3";
import Necklace4 from "./Necklace4";
import Necklace5 from "./Necklace5";
import Necklace6 from "./Necklace6";

export default function Necklace({ borderColor2, color, type }) {
  const components = useMemo(
    () => [Necklace1, Necklace2, Necklace3, Necklace4, Necklace5, Necklace6],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} color={color} />;
}
