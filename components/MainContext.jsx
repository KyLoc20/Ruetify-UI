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
  margin: 0 auto;
  width: 100%;
  max-width: 868px;
  background: rgba(0, 255, 0, 0.12);
`;
export default function MainContext() {
  return (
    <Container>
      <Context>MainContext</Context>
    </Container>
  );
}
