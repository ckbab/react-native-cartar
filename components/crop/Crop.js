import React, { useMemo } from "react";
import { ClipPath, Defs } from "react-native-svg";

import Crop1 from "./Crop1";

export default function Crop({ hat }) {
  const components = useMemo(() => [Crop1], []);

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
