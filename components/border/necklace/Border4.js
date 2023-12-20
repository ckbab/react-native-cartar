import React from "react";
import { G, Path } from "react-native-svg";

export default function Border4({ borderColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M37448 66666l-8299 0 1771 -10322 -1029 -1143c-2285,-787 -4243,-2433 -5326,-4604 -704,-1410 -1282,-3798 94,-5011 469,-414 1065,-570 1681,-539l1239 61 28 1240c46,2032 1393,3411 3207,4096l5352 0c1792,-707 2916,-2107 2962,-4096l28 -1187 1183 -109c529,-49 1054,63 1482,388 1422,1079 900,3470 268,4835 -1028,2219 -2969,3899 -5237,4767l-1174 1304 1771 10322z"
        fill={borderColor1}
      />
    </G>
  );
}
