import * as React from "react";
import styled from "@emotion/styled";
const Container = styled("section")`
  display: flex;
  margin-top: 64px;
  padding: 32px;
  flex-grow: 1;
`;
const Context = styled("section")`
  display: flex;
  flex-direction:column;
  margin: 0 auto;
  width: 100%;
  max-width: 868px;
`;
export default function MainContext(props) {
  return (
    <Container className="main-context">
      <Context className="content">{props.children}</Context>
    </Container>
  );
}
