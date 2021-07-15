import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
import * as React from "react";
import PropTypes from "prop-types";
import { iconMap, iconList } from "./icons";
const Component = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  transition: fill, background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const SizeMap = {
  sm: 20,
  md: 24,
  lg: 36,
};
function Icon(props) {
  const computedClasses = React.useMemo(() => clsx("icon"), []);
  const computedPath = React.useMemo(
    () => iconMap[props.name]?.path,
    [props.name]
  );
  const computedViewBox = React.useMemo(
    () => iconMap[props.name]?.viewBox,
    [props.name]
  );
  const computedSize = React.useMemo(() => {
    if (typeof props.size === "number") return `${props.size}px`;
    else return `${SizeMap[props.size]}px` || "24px";
  }, [props.size]);

  return (
    <Component
      className={computedClasses}
      css={{
        fill: props.color ? props.color : "currentColor",
        width: computedSize,
        height: computedSize,
      }}
    >
      <svg
        css={{
          width: computedSize,
          height: computedSize,
        }}
        focusable="false"
        aria-hidden="true"
        viewBox={computedViewBox}
      >
        <path d={computedPath}></path>
      </svg>
    </Component>
  );
}

function validateFailing(propName, componentName) {
  return new Error(
    "Invalid prop `" +
      propName +
      "` supplied to" +
      " `" +
      componentName +
      "`. Validation failed."
  );
}
Icon.propTypes = {
  name: PropTypes.oneOf(iconList),
  color: PropTypes.string,
  size: function (props, propName, componentName) {
    let value = props[propName];
    if (typeof value === "string") {
      if (["sm", "md", "lg"].indexOf(value) === -1) {
        return validateFailing(propName, componentName);
      }
    } else if (typeof value === "number") {
      return;
    } else {
      return validateFailing(propName, componentName);
    }
  },
};
Icon.defaultProps = {
  name: "unknown",
  size: "md",
};
export default Icon;
