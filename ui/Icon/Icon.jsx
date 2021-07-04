
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { iconMap, iconList } from "./icons";
const Component = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  transition: fill, background-color 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const mapSize = {
  sm: 20,
  md: 24,
  lg: 36,
};
function Icon(props) {
  const [path, setPath] = useState(() => iconMap[props.name].path);
  const [viewBox, setViewBox] = useState(() => iconMap[props.name].viewBox);
  const getSize = (size) => {
    if (typeof size === "string") return mapSize[size] || 24;
    else if (typeof size === "number") return size;
    else return 24;
  };
  const getWidthAndHeight = (sizeNum) => {
    return { width: `${sizeNum}px`, height: `${sizeNum}px` };
  };
  return (
    <Component
      className="icon"
      css={{
        fill: props.color ? props.color : "currentColor",
        ...getWidthAndHeight(getSize(props.size)),
      }}
    >
      <svg
        css={getWidthAndHeight(getSize(props.size))}
        focusable="false"
        aria-hidden="true"
        viewBox={viewBox}
      >
        <path d={path}></path>
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
    let prop = props[propName];
    if (typeof prop === "string") {
      if (["sm", "md", "lg"].indexOf(prop) === -1) {
        return validateFailing(propName, componentName);
      }
    } else if (typeof prop === "number") {
      return true;
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
