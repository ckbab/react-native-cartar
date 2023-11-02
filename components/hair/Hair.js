import React, { useMemo } from "react";

import Hair1 from "./Hair1";
import Hair2 from "./Hair2";
import Hair3 from "./Hair3";
import Hair4 from "./Hair4";
import Hair5 from "./Hair5";
import Hair6 from "./Hair6";
import Hair7 from "./Hair7";
import Hair8 from "./Hair8";
import Hair9 from "./Hair9";
import Hair10 from "./Hair10";
import Hair11 from "./Hair11";
import Hair12 from "./Hair12";
import Hair13 from "./Hair13";
import Hair14 from "./Hair14";
import Hair15 from "./Hair15";
import Hair16 from "./Hair16";
import Hair17 from "./Hair17";
import Hair18 from "./Hair18";
import Hair19 from "./Hair19";
import Hair20 from "./Hair20";
import Hair21 from "./Hair21";
import Hair22 from "./Hair22";
import Hair23 from "./Hair23";
import Hair24 from "./Hair24";
import Hair25 from "./Hair25";
import Hair26 from "./Hair26";
import Hair27 from "./Hair27";
import Hair28 from "./Hair28";
import Hair29 from "./Hair29";
import Hair30 from "./Hair30";
import Hair31 from "./Hair31";
import Hair32 from "./Hair32";

export default function Hair({
  borderColor2,
  hairColor1,
  hairColor2,
  hairColor3,
  type,
}) {
  const components = useMemo(
    () => [
      Hair1,
      Hair2,
      Hair3,
      Hair4,
      Hair5,
      Hair6,
      Hair7,
      Hair8,
      Hair9,
      Hair10,
      Hair11,
      Hair12,
      Hair13,
      Hair14,
      Hair15,
      Hair16,
      Hair17,
      Hair18,
      Hair19,
      Hair20,
      Hair21,
      Hair22,
      Hair23,
      Hair24,
      Hair25,
      Hair26,
      Hair27,
      Hair28,
      Hair29,
      Hair30,
      Hair31,
      Hair32,
    ],
    [],
  );

  const Component = components[type - 1];

  if (!Component) {
    return null;
  }

  return (
    <Component
      borderColor2={borderColor2}
      hairColor1={hairColor1}
      hairColor2={hairColor2}
      hairColor3={hairColor3}
    />
  );
}
