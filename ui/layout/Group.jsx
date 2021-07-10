import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
const Group = styled("section")`
  display: flex;
  position: relative;
  & > *,
  & > button {
    margin: 8px;
  }
`;
const GroupBoxContainer = styled(Group)`
  width: 100%;
  min-height: 74px;
  margin-bottom: 36px;
  background: #fff;
  border-radius: 4px;
  border: thin solid rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.87);
`;
const MapJC = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
};
const MapAI = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch",
};

const FlexProps = {
  justifyContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
  ]),
  alignItems: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
  ]),
};
const FlexDefaultProps = {
  justifyContent: "center",
  alignItems: "center",
};
const computedJustifyContent = (jc) => {
  return MapJC[jc] || "center";
};
const computedAlignItems = (ai) => {
  return MapAI[ai] || "center";
};
function GroupBox(props) {
  return (
    <GroupBoxContainer
      className={clsx("group-box", props.block && "block")}
      style={{
        flexDirection: props.block ? "column" : "row",
        justifyContent: computedJustifyContent(props.justifyContent),
        alignItems: computedAlignItems(props.alignItems),
      }}
    >
      {props.children}
    </GroupBoxContainer>
  );
}
GroupBox.propTypes = {
  block: PropTypes.bool, //to place elements vertically in rows
  ...FlexProps,
};
GroupBox.defaultProps = {
  block: false,
  ...FlexDefaultProps,
};
const GroupRowContainer = styled(Group)`
  flex-direction: row;
`;
function GroupRow(props) {
  return (
    <GroupRowContainer
      className="group-row"
      style={{
        minWidth: props.width ? `${props.width}px` : null,
        justifyContent: computedJustifyContent(props.justifyContent),
        alignItems: computedAlignItems(props.alignItems),
      }}
    >
      {props.children}
    </GroupRowContainer>
  );
}
GroupRow.propTypes = {
  width: PropTypes.number, //to place elements vertically in rows
  ...FlexProps,
};
GroupRow.defaultProps = {
  ...FlexDefaultProps,
};
export { GroupBox, GroupRow };
