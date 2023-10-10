import React from "react";
import { Path, Polygon } from "react-native-svg";

export default function Shirt9({
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
        d="M0.514213 0.640043l0 -0.0380748c0,-0.0074685 -0.000641732,-0.0147913 -0.0018622,-0.0219252l-0.358039 0c-0.00122047,0.00713386 -0.0018622,0.0144567 -0.0018622,0.0219252l0 0.0380748 0.361764 0z"
        fill={shirtColor3}
      />
      <Polygon
        fill={shirtColor3}
        points="0.295,0.666661 0.371665,0.666661 0.371665,0.471346 0.295,0.471346 "
      />
      <Path
        d="M0.466346 0.501102c-0.0225709,-0.0185709 -0.0514213,-0.0297559 -0.0827559,-0.0297559l-0.10052 0c-0.0313346,0 -0.060185,0.011185 -0.0827559,0.0297559 0.0247402,0.0448898 0.0750197,0.0756102 0.133016,0.0756102 0.0579961,0 0.108276,-0.0307205 0.133016,-0.0756102z"
        fill={shirtColor2}
      />
      <Path
        d="M0.371665 0.471346l-0.0766654 0 0 0.100748c0.0122323,0.00301181 0.0250787,0.00461811 0.0383307,0.00461811 0.013252,0 0.0260984,-0.00161024 0.0383346,-0.00462205l0 -0.100744z"
        fill={shirtColor4}
      />
    </>
  );
}