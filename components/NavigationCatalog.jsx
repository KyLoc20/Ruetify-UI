import * as React from "react";
import styled from "@emotion/styled";
const Component = styled("section")`
display: flex;
flex-direction: column;
  width: 100%;
  height: calc(100% - 64px);
 box-sizing:border-box;
  padding: 8px;
  overflow-y: scroll;
`;
const TestItem = styled("div")`
  width: 148px;
  height: 50px;
  background: red;
  margin: 20px;
`;
export default function NavigationCatalog() {
  return (
    <Component>
      <TestItem></TestItem>
      <TestItem></TestItem>
      <TestItem></TestItem>
      <TestItem></TestItem>
      <TestItem></TestItem>
      <TestItem></TestItem>
    </Component>
  );
}
