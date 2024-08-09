import React from "react";
import { G, Path } from "react-native-svg";

export default function Shirt20({
  borderColor2,
  shirtColor1,
  shirtColor2,
  shirtColor3,
}) {
  return (
    <G scale="0.00000393699">
      <Path
        d="M133496 169332l-97660 0 0 -16432c0,-19774 16878,-35943 37519,-35943l22622 0c20641,0 37519,16169 37519,35943l0 16432z"
        fill={borderColor2}
      />
      <Path
        d="M38722 169332l91888 0 0 -16432c0,-18248 -14930,-33178 -33178,-33178l-25532 0c-18248,0 -33178,14930 -33178,33178l0 16432z"
        fill={shirtColor1}
      />
      <Path
        d="M130610 163417l0 -10517c0,-2193 -218,-4338 -629,-6415l-90630 0c-411,2077 -629,4222 -629,6415l0 10517 91888 0z"
        fill={shirtColor3}
      />
      <Path
        d="M118452 127280c-5733,-4717 -13061,-7558 -21020,-7558l-25532 0c-7959,0 -15287,2841 -21020,7558 6284,11402 19055,19205 33786,19205 14731,0 27502,-7803 33786,-19205z"
        fill={shirtColor2}
      />
    </G>
  );
}
