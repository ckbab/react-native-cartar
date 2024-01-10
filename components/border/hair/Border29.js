import React from "react";
import { Path } from "react-native-svg";

export default function Border29({ borderColor1, clipPath }) {
  return (
    <Path
      clipPath={clipPath}
      clipRule="evenodd"
      d="M28978 5096c1429,-57 2953,140 4320,490 1367,-350 2891,-547 4320,-490 1748,-2660 4720,-4284 7941,-4284 5246,0 9499,4254 9499,9500 0,3002 -1409,5792 -3767,7576l2685 5146c406,777 104,1737 -673,2143 -230,119 -475,177 -717,180l541 2323c198,851 -337,1711 -1188,1909 -851,198 -1710,-337 -1908,-1187l-218 -936c-117,401 -240,798 -369,1190l-1745 5297c-880,2672 -1575,5416 -3126,7803 -891,1371 -1976,2632 -3234,3682 6893,1543 12216,7506 12216,14759l0 6469 -40448 0 0 -6469c0,-7235 5294,-13185 12161,-14747 -1264,-1053 -2354,-2318 -3249,-3695 -1552,-2389 -2246,-5134 -3127,-7807l-1743 -5293c-149,-452 -290,-911 -422,-1376l-487 2095c-198,850 -1057,1385 -1908,1187 -851,-198 -1386,-1058 -1188,-1909l541 -2323c-242,-2 -487,-60 -717,-180 -777,-405 -1079,-1365 -673,-2143l3142 -6020c-2434,-1777 -3900,-4615 -3900,-7675 0,-5246 4253,-9500 9499,-9500 3221,0 6193,1624 7941,4284z"
      fill={borderColor1}
      scale="0.00001"
    />
  );
}
