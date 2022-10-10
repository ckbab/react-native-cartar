import PropTypes from "prop-types";
import { Image } from "react-native";

import useCartar from "../hooks/cartar";
import Placeholder from "../images/placeholder.png";

export default function Cartar({ size, style, ...rest }) {
  const { get } = useCartar();

  // Fetch bigger images to get good quality. Fetch either 800px or 1200px to
  // avoid new images being fetched when user changing component's size prop.
  const fetchSize = size <= 300 ? 600 : 1200;

  const uri = get({ size: fetchSize, ...rest });

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
