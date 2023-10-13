import React, { useMemo } from "react";

import Hat1 from "./Hat1";
import Hat3 from "./Hat3";
import Hat4 from "./Hat4";
import Hat6 from "./Hat6";

export default function Hat({ borderColor2, color, type }) {
  const components = useMemo(() => [Hat1, null, Hat3, Hat4, null, Hat6], []);

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} color={color} />;
}
