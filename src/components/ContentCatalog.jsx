import * as React from "react";
import styled from "@emotion/styled";
import ScrollCatalog from "../../ui/ScrollCatalog/ScrollCatalog";
import PropTypes from "prop-types";
import { ButtonPageContentContext } from "../../src/context";
const Component = styled("section")`
  width: 258px;
  flex-shrink:0;
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  box-sizing: border-box;
  padding: 16px 12px 16px 0;
`;
/* For Content Catalog */
export default function ContentCatalog(props) {
  const {routePath,anchors}=React.useContext(ButtonPageContentContext)
  // const [path, setPath] = React.useState(props.routePath);
  // const [anchors, setAnchors] = React.useState(props.anchors);
  return (
    <Component>
      <ScrollCatalog routePath={routePath} anchors={anchors}></ScrollCatalog>
    </Component>
  );
}
ContentCatalog.propTypes={
}
