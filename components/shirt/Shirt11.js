import React from "react";
import { Path, Polygon } from "react-native-svg";

export default function Shirt11({
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
        d="M0.186232 0.666661l0.032689 0 0 -0.178358c-0.0122559,0.00696457 -0.0232913,0.0158504 -0.032689,0.0262441l0 0.152114z"
        fill={shirtColor3}
      />
      <Path
        d="M0.25161 0.666661l0.032685 0 0 -0.195315 -0.00122441 0c-0.0108386,0 -0.021374,0.00134646 -0.0314606,0.0038622l0 0.191453z"
        fill={shirtColor3}
      />
      <Polygon
        fill={shirtColor3}
        points="0.316984,0.666661 0.349673,0.666661 0.349673,0.471346 0.316984,0.471346 "
      />
      <Path
        d="M0.382362 0.666661l0.032685 0 0 -0.191453c-0.0100827,-0.00251575 -0.0206181,-0.0038622 -0.0314567,-0.0038622l-0.00122835 0 0 0.195315z"
        fill={shirtColor3}
      />
      <Path
        d="M0.447736 0.666661l0.032689 0 0 -0.152118c-0.00939764,-0.0103937 -0.0204331,-0.0192756 -0.032689,-0.0262402l0 0.178358z"
        fill={shirtColor3}
      />
      <Path
        d="M0.466346 0.501102c-0.0225709,-0.0185709 -0.0514213,-0.0297559 -0.0827559,-0.0297559l-0.10052 0c-0.0313346,0 -0.060185,0.011185 -0.0827559,0.0297559 0.0247402,0.0448898 0.0750197,0.0756102 0.133016,0.0756102 0.0579961,0 0.108276,-0.0307205 0.133016,-0.0756102z"
        fill={shirtColor2}
      />
      <Path
        d="M0.218921 0.488299c-0.0065748,0.00373622 -0.0127992,0.00802362 -0.0186063,0.0128031 0.00514961,0.00934252 0.0114055,0.0180669 0.0186063,0.0260315l0 -0.0388346z"
        fill={shirtColor4}
      />
      <Path
        d="M0.284295 0.471346l-0.00122441 0c-0.0108346,0 -0.021374,0.00134252 -0.0314606,0.00385827l0 0.0789016c0.0101102,0.00615354 0.0210709,0.0112008 0.032685,0.0149528l0 -0.0977126z"
        fill={shirtColor4}
      />
      <Path
        d="M0.349673 0.471346l-0.032689 0 0 0.104543c0.00537008,0.000543307 0.0108228,0.000822835 0.0163465,0.000822835 0.00552362,0 0.0109764,-0.000279528 0.0163425,-0.000822835l0 -0.104543z"
        fill={shirtColor4}
      />
      <Path
        d="M0.415047 0.475201c-0.0100827,-0.00251575 -0.020622,-0.00385433 -0.0314567,-0.00385433l-0.00122835 0 0 0.0977126c0.0116142,-0.00375197 0.0225748,-0.00879528 0.032685,-0.0149488l0 -0.0789094z"
        fill={shirtColor4}
      />
      <Path
        d="M0.466346 0.501102c-0.00580709,-0.00477953 -0.0120315,-0.00906693 -0.0186102,-0.0128031l0 0.0388386c0.00720079,-0.00796457 0.0134606,-0.0166929 0.0186102,-0.0260354z"
        fill={shirtColor4}
      />
    </>
  );
}