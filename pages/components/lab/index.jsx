import * as React from "react";
import Page from "../../../src/components/Page";
import Typography from "../../../ui/Typography/Typography";
import styled from "@emotion/styled";
import { GroupRow, GroupBox } from "../../../ui/layout/Group";
import {
  PageContentNavigationContext,
  LabPageContent,
} from "../../../src/context";
import PropTypes from "prop-types";
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const currentNavigationLabel = "lab";
  const pageContent = LabPageContent;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      currentNavigationLabel,
      pageContent,
    },
  };
}

function LabPage(props) {
  const { currentNavigationLabel, pageContent, version } = props;
  return (
    <PageContentNavigationContext.Provider value={{ ...pageContent }}>
      <Page currentNavigationLabel={currentNavigationLabel} version={version}>
        <Typography type="h1">Test</Typography>
        <Typography type="p" description>
          This is a laboratory for testing some components or features.
        </Typography>
        <Typography type="h2" id="ac-basic-checkboxes">
          Type Check Object.freeze()
        </Typography>
        <div style={{ fontWeight: 100, fontSize: 20 }}>Welcome to Next.js</div>
        <div style={{ fontWeight: 300, fontSize: 20 }}>Welcome to Next.js</div>
        <div style={{ fontWeight: 400, fontSize: 20 }}>Welcome to Next.js</div>
        <div style={{ fontWeight: 500, fontSize: 20 }}>Welcome to Next.js</div>
        <div style={{ fontWeight: 700, fontSize: 20 }}>Welcome to Next.js</div>
        <div style={{ fontWeight: 800, fontSize: 20 }}>Welcome to Next.js</div>
        <GroupBox>
          <FreezeArrayPropsTest value={(Object.freeze([1,2]))}></FreezeArrayPropsTest>
        </GroupBox>
      </Page>
    </PageContentNavigationContext.Provider>
  );
}

const FreezeArrayPropsTestComponent = styled("div")``;
function FreezeArrayPropsTest(props) {
  console.log(
    "Freeze Array: ",
    props.value,
    typeof props.value,
    Array.isArray(props.value),
    Object.getOwnPropertyDescriptors(props.value),
    Object.isFrozen(props.value)
  );
  // props.value[0] = 10;
  return (
    <FreezeArrayPropsTestComponent>{props.value}</FreezeArrayPropsTestComponent>
  );
}
const isImmutable = (obj) =>
  !Object.isExtensible(obj) || Object.isSealed(obj) || Object.isFrozen(obj);

const mutableArrayOf = function (innerTypes) {
  function validate(props, propName, componentName) {
    const arr = props[propName];
    /**
     * check array and inner elements here.
     */
    PropTypes.checkPropTypes(
      { array: PropTypes.arrayOf(innerTypes) },
      { array: arr },
      `prop`,
      `${componentName}.${propName}`
    );
    /**
     * check mutable here.
     */
    if (isImmutable(arr)) {
      //todo send the error info to the upper PropTypes.oneOfType()
      return new Error(
        `Invalid prop [${arr}] supplied to ${componentName}. Validation failed due to this is immutable.`
      );
    }
  }
  return validate;
};

FreezeArrayPropsTest.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    mutableArrayOf(PropTypes.number),
  ]),
};
export default LabPage;
