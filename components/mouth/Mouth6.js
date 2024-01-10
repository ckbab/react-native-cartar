import React from "react";
import { G, Path } from "react-native-svg";

export default function Mouth6({ borderColor2, teethColor1, teethColor2 }) {
  return (
    <G scale="0.00001" translateY={0.01}>
      <Path
        d="M38329 34215c894,-605 1479,507 1565,1257 97,843 -42,1674 -594,2339 -2290,2754 -9589,616 -12494,-854 1351,-107 8570,-1015 11524,-2743z"
        fill={borderColor2}
      />
      <Path
        d="M28722 37208c0,0 1014,-83 2430,-300 3109,553 6253,163 8009,-161 -1011,3112 -8400,1106 -10440,461zm3431 -464c776,-137 1616,-309 2446,-522 2881,-739 4074,-1456 4074,-1456 376,-310 557,579 579,781 18,153 27,299 26,437 -2141,651 -4799,796 -7125,759z"
        fill={teethColor2}
      />
      <Path
        d="M28722 37208c0,0 1014,-83 2430,-300 2672,475 5371,254 7192,-24 -454,669 -1312,1213 -2410,1547 -2589,110 -5940,-821 -7212,-1224zm9750 -2334c155,302 235,619 228,944 -3,114 -16,226 -39,337 -2021,506 -4401,623 -6509,589 776,-137 1616,-309 2446,-522 2210,-566 3426,-1120 3873,-1348z"
        fill={teethColor1}
      />
      <Path
        d="M28254 35928l-1274 2250c0,0 -1050,-1551 1274,-2250z"
        fill={borderColor2}
      />
    </G>
  );
}
