import * as React from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
const Heading = styled("div")`
  display: inline-block;
  margin: 0;
  padding: 0;
  color: currentColor;
  letter-spacing: normal;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
`;
const HeadingOne = styled(Heading.withComponent("h1"))`
  margin-bottom: 16px;
  line-height: 3.125rem;
  font-size: 3rem;
`;
const HeadingTwo = styled(Heading.withComponent("h2"))`
  margin-bottom: 12px;
  line-height: 2.5rem;
  font-size: 2.125rem;
`;
const HeadingThree = styled(Heading.withComponent("h3"))`
  margin-bottom: 8px;
  line-height: 2rem;
  font-size: 1.5rem;
`;
const HeadingFour = styled(Heading.withComponent("h4"))`
  margin-bottom: 8px;
  line-height: 2rem;
  font-size: 1.25rem;
  font-weight: 500;
`;
const Paragraph = styled("p")`
  display: block;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 16px;
  line-height: 2rem;
  font-size: 1rem;
`;
const Quote = styled("div")`
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 4px;
  color: rgba(251, 140, 0, 1);
  background: rgba(251, 140, 0, 0.12);
  border-left: 8px solid rgba(251, 140, 0, 0.26);
`;
const DescriptionStyle = css`
  margin-bottom: 16px;
  font-size: 1.25rem;
  font-weight: 300;
`;
const CodeStyle = css`
  code {
    padding: 0.2em 0.4em;
    background-color: rgba(0, 0, 0, 0.05);
    color: currentColor;
    border-radius: 3px;
    font-size: 85%;
    font-weight: 400;
    font-family: monospace, monospace;
  }
`;
const TypeMap = {
  h1: HeadingOne,
  h2: HeadingTwo,
  h3: HeadingThree,
  h4: HeadingFour,
  p: Paragraph,
  quote: Quote,
};
export default function Typography(props) {
  const TypographyComponent = TypeMap[props.type] || Paragraph;
  return (
    <TypographyComponent
      id={props.id}
      className={props.type}
      css={[props.description ? DescriptionStyle : null, CodeStyle]}
    >
      {props.children}
    </TypographyComponent>
  );
}
Typography.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "p", "quote"]),
  description: PropTypes.bool, // a special style
};
Typography.defaultProps = {
  type: "p",
  description: false,
};
