import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { G, Polygon } from "react-native-svg";

export default function Earrings5({ borderColor2, color }) {
  const lightColor = changeColor(color, "#fff", 0.8);

  return (
    <G scale={(0.00001 * 66666) / 1693320}>
      <Polygon
        fill={borderColor2}
        points="1217720,844940 1217720,809510 1280900,809510 1280900,844940 1317060,844940 1317060,908120 1280900,908120 1280900,999090 1217720,999090 1217720,908120 1181580,908120 1181580,844940 "
      />
      <Polygon
        fill={lightColor}
        points="1197370,860730 1233510,860730 1233510,825300 1265110,825300 1265110,860730 1301270,860730 1301270,892330 1265110,892330 1265110,983300 1233510,983300 1233510,892330 1197370,892330 "
      />
      <Polygon
        fill={color}
        points="1233510,860730 1265110,860730 1265110,892330 1233510,892330 "
      />
      <Polygon
        fill={color}
        points="1249310,983300 1233510,983300 1233510,892330 1197370,892330 1197370,879090 1249310,879090 1249310,825300 1265110,825300 1265110,860730 1301270,860730 1301270,879090 1249310,879090 "
      />
      <Polygon
        fill={lightColor}
        points="1233510,879090 1249310,879090 1249310,860730 1265110,860730 1265110,879090 1249310,879090 1249310,892330 1233510,892330 "
      />
    </G>
  );
}
