import React, { useMemo } from "react";

import Shirt1 from "./Shirt1";
import Shirt2 from "./Shirt2";
import Shirt3 from "./Shirt3";
import Shirt4 from "./Shirt4";
import Shirt5 from "./Shirt5";
import Shirt6 from "./Shirt6";
import Shirt7 from "./Shirt7";
import Shirt8 from "./Shirt8";
import Shirt9 from "./Shirt9";
import Shirt10 from "./Shirt10";
import Shirt11 from "./Shirt11";
import Shirt12 from "./Shirt12";

export default function Shirt({
  borderColor2,
  shirtColor1,
  shirtColor2,
  shirtColor3,
  shirtColor4,
  type,
}) {
  const components = useMemo(
    () => [
      Shirt1,
      Shirt2,
      Shirt3,
      Shirt4,
      Shirt5,
      Shirt6,
      Shirt7,
      Shirt8,
      Shirt9,
      Shirt10,
      Shirt11,
      Shirt12,
    ],
    []
  );

  // Note we use Shirt1 as default since we always want to show a shirt.
  const Component = components[type - 1] || Shirt1;

  return (
    <Component
      borderColor2={borderColor2}
      shirtColor1={shirtColor1}
      shirtColor2={shirtColor2}
      shirtColor3={shirtColor3}
      shirtColor4={shirtColor4}
    />
  );
}
