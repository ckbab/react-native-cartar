import React from "react";
import { G, Path } from "react-native-svg";

export default function Border1({ borderColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M50201 34255c226,736 331,1529 147,2265 -689,2756 -4381,2649 -5034,414 -319,-1091 44,-2617 496,-3675 537,-2600 713,-5292 650,-7943l-30 -1259 1233 256c2846,592 4911,3216 4563,6143l-20 172c-171,1440 -906,2721 -2004,3627zm-29414 -996c452,1058 815,2585 496,3675 -652,2235 -4345,2342 -5034,-414 -184,-736 -79,-1529 147,-2265 -1098,-906 -1833,-2187 -2004,-3627l-20 -172c-348,-2926 1717,-5550 4563,-6143l1233 -256 -30 1259c-63,2650 113,5342 650,7943z"
        fill={borderColor1}
      />
      <Path
        d="M51213 30509c-170,1437 -1023,2650 -2212,3376 294,688 571,1618 377,2392 -474,1894 -2772,1517 -3105,376 -350,-1198 494,-3090 494,-3090 573,-2726 757,-5556 692,-8272 2387,496 4056,2674 3774,5046l-20 172zm-32075 -5218c-65,2716 119,5546 692,8272 0,0 844,1893 494,3090 -333,1140 -2631,1518 -3105,-376 -194,-774 83,-1704 377,-2392 -1189,-726 -2041,-1939 -2212,-3376l-20 -172c-281,-2371 1387,-4549 3774,-5046z"
        fill={borderColor1}
      />
    </G>
  );
}