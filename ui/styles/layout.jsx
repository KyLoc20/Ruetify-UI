import styled from "@emotion/styled";
const GroupBox = styled("section")`
  display: flex;
  position: relative;
  width:100%;
  padding: 16px;
  &.box-block {
    flex-direction: column;
  }
  &.box-inline {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Row = styled("section")`
  display: flex;
  background: #fff;
  padding: 24px;
  flex-wrap: wrap;
  &.center {
    justify-content: center;
    align-items: center;
  }
  &.jc-center {
    justify-content: center;
  }
  &.ai-center {
    align-items: center;
  }
`;
const Col = styled("section")`
  display: flex;
  background: #fff;
  padding: 24px;
  justify-content: center;
`;
export { GroupBox, Row, Col };