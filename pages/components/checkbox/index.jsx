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
  const [controlled, setControlled] = React.useState(true);
  const controlledLabel = React.useMemo(
    () => (controlled ? "This one is Checked" : "This one is Unchecked"),
    [controlled]
  );
  const handleCheckboxChange = (e) => setControlled(e.value);
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
        <Typography type="p">
          You can add a description text to the <code>label</code> prop.
        </Typography>
        <GroupBox>
          <Checkbox label="Label"></Checkbox>
          <Checkbox label="Disabled" disabled></Checkbox>
        </GroupBox>

        <Typography type="h2" id="ac-size">
          Size
        </Typography>
        <Typography type="p">
          Use the <code>size</code> prop to set the size of the componnent.
        </Typography>
        <GroupBox>
          <Checkbox size="sm" label="sm"></Checkbox>
          <Checkbox size="md" label="md"></Checkbox>
          <Checkbox size="lg" label="lg"></Checkbox>
          <Checkbox size={48} label="48px"></Checkbox>
        </GroupBox>
        <Typography type="quote">
          By default the icon is (16px) smaller than the corresponding checkbox.
        </Typography>
        <Typography type="p">
          Use the <code>iconSize</code> prop to set the size of the icon inside.
        </Typography>
        <GroupBox>
          <Checkbox size="md" iconSize={20} label="20px"></Checkbox>
          <Checkbox size="md" label="md"></Checkbox>
          <Checkbox size="md" iconSize={30} label="30px"></Checkbox>
        </GroupBox>

        <Typography type="h2" id="ac-color">
          Color
        </Typography>
        <Typography type="p">
          Use the <code>color</code> prop to set the color of the component.
        </Typography>
        <GroupBox block>
          <GroupRow>
            <Checkbox color="primary" checked></Checkbox>
            <Checkbox color="success" checked></Checkbox>
            <Checkbox color="warning" checked></Checkbox>
          </GroupRow>
          <GroupRow>
            <Checkbox color="info" checked></Checkbox>
            <Checkbox color="default" checked></Checkbox>
            <Checkbox color="error" checked></Checkbox>
          </GroupRow>
        </GroupBox>
        <Typography type="p">
          Use the prop <code>iconDefaultColor</code> to customize the unchecked
          icon color.
        </Typography>
        <GroupBox>
          <Checkbox
            color="info"
            iconDefaultColor={"rgba(255, 82, 82, 1)"}
          ></Checkbox>
        </GroupBox>
        <Typography type="p">
          Use the prop <code>iconColor</code> to customize the checked icon
          color.
        </Typography>
        <GroupBox>
          <Checkbox color="info" iconColor={"rgba(255, 82, 82, 1)"}></Checkbox>
        </GroupBox>
        <Typography type="p">
          Use the prop <code>iconHoverColor</code> to customize the checked icon
          color.
        </Typography>
        <GroupBox>
          <Checkbox
            color="info"
            iconHoverColor={"rgba(255, 82, 82, 0.3)"}
          ></Checkbox>
        </GroupBox>
        <Typography type="p">
          Use the prop <code>rippleColor</code> to customize the checked icon
          color.
        </Typography>
        <GroupBox>
          <Checkbox
            color="info"
            rippleColor={"rgba(255, 82, 82, 0.3)"}
          ></Checkbox>
        </GroupBox>

        <Typography type="h2" id="ac-controlled">
          Controlled
        </Typography>
        <Typography type="p">
          You can control the checkbox with the <code>checked</code> and{" "}
          <code>onChange</code> props.
        </Typography>
        <GroupBox>
          <Checkbox
            label={controlledLabel}
            checked={controlled}
            onChange={handleCheckboxChange}
          ></Checkbox>
        </GroupBox>

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
