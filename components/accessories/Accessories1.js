import React from "react";
import { G, Path } from "react-native-svg";

export default function Accessories1({ borderColor2, color }) {
  return (
    <G scale="0.00001">
      <Path
        d="M18104 32896c0,0 -1242,1954 -885,3381 474,1894 2772,1517 3105,376 350,-1198 -494,-3090 -494,-3090 -403,-1378 -1374,-1394 -1726,-668zm635 1477c0,0 904,869 634,1922 -317,1236 -2278,-155 -634,-1922z"
        fill={color}
        stroke={borderColor2}
        strokeWidth={500}
      />
      <Path
        d="M48494 32896c0,0 1242,1954 885,3381 -474,1894 -2772,1517 -3105,376 -350,-1198 494,-3090 494,-3090 403,-1378 1374,-1394 1726,-668zm-635 1477c0,0 -904,869 -634,1922 317,1236 2278,-155 634,-1922z"
        fill={color}
        stroke={borderColor2}
        strokeWidth={500}
      />
    </G>
  );
}
