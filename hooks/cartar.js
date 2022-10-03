import { createUrl } from "@ckbab/js-utils";
import _ from "lodash";
import { useCallback } from "react";

export default function useCartar(defaultProps) {
  const get = useCallback(
    (props) => {
      let queryString = { ...defaultProps, ...props };

      // React props are in camelCase but query string needs to be in kebab-case.
      queryString = _.mapKeys(queryString, (v, k) => _.kebabCase(k));

      // Remove all "#" from color props.
      queryString = _.mapValues(queryString, (v) =>
        v?.toString().replace("#", "")
      );

      return createUrl("https://cartar.io", queryString);
    },
    [defaultProps]
  );

  return { get };
}
