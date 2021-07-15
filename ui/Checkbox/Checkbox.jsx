import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
import Icon from "../Icon/Icon";
import { createRipple, createRippleByAddingLayer } from "../effect/rippleable";
import { getColor } from "./color";
// import { getSize } from "./size";
const CheckboxComponent = styled("div")`
  display: inline-flex;
`;
const IconWrapper = styled("div")`
  display: flex;
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
    if (!isChecked) return props.icon || "emptyBox";
    else return props.iconChecked || "checkedBox";
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

  const handleClick = (e) => {
    if (props.disabled || props.loading) return;
    createRippleByAddingLayer(e, false, computedRippleColor);
    props.onClick?.(e);
  };
  const handleHoverEnter = () => {
    if (props.disabled || props.loading) return;
    setIsHovering(true);
  };
  const handleHoverLeave = () => {
    if (props.disabled || props.loading) return;
    setIsHovering(false);
  };
  return (
    <CheckboxComponent className={computedClasses}>
      <IconWrapper
        style={{
          color: computedIconColor,
        }}
      >
        <Icon name={computedIcon}></Icon>
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
