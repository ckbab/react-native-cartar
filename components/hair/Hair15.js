import React from "react";
import { G, Path } from "react-native-svg";

export default function Hair15({
  borderColor2,
  clipPath,
  hairColor1,
  hairColor2,
  hairColor3,
}) {
  return (
    <G clipPath={clipPath} clipRule="evenodd">
      <Path
        d="M0.202547 0.232921c-0.00108661,0.0156732 -0.00129921,0.0305118 -0.000799213,0.0445945l0.031626 -0.0435472 0.000133858 -0.0559016c0,0 0.0215039,0.0158661 0.0698189,0.0218504 0.0627362,0.00777165 0.0840827,0.00135827 0.126264,-0.0274252l0.00666142 0.0567913 0.0279016 0.0487677 5.11811e-005 -9.05512e-005c0.000519685,-0.0142165 0.000318898,-0.0292008 -0.000779528,-0.0450394 -0.00949213,-0.136996 -0.25139,-0.136996 -0.260878,0z"
        fill={hairColor3}
      />
      <Path
        d="M0.488827 0.154307l0.000826772 0.00205118 -0.00520079 0.0994331 -0.00985039 0.0174094c0.000334646,-0.0138858 -5.11811e-005,-0.027622 -0.000972441,-0.0409291 -0.0103307,-0.149087 -0.270957,-0.149087 -0.281287,0 -0.000925197,0.0133504 -0.00131102,0.0271339 -0.000968504,0.0410709l-0.00987795 -0.0176142 -0.00453543 -0.104484c0.0522205,-0.153079 0.259913,-0.135965 0.311866,0.00306299z"
        fill={borderColor2}
      />
      <Path
        d="M0.201531 0.27102l0.0225827 -0.0362087 0.00468898 -0.0639331c0,0 0.0264921,0.0158622 0.074811,0.0218504 0.0627402,0.00777559 0.0858189,0.00135827 0.128,-0.0274252l0.0145079 0.0634685 0.0183189 0.0420906 0.0101535 -0.0179449 0.00496063 -0.094874c0,0 -0.0234882,-0.0569803 -0.0629134,-0.0777205 -0.0843228,-0.0443622 -0.185949,-0.0397874 -0.229646,0.0716102l0.00438189 0.100984 0.0101535 0.0181024z"
        fill={hairColor1}
      />
      <Path
        d="M0.21576 0.112177l-0.0149449 0.0209882c0,0 0.0365394,0.0309528 0.109913,0.0309331 0.0620906,-1.5748e-005 0.116886,-0.036811 0.132276,-0.0481299 -0.0126417,-0.0239685 -0.039311,-0.0317756 -0.039311,-0.0317756l0 -3.93701e-006c-0.0179606,0.0155709 -0.0932756,0.0726496 -0.187933,0.0279882z"
        fill={hairColor2}
      />
    </G>
  );
}
