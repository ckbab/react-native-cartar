import React from "react";
import { G, Polygon } from "react-native-svg";

export default function Border5({ borderColor1 }) {
  return (
    <G scale={(0.00001 * 66666) / 169332}>
      <Polygon
        fill={borderColor1}
        points="119656,82378 119656,78835 130206,78835 130206,82378 133822,82378 133822,92928 130206,92928 130206,102025 119656,102025 119656,92928 116042,92928 116042,82378"
      />
    </G>
  );
}
