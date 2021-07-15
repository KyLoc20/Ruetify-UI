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
  align-items: center;
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
  font-size: 16px;
  line-height: 20px;
  user-select: none;
  justify-content: center;
  align-items: center;
`;
const FlexDirectionMap = {
  left: "row-reverse",
  right: "row",
  top: "column-reverse",
  bottom: "column",
};
export default function Checkbox(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(props.checked);
  React.useEffect(() => {
    props.onChange?.({ value: isChecked });
  }, [isChecked]);
  const computedClasses = React.useMemo(
    () =>
      clsx(
        "checkbox",
        props.disabled && "disabled",
        props.checked && "checked",
        `label-${props.labelPlacement}`
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
  const computedLabelTextColor = React.useMemo(() => {
    return props.disabled ? "rgba(0, 0, 0, 0.38)" : "rgba(0, 0, 0, 0.6)";
  }, [props.disabled]);
  const computedFlexPosition = React.useMemo(() => {
    return { flexDirection: FlexDirectionMap[props.labelPlacement] || "row" };
  }, [props.labelPlacement]);
  const handleClickIcon = (e) => {
    if (props.disabled) return;
    createRipple(e, true, computedRippleColor);
    setIsChecked((prevValue) => {
      //todo this will cause a warning: cannot update a component while rendering a different component to locate the bad setstate()
      //you should call it in the useEffect(), no side-effect here
      // props.onChange?.({ value: isChecked });
      return !prevValue;
    });
  };
  const handleClickLabel = () => {
    if (props.disabled) return;
    setIsChecked((prevValue) => {
      return !prevValue;
    });
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
    <CheckboxComponent
      className={computedClasses}
      style={{ ...computedFlexPosition }}
    >
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
      <LabelWrapper
        style={{ color: computedLabelTextColor }}
        onMouseDown={handleClickLabel}
      >
        {props.label}
      </LabelWrapper>
    </CheckboxComponent>
  );
}
Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["sm", "md", "lg"]),
    PropTypes.number,
  ]), //the size of checkbox, the size of icon inside is smaller than it automatically
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
  labelPlacement: "right",
};
