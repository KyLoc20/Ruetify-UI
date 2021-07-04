import * as React from "react";
import styled from "@emotion/styled";
const Component = styled("section")`
  position: fixed;
  disply:flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 4px 16px;
  height: 64px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
`;

/* For Content Catalog */
export default function AppBar(props) {
  return <Component>AppBar</Component>;
}
