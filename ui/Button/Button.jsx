import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
import {createRipple,createRippleByAddingLayer} from "../effect/rippleable"
const ButtonDefaultRemoval = styled("button")`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  cursor: pointer;
  user-select: none;
  background: transparent;
`;
const ButtonComponent = styled(ButtonDefaultRemoval)`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 8px;
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.875rem;
  letter-spacing: 0.0892857143em;
  border-radius: 4px;
  transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;
export default function Button(props) {
  const computedClasses = () =>
    clsx(["btn", props.disabled && "disabled", props.varaint]);

  const computedWidth = () => {
    return props.width ? `${props.width}px` : null;
  };
  const computedHeight = () => {
    return props.height ? `${props.height}px` : null;
  };
const handleClick=(e)=>{
  console.log("handleClick",e)
  createRippleByAddingLayer(e)
}

  
  return (
    <ButtonComponent
      className={computedClasses()}
      style={{ width: computedWidth(), height: computedHeight() }}
      onClick={handleClick}
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
