import { changeColor, isColor } from "@ckbab/js-utils";
import PropTypes from "prop-types";
import React, { useCallback, useMemo } from "react";
import { Svg } from "react-native-svg";

import {
  defaultColor,
  defaultHairColors,
  defaultSkinColors,
  insideBorderColor,
  outsideBorderColor,
  teethColor,
  tongueColor,
} from "../constants/colors";
import Beard from "./beard/Beard";
import Border from "./border/Border";
import Crop from "./crop/Crop";
import Earrings from "./earrings/Earrings";
import Eye from "./eye/Eye";
import Hair from "./hair/Hair";
import Hat from "./hat/Hat";
import Mouth from "./mouth/Mouth";
import Necklace from "./necklace/Necklace";
import Face from "./other/Face";
import Throat from "./other/Throat";
import Shirt from "./shirt/Shirt";

export default function Cartar({
  beard,
  beardColor,
  earrings,
  earringsColor = "#f00",
  eye,
  eyeColor = "#000",
  hair,
  hairColor,
  hat,
  hatColor = "#f00",
  mouth,
  mouthColor = "#f00",
  necklace,
  necklaceColor = "#f00",
  shirt,
  shirtColor = "#ddd",
  shirtColorAlt = "#aaa",
  size = 100,
  skinColor,
  style,
}) {
  const getBeardColor = useCallback((color, skinColor) => {
    if (isColor(color)) {
      return color;
    }

    const opacity = Math.min(1, Math.max(0, 1 - color / 10));

    return changeColor(skinColor, "#000", opacity);
  }, []);

  const getDefaultColor = useCallback((color, defaultColors) => {
    if (isColor(color)) {
      return color;
    }

    if (defaultColors[color - 1]) {
      return defaultColors[color - 1];
    }

    return defaultColor;
  }, []);

  const colors = useMemo(() => {
    const hairColorToUse = getDefaultColor(hairColor, defaultHairColors);
    const skinColorToUse = getDefaultColor(skinColor, defaultSkinColors);
    const beardColorToUse = getBeardColor(beardColor, skinColorToUse);

    // Avoid colors being null or undefined.
    const shirtColorToUse = shirtColor || "#ddd";
    const shirtColorAltToUse = shirtColorAlt || "#aaa";

    return {
      beard1: changeColor(skinColorToUse, "#000", 0.9),
      beard2: beardColorToUse,
      border1: outsideBorderColor,
      border2: insideBorderColor,
      earrings: earringsColor,
      eye1: eyeColor,
      eye2: changeColor(skinColorToUse, "#fff", 0.2),
      eye3: changeColor(skinColorToUse, "#fff", 0.4),
      glass1: "rgba(255, 255, 255, 0.8)",
      glass2: "rgba(255, 255, 255, 0.6)",
      hair1: hairColorToUse,
      hair2: changeColor(hairColorToUse, "#fff", 0.9),
      hair3: changeColor(hairColorToUse, "#000", 0.9),
      hat: hatColor,
      mouth: mouthColor,
      necklace: necklaceColor,
      shirt1: shirtColorToUse,
      shirt2: changeColor(shirtColorToUse, "#000", 0.9),
      shirt3: shirtColorAltToUse,
      shirt4: changeColor(shirtColorAltToUse, "#000", 0.9),
      skin1: skinColorToUse,
      skin2: changeColor(skinColorToUse, "#000", 0.9),
      teeth1: teethColor,
      teeth2: changeColor(teethColor, "#000", 0.8),
      tongue: tongueColor,
    };
  }, [
    beardColor,
    earringsColor,
    eyeColor,
    getBeardColor,
    getDefaultColor,
    hairColor,
    hatColor,
    mouthColor,
    necklaceColor,
    shirtColor,
    shirtColorAlt,
    skinColor,
  ]);

  // Need to use clip path, i.e. cut the hair, if a hat is used.
  const clipPath = hat > 0 ? "url(#clip)" : null;

  return (
    <Svg
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 0.666661 0.666661"
      width={size}
    >
      <Crop hair={hair} hat={hat} />
      <Border
        borderColor1={colors.border1}
        clipPath={clipPath}
        earrings={earrings}
        hair={hair}
        hat={hat}
        mouth={mouth}
        necklace={necklace}
      />
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
      <Eye
        borderColor2={colors.border2}
        eyeColor1={colors.eye1}
        eyeColor2={colors.eye2}
        eyeColor3={colors.eye3}
        glassColor1={colors.glass1}
        glassColor2={colors.glass2}
        skinColor1={colors.skin1}
        skinColor2={colors.skin2}
        type={eye}
      />
      <Hair
        borderColor2={colors.border2}
        clipPath={clipPath}
        hairColor1={colors.hair1}
        hairColor2={colors.hair2}
        hairColor3={colors.hair3}
        type={hair}
      />
      <Beard
        beardColor1={colors.beard1}
        beardColor2={colors.beard2}
        type={beard}
      />
      <Mouth
        mouthColor={colors.mouth}
        teethColor1={colors.teeth1}
        teethColor2={colors.teeth2}
        tongueColor={colors.tongue}
        type={mouth}
      />
      <Hat borderColor2={colors.border2} color={colors.hat} type={hat} />
      <Earrings
        borderColor2={colors.border2}
        color={colors.earrings}
        type={earrings}
      />
      <Necklace
        borderColor2={colors.border2}
        color={colors.necklace}
        type={necklace}
      />
    </Svg>
  );
}

const checkLimit = (max, allowColor) => (props, propName, componentName) => {
  const value = props[propName];
  if (
    value &&
    (isNaN(value) || value < 0 || value > max) &&
    !(allowColor && isColor(value))
  ) {
    return new Error(
      `Prop '${propName}' supplied to '${componentName}' needs to be between 0 and ${max}, got '${value}'.`,
    );
  }
};

const checkColor = (props, propName, componentName) => {
  const value = props[propName];
  if (value && !isColor(value)) {
    return new Error(
      `Prop '${propName}' supplied to '${componentName}' needs to a HEX color, got '${value}'.`,
    );
  }
};

Cartar.propTypes = {
  beard: checkLimit(10),
  beardColor: checkLimit(10, true),
  earrings: checkLimit(7),
  earringsColor: checkColor,
  eye: checkLimit(18),
  eyeColor: checkColor,
  hair: checkLimit(32),
  hairColor: checkLimit(10, true),
  hat: checkLimit(7),
  hatColor: checkColor,
  mouth: checkLimit(15),
  mouthColor: checkColor,
  necklace: checkLimit(6),
  necklaceColor: checkColor,
  shirt: checkLimit(19),
  shirtColor: checkColor,
  shirtColorAlt: checkColor,
  size: PropTypes.number,
  skinColor: checkLimit(8, true),
  style: PropTypes.any,
};
