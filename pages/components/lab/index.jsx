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
const FreezeArrayPropsTestComponent = styled("div")``;
function FreezeArrayPropsTest(props) {
  console.log(
    "Freeze Array: ",
    props.value,
    typeof props.value,
    Object.isFrozen(props.value)
  );
  //props.value[0] = 10;
  return (
    <FreezeArrayPropsTestComponent>{props.value}</FreezeArrayPropsTestComponent>
  );
}
FreezeArrayPropsTest.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
};
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
        <GroupBox>
          <FreezeArrayPropsTest
            value={Object.freeze([1, 2])}
          ></FreezeArrayPropsTest>
        </GroupBox>
      </Page>
    </PageContentNavigationContext.Provider>
  );
}
export default LabPage;
