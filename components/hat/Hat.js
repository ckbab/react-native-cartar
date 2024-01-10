import React, { useMemo } from "react";

import Hat1 from "./Hat1";
import Hat2 from "./Hat2";
import Hat3 from "./Hat3";
import Hat4 from "./Hat4";
import Hat5 from "./Hat5";
import Hat6 from "./Hat6";
import Hat7 from "./Hat7";

export default function Hat({ borderColor2, color, type }) {
  const components = useMemo(
    () => [Hat1, Hat2, Hat3, Hat4, Hat5, Hat6, Hat7],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return <Component borderColor2={borderColor2} color={color} />;
}
