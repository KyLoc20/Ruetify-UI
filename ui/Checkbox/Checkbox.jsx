import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { createRipple, createRippleByAddingLayer } from "../effect/rippleable";
import { getColor } from "./color";
import { getSize } from "./size";
const CheckboxComponent = styled("div")`
  display: inline-flex;
  cursor: pointer;
  &.disabled {
    cursor: default;
  }
`;
const IconWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
const LabelWrapper = styled("div")`
  display: flex;
`;
export default function Checkbox(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(props.checked);
  const computedClasses = React.useMemo(
    () =>
      clsx(
        "checkbox",
        props.disabled && "disabled",
        props.checked && "checked"
      ),
    [props.disabled, props.checked]
  );
  const computedIcon = React.useMemo(() => {
    let icon = isChecked
      ? props.iconChecked || "checkedBox"
      : props.icon || "emptyBox";
    return icon;
  }, [isChecked, props.icon, props.iconChecked]);
  const computedIconColor = React.useMemo(() => {
    if (props.disabled) return "rgba(0, 0, 0, 0.26)";
    if (!isChecked) return props.iconDefaultColor || "rgba(0, 0, 0, 0.54)";
    else return props.iconColor || getColor(props.color, "checked");
  }, [
    isChecked,
    props.disabled,
    props.iconColor,
    props.iconDefaultColor,
    props.color,
  ]);
  const computedIconSize = React.useMemo(() => {
    return props.iconSize || getSize(props.size, "icon");
  }, [props.size, props.iconSize]);
  const computedIconWrapperSize = React.useMemo(() => {
    return getSize(props.size, "checkbox");
  }, [props.size, props.iconSize]);
  const computedIconWrapperHaloColor = React.useMemo(() => {
    if (props.disabled) return null;
    if (isHovering)
      return props.iconHoverColor || getColor(props.color, "hover");
    else return null;
  }, [isHovering, props.disabled, props.color, props.iconHoverColor]);
  const computedRippleColor = React.useMemo(() => {
    return props.rippleColor || getColor(props.color, "ripple");
  }, [props.rippleColor, props.color]);
  const handleClickIcon = (e) => {
    if (props.disabled) return;
    createRipple(e, true, computedRippleColor);
    setIsChecked((prevValue) => !prevValue);
    // props.onClick?.(e);
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
    <CheckboxComponent className={computedClasses}>
      <IconWrapper
        style={{
          height: computedIconWrapperSize,
          width: computedIconWrapperSize,
          color: computedIconColor,
          background: computedIconWrapperHaloColor,
        }}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onMouseDown={handleClickIcon}
      >
        <Icon name={computedIcon} size={computedIconSize}></Icon>
      </IconWrapper>
      <LabelWrapper></LabelWrapper>
    </CheckboxComponent>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", PropTypes.number]), //the size of checkbox, the size of icon inside is smaller than it automatically
  color: PropTypes.oneOf([
    "default",
    "primary",
    "success",
    "info",
    "warning",
    "error",
  ]), //color theme
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  labelPlacement: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  //icon custom
  icon: PropTypes.string,
  iconChecked: PropTypes.string,
  //color custom
  iconDefaultColor: PropTypes.string, //when unchecked
  iconColor: PropTypes.string, //when checked
  iconHoverColor: PropTypes.string, //halo color
  rippleColor: PropTypes.string, //halo color
  //size custom
  iconSize: PropTypes.number,
  //label custom
  renderLabel: PropTypes.func,
};
Checkbox.defaultProps = {
  color: "default",
  size: "md",
  disabled: false,
  checked: false,
};
