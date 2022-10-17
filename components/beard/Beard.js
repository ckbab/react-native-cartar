import React, { useMemo } from "react";

import Beard1 from "./Beard1";
import Beard2 from "./Beard2";
import Beard3 from "./Beard3";
import Beard4 from "./Beard4";
import Beard5 from "./Beard5";
import Beard6 from "./Beard6";
import Beard7 from "./Beard7";
import Beard8 from "./Beard8";
import Beard9 from "./Beard9";
import Beard10 from "./Beard10";

export default function Beard({ beardColor1, beardColor2, type }) {
  const components = useMemo(
    () => [
      null,
      Beard1,
      Beard2,
      Beard3,
      Beard4,
      Beard5,
      Beard6,
      Beard7,
      Beard8,
      Beard9,
      Beard10,
    ],
    []
  );

  const Component = components[type];

  if (!Component) {
    return null;
  }

  return <Component beardColor1={beardColor1} beardColor2={beardColor2} />;
}
