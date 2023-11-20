import React, { useMemo } from "react";
import { ClipPath, Defs } from "react-native-svg";

import Crop1 from "./Crop1";
import Crop2 from "./Crop2";
import Crop3 from "./Crop3";
import Crop4 from "./Crop4";
import Crop5 from "./Crop5";
import Crop6 from "./Crop6";
import Crop7 from "./Crop7";

export default function Crop({ hat }) {
  const components = useMemo(
    () => [Crop1, Crop2, Crop3, Crop4, Crop5, Crop6, Crop7],
    [],
  );

  const Component = components[hat - 1];

  if (!Component) {
    return null;
  }

  return (
    <Defs>
      <ClipPath id="clip">
        <Component />
      </ClipPath>
    </Defs>
  );
}
