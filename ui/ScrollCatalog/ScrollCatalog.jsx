import * as React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const Component = styled("section")`
  display: flex;
  flex-direction: column;
`;
const Title = styled("span")`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 32px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.0125em;
  font-weight: 500;
  text-transform: capitalize;
`;
const ItemContainer = styled("ul")`
  margin: 0;
  padding: 0;
  margin-bottom: 24px;
  padding-left: 24px;
  max-height: 588px;
  overflow-y: auto;
`;
const Item = styled("li")`
  list-style: none;
  text-transform: capitalize;
  padding: 4px 12px 4px;
  border-left: 2px solid #e5e5e5;
  color: rgba(0, 0, 0, 0.38);
  font-size: 0.875rem;
  line-height: 1.25rem;
  letter-spacing: 0.0178571429em !important;
  cursor: pointer;
  user-select: none;
  transition: border 100ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-color: rgba(24, 103, 192, 0.54);
  }
  &.active,
  &.active-selecting:not(.inactive) {
    border-color: rgba(24, 103, 192, 1);
    color: rgba(24, 103, 192, 1);
  }
`;
export default function ScrollCatalog(props) {
  return (
    <Component className="scroll-catalog">
      <Title>{props.title}</Title>
      <ItemContainer>
        {props.items.map((item, idx) => (
          <Item key={idx}>{item.text}</Item>
        ))}
      </ItemContainer>
    </Component>
  );
}
ScrollCatalog.propTypes = {
  path: PropTypes.string.isRequired, //'component/avatar'
  items: PropTypes.array.isRequired,
  title: PropTypes.string,
};
ScrollCatalog.defaultProps = {
  title: "Content",
};