import React, { useMemo } from "react";

import Border0 from "./Border0";
import Border1 from "./Border1";
import Border2 from "./Border2";
import Border3 from "./Border3";
import Border4 from "./Border4";
import Border5 from "./Border5";
import Border6 from "./Border6";
import Border7 from "./Border7";
import Border8 from "./Border8";
import Border9 from "./Border9";
import Border10 from "./Border10";
import Border11 from "./Border11";
import Border12 from "./Border12";
import Border13 from "./Border13";
import Border14 from "./Border14";
import Border15 from "./Border15";
import Border16 from "./Border16";
import Border17 from "./Border17";
import Border18 from "./Border18";
import Border19 from "./Border19";
import Border20 from "./Border20";
import Border21 from "./Border21";
import Border22 from "./Border22";
import Border23 from "./Border23";
import Border24 from "./Border24";
import Border25 from "./Border25";
import Border26 from "./Border26";
import Border27 from "./Border27";

export default function Border({ borderColor1, type }) {
  const components = useMemo(
    () => [
      Border0,
      Border1,
      Border2,
      Border3,
      Border4,
      Border5,
      Border6,
      Border7,
      Border8,
      Border9,
      Border10,
      Border11,
      Border12,
      Border13,
      Border14,
      Border15,
      Border16,
      Border17,
      Border18,
      Border19,
      Border20,
      Border21,
      Border22,
      Border23,
      Border24,
      Border25,
      Border26,
      Border27,
    ],
    []
  );

  // Note we do not use - 1 here since.
  const Component = components[type];

  if (!Component) {
    return null;
  }

  return <Component borderColor1={borderColor1} />;
}
