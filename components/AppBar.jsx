import * as React from "react";
import styled from "@emotion/styled";
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
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.14);
  padding: 0 12px;
  margin: 0 16px;
  .test {
    min-width: 50px;
    height: 100%;
    background: red;
  }
`;

function SearchInput(props) {
  return (
    <SearchInputComponent className="search-input">
      <span className="test"></span>
    </SearchInputComponent>
  );
}
const DividerComponent = styled("div")`
  height: 16px;
  border-right:solid 1px rgba(0, 0, 0, 0.12);
  max-height: calc(100% - 16px);
  margin: auto 8px;
`;
function Divider() {
  return <DividerComponent className="divider"></DividerComponent>;
}
const ButtonDefaultRemoval = styled("button")`
  margin: 0;
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
  return <ButtonComponent className="btn">{props.children}</ButtonComponent>;
}
/* For Content Catalog */
export default function AppBar(props) {
  return (
    <Component className="app-bar">
      <Spacing></Spacing>
      <SearchInput></SearchInput>
      <SearchInput></SearchInput>
      <Divider></Divider>
      <Button>Learn</Button>
      <Button>Support</Button>
      <Button>Team</Button>
      <Divider></Divider>
      
    </Component>
  );
}
