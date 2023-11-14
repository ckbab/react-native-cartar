import React from "react";
import { G, Path } from "react-native-svg";

export default function Eye1({
  borderColor2,
  eyeColor1,
  eyeColor2,
  eyeColor3,
  skinColor2,
}) {
  return (
    <G scale="0.00001">
      <Path
        d="M32346 22531c-246,341 -841,263 -1131,32 -772,-613 -1676,-1206 -3270,-764 -1087,301 -1528,992 -2061,1673 -541,803 -1576,139 -1054,-913 2820,-5679 9187,-2346 7516,-28z"
        fill={borderColor2}
      />
      <Path
        d="M34320 22531c246,341 841,263 1131,32 772,-613 1676,-1206 3270,-764 1087,301 1528,992 2061,1673 541,803 1576,139 1054,-913 -2820,-5679 -9187,-2346 -7516,-28z"
        fill={borderColor2}
      />
      <Path
        d="M38291 23899l0 0c4116,0 4116,8398 0,8398l0 0c-4115,0 -4115,-8398 0,-8398z"
        fill={skinColor2}
      />
      <Path
        d="M37213 23721c-4224,0 -4224,8753 0,8753 4224,0 4224,-8753 0,-8753z"
        fill={borderColor2}
      />
      <Path
        d="M37098 24285l0 0c3420,0 3420,7546 0,7546l0 0c-3420,0 -3420,-7546 0,-7546z"
        fill={eyeColor3}
      />
      <Path
        d="M36864 24628l0 0c3109,0 3109,6589 0,6589l0 0c-3109,0 -3109,-6589 0,-6589z"
        fill={eyeColor2}
      />
      <Path
        d="M36864 25183l0 0c313,0 582,98 807,267 -629,341 -509,1579 358,1579l0 0c172,0 314,-49 427,-130 267,1407 -263,3168 -1592,3168l0 0c-2213,0 -2213,-4884 0,-4884z"
        fill={eyeColor1}
      />
      <Path
        d="M28376 23899l0 0c-4116,0 -4116,8398 0,8398l0 0c4115,0 4115,-8398 0,-8398z"
        fill={skinColor2}
      />
      <Path
        d="M29454 23721c4224,0 4224,8753 0,8753 -4224,0 -4224,-8753 0,-8753z"
        fill={borderColor2}
      />
      <Path
        d="M29569 24285l0 0c-3420,0 -3420,7546 0,7546l0 0c3420,0 3420,-7546 0,-7546z"
        fill={eyeColor3}
      />
      <Path
        d="M29802 24628l0 0c-3109,0 -3109,6589 0,6589l0 0c3109,0 3109,-6589 0,-6589z"
        fill={eyeColor2}
      />
      <Path
        d="M29802 25183l0 0c-313,0 -582,98 -807,267 629,341 509,1579 -358,1579l0 0c-172,0 -314,-49 -427,-130 -267,1407 263,3168 1592,3168l0 0c2213,0 2213,-4884 0,-4884z"
        fill={eyeColor1}
      />
      <Path
        d="M36864 25148c970,0 1757,1109 1757,2477 0,1369 -787,2478 -1757,2478 -970,0 -1757,-1109 -1757,-2478 0,-1368 787,-2477 1757,-2477zm-7062 0c970,0 1757,1109 1757,2477 0,1369 -787,2478 -1757,2478 -970,0 -1757,-1109 -1757,-2478 0,-1368 787,-2477 1757,-2477z"
        fill={eyeColor1}
      />
      <Path
        d="M30217 26172c290,0 525,378 525,845 0,467 -235,845 -525,845 -290,0 -525,-378 -525,-845 0,-467 235,-845 525,-845zm6233 0c290,0 525,378 525,845 0,467 -235,845 -525,845 -290,0 -525,-378 -525,-845 0,-467 235,-845 525,-845z"
        fill="white"
      />
    </G>
  );
}
