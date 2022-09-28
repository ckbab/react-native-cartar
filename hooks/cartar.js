import { createUrl } from "@ckbab/js-utils";
import _ from "lodash";
import { useCallback } from "react";

export default function useCartar(defaultProps) {
  const get = useCallback((props) => {
    // React props are in camelCase but query string needs to be in kebab-case.
    const allProps = { ...defaultProps, ...props };
    const queryString = _.mapKeys(allProps, (v, k) => _.kebabCase(k));

    return createUrl("https://cartar.io", queryString);
  }, defaultProps);

  return { get };
}
