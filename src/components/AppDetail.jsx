import * as React from "react";
import styled from "@emotion/styled";
const Component = styled("section")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 4px 16px;
  height: 64px;
  border-bottom:solid 1px rgba(0,0,0,.12);
  background:#fff;
`;
const Logo = styled("span")`
  width: 148px;
  height: 48px;
  background-image: url(/logo.png);
  background-size: 120%;
  background-position: center;
`;
const Version = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 36px;
  padding: 0 8px;
  margin-right: 8px;
`;
const VersionText = styled("span")`
  letter-spacing: 0.0892857143em;
  color: rgba(0, 0, 0, 0.6);
  line-height: 17px;
  font-size: 14px;
`;
/* For Content Catalog */
export default function AppDetail(props) {
  return (
    <Component>
      <Logo></Logo>
      <Version>
        <VersionText>{props.version}</VersionText>
      </Version>
    </Component>
  );
}
