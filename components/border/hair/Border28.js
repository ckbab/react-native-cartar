import React from "react";
import { Path } from "react-native-svg";

export default function Border28({ borderColor1, clipPath }) {
  return (
    <Path
      clipPath={clipPath}
      clipRule="evenodd"
      d="M0.4691 0.0801 c0.0242 0.0264 0.0363 0.062 0.0463 0.0957 c0.0145 0.0489 0.0268 0.0983 0.0428 0.1467 c0.0111 0.0334 0.0123 0.0669 0.0061 0.1014 l-0.0016 0.009 l-0.0078 0.0047 c-0.0279 0.0167 -0.0582 0.0294 -0.0894 0.0386 c0.0424 0.0274 0.0701 0.0739 0.0701 0.1258 l0 0.0647 l-0.4045 0 l0 -0.0647 c0 -0.0519 0.0275 -0.0982 0.0699 -0.1257 c-0.0314 -0.0092 -0.0619 -0.022 -0.0899 -0.0387 l-0.0078 -0.0047 l-0.0016 -0.009 c-0.0062 -0.0345 -0.005 -0.068 0.0061 -0.1014 c0.016 -0.0484 0.0284 -0.0979 0.0428 -0.1467 c0.01 -0.0337 0.0221 -0.0693 0.0463 -0.0957 c0.0074 -0.008 0.0157 -0.015 0.0248 -0.021 c0.0251 -0.0164 0.0542 -0.0235 0.084 -0.0189 c0.0087 0.0013 0.0188 0.0041 0.0274 0.0076 c0.0086 -0.0036 0.0184 -0.0062 0.0273 -0.0076 c0.0298 -0.0046 0.0588 0.0024 0.084 0.0189 c0.0091 0.006 0.0174 0.013 0.0248 0.021 z m-0.2087 0.3762 c-0.0099 -0.0074 -0.0187 -0.0161 -0.0265 -0.0257 c0.0023 0.0085 0.0054 0.0168 0.0094 0.0247 l0.0022 0.0044 c0.0049 -0.0014 0.0099 -0.0025 0.0149 -0.0034 z m0.1717 -0.0257 c-0.0078 0.0095 -0.0166 0.0182 -0.0264 0.0256 c0.005 0.0009 0.01 0.002 0.0149 0.0034 l0.0021 -0.0042 c0.004 -0.008 0.0071 -0.0163 0.0094 -0.0248 z"
      fill={borderColor1}
    />
  );
}
