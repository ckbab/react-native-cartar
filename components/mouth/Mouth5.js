import { changeColor } from "@ckbab/js-utils";
import React from "react";
import { G, Path } from "react-native-svg";

export default function Mouth5({
  borderColor2,
  teethColor1,
  teethColor2,
  tongueColor,
}) {
  const darkTongueColor = changeColor(tongueColor, "#000", 0.8);

  return (
    <G scale="0.00001">
      <Path
        d="M33658 34060c-2296,-115 -4504,756 -5593,2876 -3428,6677 14152,6694 10472,-8 -994,-1811 -2853,-2766 -4879,-2868z"
        fill={borderColor2}
      />
      <Path
        d="M30115 39855c1329,1643 5176,1743 6463,44 -691,-890 -1888,-1478 -3249,-1478 -1338,0 -2519,569 -3215,1434z"
        fill={darkTongueColor}
      />
      <Path
        d="M35612 39044c-641,-392 -1430,-624 -2283,-624 -837,0 -1613,222 -2246,601 -4,32 -7,65 -7,98 0,688 1017,1245 2270,1245 1254,0 2270,-557 2270,-1245 0,-25 -2,-50 -4,-75z"
        fill={tongueColor}
      />
      <Path
        d="M33612 34872c-1710,-86 -3387,457 -4388,1826 1071,416 2513,671 4100,671 1564,0 2987,-248 4053,-653 -891,-1163 -2278,-1769 -3765,-1844z"
        fill={teethColor2}
      />
      <Path
        d="M30057 36969c939,253 2061,400 3267,400 1184,0 2288,-142 3217,-387 9,-54 15,-109 15,-165 0,-953 -1457,-1726 -3256,-1726 -1798,0 -3256,772 -3256,1726 0,51 4,101 13,152z"
        fill={teethColor1}
      />
    </G>
  );
}
