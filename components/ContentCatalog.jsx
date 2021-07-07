import * as React from "react";
import styled from "@emotion/styled";
import ScrollCatalog from "../ui/ScrollCatalog/ScrollCatalog";
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
export default function ContentCatalog() {
  const [path, setPath] = React.useState("component/");
  const [anchors, setAnchors] = React.useState([
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },

    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
    { anchor: "ac-variant", text: "Variant" },
    { anchor: "ac-menu-position", text: "Menu Position" },
    { anchor: "ac-description", text: "Label, placeholder and helper text" },
    { anchor: "ac-width", text: "Width" },
    { anchor: "ac-other-props", text: "Other props" },
    { anchor: "ac-error", text: "Error" },
  ]);
  return (
    <Component>
      <ScrollCatalog path={path} items={anchors}></ScrollCatalog>
    </Component>
  );
}
