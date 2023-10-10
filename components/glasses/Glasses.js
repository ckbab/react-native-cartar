import React, { useMemo } from "react";

import Glasses1 from "./Glasses1";
import Glasses2 from "./Glasses2";
import Glasses3 from "./Glasses3";
import Glasses4 from "./Glasses4";
import Glasses5 from "./Glasses5";

export default function Glasses({ glassesColor1, glassesColor2, type }) {
  const components = useMemo(
    () => [Glasses1, Glasses2, Glasses3, Glasses4, Glasses5],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return (
    <Component glassesColor1={glassesColor1} glassesColor2={glassesColor2} />
  );
}
