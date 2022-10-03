import PropTypes from "prop-types";
import { Image } from "react-native";

import useCartar from "../hooks/cartar";
import Placeholder from "../images/placeholder.png";

export default function Cartar({ size, style, ...rest }) {
  const { get } = useCartar();

  // Fetch twice as big to get good quality.
  const uri = get({ size: size * 2, ...rest });

  return (
    <Image
      defaultSource={Placeholder}
      source={{ uri }}
      style={[{ height: size, width: size }, style]}
    />
  );
}

Cartar.propTypes = {
  beard: PropTypes.number,
  beardColor: PropTypes.string,
  eye: PropTypes.number,
  hair: PropTypes.number,
  hairColor: PropTypes.string,
  mouth: PropTypes.number,
  shirt: PropTypes.number,
  shirtColor: PropTypes.string,
  shirtColorAlt: PropTypes.string,
  size: PropTypes.number,
  skinColor: PropTypes.string,
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
  size: 400,
  skinColor: "",
  style: {},
};
