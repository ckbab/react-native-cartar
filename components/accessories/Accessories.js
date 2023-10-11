import React, { useMemo } from "react";

import Accessories1 from "./Accessories1";
import Accessories2 from "./Accessories2";
import Accessories3 from "./Accessories3";
import Accessories4 from "./Accessories4";
import Accessories5 from "./Accessories5";
import Accessories6 from "./Accessories6";
import Accessories7 from "./Accessories7";
import Accessories8 from "./Accessories8";

export default function Accessories({ borderColor2, type }) {
  const components = useMemo(
    () => [
      Accessories1,
      Accessories2,
      Accessories3,
      Accessories4,
      Accessories5,
      Accessories6,
      Accessories7,
      Accessories8,
    ],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} />;
}
