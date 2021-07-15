import * as React from "react";
import Page from "../../../src/components/Page";
import Typography from "../../../ui/Typography/Typography";
import { GroupRow, GroupBox } from "../../../ui/layout/Group";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import {
  PageContentNavigationContext,
  CheckboxPageContent,
} from "../../../src/context";
export default function CheckboxPage() {
  return (
    <PageContentNavigationContext.Provider value={{ ...CheckboxPageContent }}>
      <Page>
        <Typography type="h1">Checkbox</Typography>
        <Typography type="p" description>
          The <code>Checkbox</code> component provides users the ability to
          choose between two distinct values. These are very similar to a switch
          and can be used in complex forms and checklists.
        </Typography>
        <Typography type="h2" id="ac-basic-checkboxes">
          Basic checkboxes
        </Typography>
        <GroupBox>
          <Checkbox></Checkbox>
          <Checkbox checked></Checkbox>
          <Checkbox disabled></Checkbox>
          <Checkbox disabled checked></Checkbox>
        </GroupBox>

        <Typography type="h2" id="ac-label">
          Label
        </Typography>
        <GroupBox></GroupBox>

        <Typography type="h2" id="ac-size">
          Size
        </Typography>
        <GroupBox></GroupBox>

        <Typography type="h2" id="ac-color">
          Color
        </Typography>
        <GroupBox></GroupBox>

        <Typography type="h2" id="ac-controlled">
          Controlled
        </Typography>
        <GroupBox></GroupBox>

        <Typography type="h2" id="ac-icon">
          Icon
        </Typography>
        <GroupBox></GroupBox>

        <Typography type="h2" id="ac-label-placement">
          Label placement
        </Typography>
        <GroupBox></GroupBox>
      </Page>
    </PageContentNavigationContext.Provider>
  );
}
