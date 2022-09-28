import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";

import useCartar from "../hooks/cartar";

export default function Cartar({ size, style, ...rest }) {
  const { get } = useCartar();

  const source = get({ size, ...rest });

  return (
    <Image source={source} style={[{ height: size, width: size }, style]} />
  );
}

Cartar.propTypes = {
  size: PropTypes.number,
  style: PropTypes.any,
};

Cartar.defaultProps = {
  size: 400,
  style: {},
};
