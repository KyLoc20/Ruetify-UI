import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Icon from "../../ui/Icon/Icon";
const Component = styled("section")`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: calc(100% - 280px);
  padding: 4px 16px;
  height: 64px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  background: #fff;
  z-index:100;
`;
const Spacing = styled("div")`
  flex: 1;
  height: 100%;
`;
const SearchInputComponent = styled("section")`
  display: flex;
  box-sizing: border-box;
  width: 450px;
  height: 38px;
  border-radius: 8px;
  padding: 0 12px;
  margin: 0 16px;
  cursor: pointer;
  transition: all 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;
const IconWrapper = styled("div")`
  display: flex;
  align-items: center;
  padding-right: 4px;
  .icon {
    margin-left: 4px;
    margin-right: 8px;
  }
`;
const InputWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 60px;
  input {
    width: 100%;
    height: 20px;
    padding: 4px 0 2px;
    border: none;
    cursor: text;
    user-select: none;
    color: rgba(0, 0, 0, 0.87);
    font-weight: 400;
    font-size: 16px;
    background: transparent;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
`;
function SearchInput(props) {
  const inputRef = React.useRef();
  const [inputValue, setInputValue] = React.useState("");
  const [inputFocused, setInputFocused] = React.useState(false);
  const handleChangeInput = (e) => {
    console.log("handleChangeInput", e.target, e.target.value);
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "/" && inputFocused === false) {
      e.preventDefault();
      console.log("handleKeyDown", e.key);
      inputRef.current.focus();
    }
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("handleKeyDown Input Done", e.key);
      setInputValue("");
    } else if (e.key === "Escape") {
      console.log("handleKeyDown Input Stop", e.key, inputRef.current);

      inputRef.current.blur();
    }
  };
  const handleFocus = () => {
    setInputFocused(true);
  };
  const handleBlur = () => {
    setInputFocused(false);
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const computedBoxShadow = () => {
    if (inputFocused)
      return "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.2),0 1px 5px 0 rgba(0, 0, 0, 0.14)";
    else return null;
  };
  const computedBackgroundColor = () => {
    if (inputFocused) return "#fff";
    else return "#eee";
  };
  return (
    <SearchInputComponent
      className="search-input"
      onKeyDown={handleKeyDown}
      style={{
        boxShadow: computedBoxShadow(),
        background: computedBackgroundColor(),
      }}
    >
      <IconWrapper>
        <Icon name="search" size={18} color="rgba(0,0,0,.54)"></Icon>
      </IconWrapper>
      <InputWrapper>
        <input
          type="text"
          ref={inputRef}
          placeholder="Search Ruetify (press /)"
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChangeInput}
          onKeyDown={handleInputKeyDown}
        />
      </InputWrapper>
    </SearchInputComponent>
  );
}
const DividerComponent = styled("div")`
  height: 16px;
  border-right: solid 1px rgba(0, 0, 0, 0.12);
  max-height: calc(100% - 16px);
  margin: auto 8px;
`;
function Divider() {
  return <DividerComponent className="divider"></DividerComponent>;
}
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
function Button(props) {
  const computedWidth = () => {
    return props.width ? `${props.width}px` : null;
  };
  const computedHeight = () => {
    return props.height ? `${props.height}px` : null;
  };
  return (
    <ButtonComponent
      className="btn"
      style={{ width: computedWidth(), height: computedHeight() }}
    >
      {props.children}
    </ButtonComponent>
  );
}
Button.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
const IconButtonComponent = styled(ButtonDefaultRemoval)`
  display: flex;
  flex-shrink: 0;
  position: relative;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-sizing: border-box;
  transition: background 280ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }
`;
const ButtonSizeMap = {
  sm: 44,
  md: 48,
  lg: 60,
};
function IconButton(props) {
  const getSize = (size) => {
    if (ButtonSizeMap[size] !== undefined) return ButtonSizeMap[size];
    else return size;
  };
  const computedWidth = (sizeNum) => {
    return { width: `${sizeNum}px` };
  };
  const computedHeight = (sizeNum) => {
    return { height: `${sizeNum}px` };
  };
  return (
    <IconButtonComponent
      className="btn iconed"
      css={{
        ...computedWidth(getSize(props.size)),
        ...computedHeight(getSize(props.size)),
      }}
    >
      <Icon
        name={props.icon}
        size={props.iconSize}
        color="rgba(0,0,0,.54)"
      ></Icon>
    </IconButtonComponent>
  );
}
IconButton.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
  iconSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sm", "md", "lg"]),
  ]),
};
IconButton.defaultProps = {
  size: "md",
  iconSize: "md",
};

/* For Content Catalog */
export default function AppBar(props) {
  return (
    <Component className="app-bar">
      <Spacing></Spacing>
      <SearchInput></SearchInput>
      <Divider></Divider>
      <Button>Learn</Button>
      <Button>Support</Button>
      <Button>Team</Button>
      <Divider></Divider>
      <IconButton icon="store"></IconButton>
      <IconButton icon="setting2"></IconButton>
      <IconButton icon="job"></IconButton>
      <IconButton icon="notice2"></IconButton>
      <Button width={64}>
        <Icon name="translation"></Icon>
      </Button>
    </Component>
  );
}
