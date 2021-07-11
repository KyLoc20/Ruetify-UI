import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import clsx from "clsx";
const Component = styled("section")`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: calc(100vh - 64px);
  box-sizing: border-box;
  padding: 8px;
  overflow-y: scroll;
`;
const ItemComponent = styled("section")``;
const ItemContent = styled("section")`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
`;
const ItemChildren = styled("section")`
  max-height: 500vh;
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  &.collapsed {
    max-height: 0;
    padding: 0 !important;
  }
`;
function RecursiveItem(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [shouldChildrenCollapsed, setShouldChildrenCollapsed] =
    React.useState(false);

  const hasChildren = () => props.layer < props.layerTotal;
  const isSelected = () => props.content.label === props.selectedFellow;
  const computedContentIndent = () => `${props.indent}px`;
  const computedContentFontWeight = () =>
    hasChildren() || isSelected() ? 600 : 500;
  const computedContentColor = () => {
    if (isSelected())
      return isHovering
        ? "rgba(25, 118, 210, 0.12)"
        : "rgba(25, 118, 210, 0.08)";
    else return isHovering ? "rgba(0, 0, 0, 0.04)" : null;
  };
  const computedContentTextColor = () => {
    if (isSelected()) return "#1976d2";
    else return isHovering ? "rgba(0, 0, 0, 0.87)" : "rgba(0, 0, 0, 0.6)";
  };
  const handleHoverEnter = () => setIsHovering(true);
  const handleHoverLeave = () => setIsHovering(false);
  const handleSelectLabelOriginally = () => {
    let label = props.content.label;
    let layer = props.layer;
    let link = props.content.link;
    console.log("handleClick originally from: ", label, layer);
    props.onSelect({ label, layer, link });
    //whether collapse its children items
    if (hasChildren()) setShouldChildrenCollapsed((prevValue) => !prevValue);
  };
  const handleSelectLabelFromChildren = (from) => {
    //help deliver
    const curLabel = props.content.label;
    const curLayer = props.layer;
    console.log(
      `Here is ${curLayer}-${curLabel} handleSelectLabelFromChildren from ${from.label}.`
    );
    props.onSelect(from);
  };

  return (
    <ItemComponent className="item">
      <ItemContent
        className="content"
        css={{
          paddingLeft: computedContentIndent(),
          fontWeight: computedContentFontWeight(),
          background: computedContentColor(),
          color: computedContentTextColor(),
        }}
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        onClick={handleSelectLabelOriginally}
      >
        {props.content.text}
      </ItemContent>
      <ItemChildren
        className={clsx("children", shouldChildrenCollapsed && "collapsed")}
      >
        {props.children.map((item) => (
          <RecursiveItem
            key={item.content.label}
            content={item.content}
            children={item.children}
            selectedFellow={props.selectedFellow}
            layer={props.layer + 1}
            layerTotal={props.layerTotal}
            indent={props.indent + 16}
            rippleable={props.rippleable}
            onSelect={handleSelectLabelFromChildren}
          ></RecursiveItem>
        ))}
      </ItemChildren>
    </ItemComponent>
  );
}
export default function NavigationCatalog(props) {
  const [selectedLabel, setSelectedLabel] = React.useState(props.initSelectedLabel);
  const handleSelectLabelAtRootLayer = (from) => {
    const curLabel = "$root";
    const curLayer = 0;
    setSelectedLabel((prevLabel) => {
      console.log(
        `Here is ${curLayer}-${curLabel} handleSelectLabelAtRootLayer from ${from.label} changing ${prevLabel} to ${from.label}.`
      );
      //report to the upper cpt to go somewhere
      props.onChange?.(from);
      return from.label;
    });
  };
  return (
    <Component className="navigation-catalog">
      {props.items.map((item) => (
        <RecursiveItem
          key={item.content.label}
          content={item.content}
          children={item.children}
          selectedFellow={selectedLabel}
          layer={1}
          layerTotal={props.layerTotal}
          indent={props.indent}
          rippleable={false}
          onSelect={handleSelectLabelAtRootLayer}
        ></RecursiveItem>
      ))}
    </Component>
  );
}
NavigationCatalog.propTypes = {
  items: PropTypes.array.isRequired,
  layerTotal: PropTypes.number.isRequired, //total number of layers //todo automatically calc
  indent: PropTypes.number, //row indent for each item of different layers
  initSelectedLabel: PropTypes.string, //current one selected,
  onChange: PropTypes.func,
};
NavigationCatalog.defaultProps = {
  indent: 24,
};
RecursiveItem.propTypes = {
  content: PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  children: PropTypes.array,
  selectedFellow: PropTypes.string.isRequired, //the selected item's label
  layer: PropTypes.number.isRequired, //current one selected,
  layerTotal: PropTypes.number.isRequired, //current one selected,
  indent: PropTypes.number,
  rippleable: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
};
RecursiveItem.defaultProps = {
  children: [],
  indent: 24,
  rippleable: false,
};
