import React from "react";
import { G, Path } from "react-native-svg";

export default function Hair2({
  borderColor2,
  clipPath,
  hairColor1,
  hairColor2,
  hairColor3,
}) {
  return (
    <G clipPath={clipPath} clipRule="evenodd">
      <Path
        d="M0.202547 0.232921c-0.000240157,0.00348819 -0.000393701,0.0068937 -0.000555118,0.0103031l0.0265827 -0.0226811 0.00488583 -0.0384213c0.0434173,-0.0382559 0.15737,-0.0385787 0.199055,0l0.00488583 0.0384213 0.0265787 0.0226772c-0.000161417,-0.00340945 -0.000314961,-0.00681102 -0.000555118,-0.0102992 -0.00949213,-0.136996 -0.25139,-0.136996 -0.260878,0z"
        fill={hairColor3}
      />
      <Path
        d="M0.192417 0.242406l0.0361575 -0.0308504 0.00488583 -0.0384213c0.0434173,-0.0382559 0.15737,-0.0385787 0.199055,0l0.00488583 0.0384213 0.0361575 0.0308504c0.00885433,-0.089122 -0.0391299,-0.133882 -0.094874,-0.157681l-0.0457795 -0.0218543 -0.0456142 0.0218543c-0.0557441,0.0237992 -0.103728,0.0685591 -0.094874,0.157681z"
        fill={borderColor2}
      />
      <Path
        d="M0.202488 0.233811l0.0260827 -0.0222559 0.00488583 -0.0384252c0.0387362,-0.034126 0.161866,-0.0344094 0.199055,3.93701e-006l0.00488976 0.0384173 0.0260787 0.0222598c0.00790157,-0.0795079 -0.0399961,-0.120528 -0.0897244,-0.14176l-0.0408425 -0.0194961 -0.0406929 0.0194961c-0.0497283,0.0212323 -0.0956811,0.0596535 -0.0897323,0.14176z"
        fill={hairColor1}
      />
      <Path
        d="M0.244476 0.150693c0,0 0.033189,-0.0431417 0.0909528,-0.0418583 0.0577638,0.00127953 0.0860669,0.0424016 0.0860669,0.0424016 0,0 -0.0695709,-0.0594961 -0.17702,-0.000543307z"
        fill={hairColor2}
      />
    </G>
  );
}
