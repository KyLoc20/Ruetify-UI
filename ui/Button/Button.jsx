import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
import { createRipple, createRippleByAddingLayer } from "../effect/rippleable";
import { getColor } from "./color";
const ButtonDefaultRemoval = styled("button")`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  user-select: none;
  background: transparent;
  box-sizing: border-box;
`;
const ButtonComponent = styled(ButtonDefaultRemoval)`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.0892857143em;
  border-radius: 4px;
  transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &.disabled {
    cursor: default;
  }
`;

export default function Button(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const computedClasses = () =>
    clsx(["btn", props.disabled && "disabled", props.variant]);
  const computedBoxShadow = () => {
    if (props.variant === "plain" && !props.disabled && !props.depressed)
      return "0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)";
    else return null;
  };
  const computedWidth = () => {
    return props.width ? `${props.width}px` : null;
  };
  const computedHeight = () => {
    return props.height ? `${props.height}px` : null;
  };
  const computedBorder = () => {
    //only for outlined
    if (props.variant === "outlined")
      if (props.disabled)
        return `1px solid ${getColor("disabled", props.variant, "border")}`;
      else
        return `1px solid ${
          isHovering
            ? props.hoverBorder ||
              getColor(props.color, props.variant, "borderFocused")
            : props.border || getColor(props.color, props.variant, "border")
        }`;
    else return null;
  };
  const computedBackgroundColor = () => {
    if (props.disabled) return getColor("disabled", props.variant, "main");
    if (isHovering)
      return (
        props.hoverBackgroundColor ||
        getColor(props.color, props.variant, "focus")
      );
    else
      return (
        props.backgroundColor || getColor(props.color, props.variant, "main")
      );
  };
  const computedContentColor = () => {
    if (props.disabled) return getColor("disabled", props.variant, "text");
    return props.contentColor || getColor(props.color, props.variant, "text");
  };
  const computedRippleColor = () => {
    return props.rippleColor || getColor(props.color, props.variant, "ripple");
  };
  const handleClick = (e) => {
    console.log("handleClick", e);
    if (props.disabled) return;
    createRippleByAddingLayer(e, false, computedRippleColor());
  };
  const handleHoverEnter = () => {
    if (props.disabled) return;
    setIsHovering(true);
  };
  const handleHoverLeave = () => {
    if (props.disabled) return;
    setIsHovering(false);
  };
  return (
    <ButtonComponent
      className={computedClasses()}
      style={{
        background: computedBackgroundColor(),
        color: computedContentColor(),
        width: computedWidth(),
        height: computedHeight(),
        boxShadow: computedBoxShadow(),
        border: computedBorder(),
      }}
      onClick={handleClick}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      {props.children}
    </ButtonComponent>
  );
}
Button.propTypes = {
  variant: PropTypes.oneOf(["plain", "text", "outlined"]).isRequired,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
  elevation: PropTypes.number,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  depressed: PropTypes.bool, //no box-shadow if true
  tile: PropTypes.bool, //no border-radius if true
  rounded: PropTypes.bool, //round edges if true
  width: PropTypes.number,
  height: PropTypes.number,
};
Button.defaultProps = {
  variant: "plain",
  size: "md",
  disabled: false,
  depressed: false,
  tile: false,
  rounded: false,
};
