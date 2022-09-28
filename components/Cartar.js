import PropTypes from "prop-types";
import React from "react";
import { Image } from "react-native";
import useCartar from "../hooks/cartar";

export default function Cartar({ size, style, ...rest }) {
  const { get } = useCartar();

  const source = get({ size, ...rest });

  return (
    <Image style={[{ width: size, height: size }, style]} source={source} />
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
