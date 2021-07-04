
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import Icon from "../Icon/Icon";
import { shadow2 } from "../styles/legacy";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import uuid from "react-uuid";
const Component = styled.section`
  padding: 16px;
  line-height: 24px;
  border-radius: 4px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto";
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
const HideInputTrick = css`
  width: 0;
  height: 0;
  padding: 0;
  border: none;
`;
const SelectWrapper = css`
  width: 300px;
  height: 54px;
  padding-top: 12px;
  position: relative;
`;

const SelectContent = styled.div`
  display: flex;
  position: relative;
  height: 32px;
  margin-bottom: 8px;
  color: #1867c0;
  cursor: pointer;
  user-select: none;
`;

const SelectPlaceholder = styled.div`
  position: absolute;
  top: 7px;
  left: 0;
  color: rgba(0, 0, 0, 0.54);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  line-height: 16px;
  text-transform: capitalize;
  user-select: none;
`;

const SelectText = styled.span`
  flex: 1;
  margin: 7px 4px 7px 0;
  line-height: 18px;
  font-size: 16px;
  text-transform: capitalize;
`;

const SelectAction = styled.span`
  margin-top: 4px;
  padding-left: 4px;
  width: 24px;
  height: 24px;
  .icon {
    transition: transform 300ms cubic-bezier(0.4, 0.2, 0, 1);
    transform-origin: center;
  }

  &.towards-down {
    .icon {
      transform: rotate(0);
    }
  }
  &.towards-up {
    .icon {
      transform: rotate(180deg);
    }
  }
`;
const Underline = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;
const BaseUnderline = styled(Underline)`
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0.2, 0, 1);
`;

const FocusUnderline = styled(Underline)`
  transition: border-bottom-color 200ms cubic-bezier(0.4, 0.2, 0, 1),
    transform 200ms cubic-bezier(0, 0, 0.2, 1);
  border-bottom: 2px solid rgb(24, 103, 192);
  transform-origin: 50% 50%;
`;
const SelectInput = css`
  &:focus + label {
    .content .placeholder {
      color: #1867c0;
      transform: translateY(calc(-100% - 7px)) translateX(-10%) scale(0.8);
    }
  }
  &:not(:placeholder-shown) + label {
    .content .placeholder {
      color: #1867c0;
      transform: translateY(calc(-100% - 7px)) translateX(-10%) scale(0.8);
    }
  }
  &:not(:focus) + label {
    .content .focus-underline {
      transform: scaleX(0);
    }
  }
  & + label:hover {
    .content .base-underline {
      border-bottom: 1px solid rgba(0, 0, 0, 0.87);
    }
  }
`;

const SelectHelper = styled.div`
  width: 100%;
  height: 14px;
`;

const SelectMenu = styled.section`
  position: absolute;
  left: 0;
  top: 12px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px 0;
  background: #fff;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  z-index: 20;
`;
const SelectMenuItem = styled.section`
  display: flex;
  padding: 0 16px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .content {
    padding: 12px 0;
    line-height: 1.2;
  }
`;
const MaskLayer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
`;

function Select(props) {
  const [id, setID] = useState(uuid());
  const [curValue, setCurValue] = useState(undefined);
  const [toggled, setToggled] = useState(false);
  const handleFocus = () => {
    // console.log("handleFocus");
  };
  const handleBlur = () => {
    // console.log("handleBlur");
  };
  const handleWannaSelect = (e) => {
    console.log("handleWannaSelect");
    setToggled(true);
    // setToggled((toggled) => (toggled ? true : true));
  };
  const handleCloseMenu = (e) => {
    console.log("handleCloseMenu");
    setToggled(false);
  };
  const handleSelect = (e, label) => {
    setCurValue((oldLabel) => {
      console.log("update label from: ", oldLabel, " to: ", label);
      if (props.onChange) props.onChange(label);
      return label;
    });
    setToggled(false);
  };
  return (
    <Component className="select">
      <input
        id={id}
        type="text"
        css={[HideInputTrick, SelectInput]}
        placeholder=" "
        value={curValue}
        onChange={() => null}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />{" "}
      <label htmlFor={id} css={SelectWrapper}>
        <SelectContent className="content" onClick={handleWannaSelect}>
          <SelectPlaceholder className="placeholder">
            {" "}
            {props.placeholder}{" "}
          </SelectPlaceholder>{" "}
          <SelectText> {curValue} </SelectText>{" "}
          <SelectAction
            css={{ color: "rgba(0,0,0,.54)" }}
            className={toggled ? "towards-up" : "towards-down"}
          >
            <Icon name="down1"> </Icon>{" "}
          </SelectAction>{" "}
          <BaseUnderline className="base-underline"> </BaseUnderline>{" "}
          <FocusUnderline className="focus-underline"> </FocusUnderline>{" "}
        </SelectContent>{" "}
        <SelectHelper classNames="helper"> </SelectHelper>{" "}
        <CSSTransition
          in={toggled}
          timeout={500}
          classNames="menu fade"
          unmountOnExit
        >
          <SelectMenu classNames="menu" css={shadow2}>
            <MaskLayer onClick={handleCloseMenu}> </MaskLayer>{" "}
            {props.items.map((item, idx) => (
              <SelectMenuItem
                key={idx}
                onClick={(e) => handleSelect(e, item.label)}
              >
                <span className="content"> {item.text} </span>{" "}
              </SelectMenuItem>
            ))}{" "}
          </SelectMenu>{" "}
        </CSSTransition>{" "}
      </label>{" "}
    </Component>
  );
}

Select.propTypes = {
  variant: PropTypes.oneOf(["default", "filled", "outlined", "plain"]),
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
Select.defaultProps = {
  variant: "default",
};
export default Select;
