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
import Accessories from "./accessories/Accessories";
import Beard from "./beard/Beard";
import Border from "./border/Border";
import Eye from "./eye/Eye";
import Glasses from "./glasses/Glasses";
import Hair from "./hair/Hair";
import Mouth from "./mouth/Mouth";
import Face from "./other/Face";
import Throat from "./other/Throat";
import Shirt from "./shirt/Shirt";

export default function Cartar({
  accessories,
  beard,
  beardColor,
  eye,
  glasses,
  glassesColor,
  hair,
  hairColor,
  mouth,
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
    const glassesColorToUse = glassesColor || "#000";

    return {
      beard1: changeColor(skinColorToUse, "#000", 0.9),
      beard2: beardColorToUse,
      border1: outsideBorderColor,
      border2: insideBorderColor,
      eye1: changeColor(skinColorToUse, "#000", 0.3),
      eye2: changeColor(skinColorToUse, "#000", 0.2),
      glasses1: glassesColorToUse,
      glasses2: changeColor(glassesColorToUse, "#fff", 0.9),
      hair1: hairColorToUse,
      hair2: changeColor(hairColorToUse, "#fff", 0.9),
      hair3: changeColor(hairColorToUse, "#000", 0.9),
      mouth: changeColor(skinColorToUse, "#000", 0.6),
      shirt1: shirtColorToUse,
      shirt2: changeColor(shirtColorToUse, "#000", 0.9),
      shirt3: shirtColorAltToUse,
      shirt4: changeColor(shirtColorAltToUse, "#000", 0.9),
      skin1: skinColorToUse,
      skin2: changeColor(skinColorToUse, "#000", 0.9),
      teeth: teethColor,
      tongue1: tongueColor,
      tongue2: changeColor(tongueColor, "#000", 0.8),
      tongue3: changeColor(tongueColor, "#fff", 0.8),
    };
  }, [
    beardColor,
    getBeardColor,
    getDefaultColor,
    glassesColor,
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
      <Eye eyeColor1={colors.eye1} eyeColor2={colors.eye2} type={eye} />
      <Hair
        borderColor2={colors.border2}
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
        teethColor={colors.teeth}
        tongueColor1={colors.tongue1}
        tongueColor2={colors.tongue2}
        tongueColor3={colors.tongue3}
        type={mouth}
      />
      <Glasses
        glassesColor1={colors.glasses1}
        glassesColor2={colors.glasses2}
        type={glasses}
      />
      {accessories?.map((item) => (
        <Accessories
          borderColor2={colors.border2}
          colors={item?.colors}
          key={item?.type}
          type={item?.type}
        />
      ))}
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
  accessories: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.arrayOf(checkColor),
      type: PropTypes.number,
    }),
  ),
  beard: checkLimit(10),
  beardColor: checkLimit(10, true),
  eye: checkLimit(10),
  glasses: checkLimit(1),
  glassesColor: checkColor,
  hair: checkLimit(28),
  hairColor: checkLimit(10, true),
  mouth: checkLimit(10),
  shirt: checkLimit(19),
  shirtColor: checkColor,
  shirtColorAlt: checkColor,
  size: PropTypes.number,
  skinColor: checkLimit(8, true),
  style: PropTypes.any,
};
