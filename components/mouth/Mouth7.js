import React from "react";
import { G, Path } from "react-native-svg";

export default function Mouth7({ borderColor2 }) {
  return (
    <G scale="0.00001" translateY={0.02}>
      <Path
        d="M26987 38590c3822,-2882 8652,-3946 12270,-2303 233,106 505,-257 204,-490 -3954,-2954 -9811,-1214 -12475,2793z"
        fill={borderColor2}
      />
      <Path
        d="M28750 38888c-1430,197 -2593,-404 -1661,-1457 220,774 870,1237 1661,1457z"
        fill={borderColor2}
      />
      <Path
        d="M38500 36954c1301,-330 1899,-1029 937,-1713 19,619 -324,1368 -937,1713z"
        fill={borderColor2}
      />
    </G>
  );
}
