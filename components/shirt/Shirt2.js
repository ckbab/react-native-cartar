import React from "react";
import { Path, Polygon } from "react-native-svg";

export default function Shirt2({
  borderColor2,
  shirtColor1,
  shirtColor2,
  shirtColor3,
  shirtColor4,
}) {
  return (
    <>
      <Path
        d="M0.525575 0.666661l-0.384488 0 0 -0.0646929c0,-0.0778504 0.0664488,-0.141508 0.147713,-0.141508l0.089063 0c0.0812638,0 0.147713,0.0636575 0.147713,0.141508l0 0.0646929z"
        fill={borderColor2}
      />
      <Path
        d="M0.152449 0.666661l0.361764 0 0 -0.0646929c0,-0.0718425 -0.0587795,-0.130622 -0.130622,-0.130622l-0.10052 0c-0.0718425,0 -0.130622,0.0587795 -0.130622,0.130622l0 0.0646929z"
        fill={shirtColor1}
      />
      <Path
        d="M0.41763 0.666661l0.0580591 0 0 -0.157094c-0.0158937,-0.0158425 -0.0358268,-0.0276417 -0.0580591,-0.033685l0 0.19078z"
        fill={shirtColor3}
      />
      <Polygon
        fill={shirtColor3}
        points="0.304299,0.666661 0.362358,0.666661 0.362358,0.471346 0.304299,0.471346 "
      />
      <Path
        d="M0.190969 0.666661l0.0580591 0 0 -0.190776c-0.0222362,0.00604331 -0.0421614,0.0178425 -0.0580591,0.033685l0 0.157091z"
        fill={shirtColor3}
      />
      <Path
        d="M0.466346 0.501102c-0.0225709,-0.0185709 -0.0514213,-0.0297559 -0.0827559,-0.0297559l-0.10052 0c-0.0313346,0 -0.060185,0.011185 -0.0827559,0.0297559 0.0247402,0.0448898 0.0750197,0.0756102 0.133016,0.0756102 0.0579961,0 0.108276,-0.0307205 0.133016,-0.0756102z"
        fill={shirtColor2}
      />
      <Path
        d="M0.466346 0.501102c-0.0140984,-0.0115984 -0.0306457,-0.0203189 -0.0487165,-0.0252283l0 0.076626c0.0204961,-0.0130472 0.0373189,-0.0307165 0.0487165,-0.0513976z"
        fill={shirtColor4}
      />
      <Path
        d="M0.362358 0.471346l-0.0580591 0 0 0.102744c0.00938976,0.00172047 0.0190984,0.00262205 0.0290315,0.00262205 0.00993307,0 0.0196378,-0.000901575 0.0290276,-0.00261811l0 -0.102748z"
        fill={shirtColor4}
      />
      <Path
        d="M0.249028 0.475878c-0.0180709,0.00491339 -0.0346142,0.013626 -0.0487126,0.0252244 0.0113976,0.0206811 0.0282165,0.0383504 0.0487126,0.0513976l0 -0.076622z"
        fill={shirtColor4}
      />
    </>
  );
}
