import { changeColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";
import { Svg } from "react-native-svg";

import Beard from "./beard/Beard";
import Border from "./border/Border";
import Eye from "./eye/Eye";
import Hair from "./hair/Hair";
import Mouth from "./mouth/Mouth";
import Face from "./other/Face";
import Throat from "./other/Throat";
import Shirt from "./shirt/Shirt";

export default function Cartar({
  beard,
  beardColor,
  eye,
  hair,
  hairColor,
  mouth,
  shirt,
  shirtColor,
  shirtColorAlt,
  size,
  skinColor,
  style,
}) {
  const getBeardColor = useCallback(
    (color, skinColor) => {
      if (isColor(color)) {
        return color;
      }

      return changeColor(skinColor, "#000", 1 - color / 10);
    },
    [isColor]
  );

  const getDefaultColor = useCallback(
    (color, defaultColors) => {
      if (isColor(color)) {
        return color;
      }

      if (defaultColors[color]) {
        return "#" + defaultColors[color];
      }

      return "#" + defaultColors[0];
    },
    [isColor]
  );

  const isColor = useCallback((color) => /^#?[a-f0-9]{6}$/i.test(color), []);

  const defaultHairColors = useMemo(
    () => [
      "f2e7c7",
      "f2e1ae",
      "f2da91",
      "debe99",
      "aa8866",
      "6d4730",
      "4d2d1a",
      "2d170e",
      "121821",
      "b06500",
    ],
    []
  );

  const defaultSkinColors = useMemo(
    () => [
      "fefefe",
      "ffdbac",
      "f1c27d",
      "e0ac69",
      "c68642",
      "8d5524",
      "83572e",
      "624125",
      "422d1b",
    ],
    []
  );

  const colors = useMemo(() => {
    const hairColorToUse = getDefaultColor(hairColor, defaultHairColors);
    const skinColorToUse = getDefaultColor(skinColor, defaultSkinColors);
    const beardColorToUse = getBeardColor(beardColor, skinColorToUse);

    const tongueColor = "#f06288";

    return {
      beard1: changeColor(skinColorToUse, "#000", 0.9),
      beard2: beardColorToUse,
      border1: "#fefefe",
      border2: "#000000",
      eye1: changeColor(skinColorToUse, "#000", 0.3),
      eye2: changeColor(skinColorToUse, "#000", 0.2),
      hair1: hairColorToUse,
      hair2: changeColor(hairColorToUse, "#fff", 0.9),
      hair3: changeColor(hairColorToUse, "#000", 0.9),
      mouth: changeColor(skinColorToUse, "#000", 0.6),
      shirt1: shirtColor,
      shirt2: changeColor(shirtColor, "#000", 0.9),
      shirt3: shirtColorAlt,
      shirt4: changeColor(shirtColorAlt, "#000", 0.9),
      skin1: skinColorToUse,
      skin2: changeColor(skinColorToUse, "#000", 0.9),
      teeth: "#fefefe",
      tongue1: tongueColor,
      tongue2: changeColor(tongueColor, "#000", 0.8),
      tongue3: changeColor(tongueColor, "#fff", 0.8),
    };
  }, [
    beardColor,
    defaultHairColors,
    defaultSkinColors,
    getBeardColor,
    getDefaultColor,
    hairColor,
    shirtColor,
    shirtColorAlt,
    skinColor,
  ]);

  return (
    <Svg
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 0.666661 0.666661"
      width={size}
    >
      <Border borderColor1={colors.border1} type={hair} />
      <Shirt
        borderColor2={colors.border2}
        shirtColor1={colors.shirt1}
        shirtColor2={colors.shirt2}
        shirtColor3={colors.shirt3}
        shirtColor4={colors.shirt4}
        type={shirt}
      />
      <Throat
        borderColor2={colors.border2}
        skinColor1={colors.skin1}
        skinColor2={colors.skin2}
      />
      <Face
        borderColor2={colors.border2}
        skinColor1={colors.skin1}
        skinColor2={colors.skin2}
      />
      <Hair
        borderColor2={colors.border2}
        hairColor1={colors.hair1}
        hairColor2={colors.hair2}
        hairColor3={colors.hair3}
        type={hair}
      />
      <Eye eyeColor1={colors.eye1} eyeColor2={colors.eye2} type={eye} />
      <Beard
        beardColor1={colors.beard1}
        beardColor2={colors.beard2}
        type={beard}
      />
      <Mouth
        mouthColor={colors.mouth}
        teethColor={colors.teeth}
        tongueColor1={colors.tongue1}
        tongueColor2={colors.tongue2}
        tongueColor3={colors.tongue3}
        type={mouth}
      />
    </Svg>
  );
}

Cartar.propTypes = {
  beard: PropTypes.number,
  beardColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  eye: PropTypes.number,
  hair: PropTypes.number,
  hairColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mouth: PropTypes.number,
  shirt: PropTypes.number,
  shirtColor: PropTypes.string,
  shirtColorAlt: PropTypes.string,
  size: PropTypes.number,
  skinColor: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.any,
};

Cartar.defaultProps = {
  beard: 0,
  beardColor: "",
  eye: 0,
  hair: 0,
  hairColor: "",
  mouth: 0,
  shirt: 1,
  shirtColor: "",
  shirtColorAlt: "",
  size: 100,
  skinColor: "",
  style: {},
};
