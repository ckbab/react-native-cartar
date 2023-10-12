import React, { useMemo } from "react";

import Hat1 from "./Hat1";

export default function Hat({ borderColor2, color, type }) {
  const components = useMemo(() => [Hat1], []);

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} color={color} />;
}
