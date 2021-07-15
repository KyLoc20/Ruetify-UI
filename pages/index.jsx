import * as React from "react";
import Page from "../src/components/Page";
import Typography from "../ui/Typography/Typography";
import { GroupRow, GroupBox } from "../ui/layout/Group";
import Button from "../ui/Button/Button";
import { ButtonPageContentContext } from "../src/context";
export default function ButtonPage() {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleChangeLoading = () => {
    setIsLoading((prevValue) => !prevValue);
    console.log("handleChangeLoading", isLoading);
  };
  return (
    <ButtonPageContentContext.Provider
      value={{
        routePath: "components/button",
        anchors: [
          { anchor: "ac-variant", text: "Variant" },
          { anchor: "ac-color", text: "Color" },
          { anchor: "ac-size", text: "Size" },
          { anchor: "ac-depressed", text: "Depressed" },
          { anchor: "ac-tile", text: "Tile" },
          { anchor: "ac-rounded", text: "Rounded" },
          { anchor: "ac-loading", text: "Loading" },
        ],
      }}
    >
      <Page>
        <Typography type="h1">Buttons</Typography>
        <Typography type="p" description>
          The <code>Button</code> component replaces the standard html button
          with a material design theme and a multitude of options.
        </Typography>
        <Typography type="h2" id="ac-variant">
          Variant
        </Typography>
        <Typography type="p">
          Use the prop <code>variant</code> to set your buttons' styles.
        </Typography>

        <Typography type="p">
          <strong>plain</strong> buttons are distinguished by their box shadow
          and fill color.
        </Typography>
        <GroupBox>
          <Button variant="plain" color="default" width={500}>
            DEFAULT
          </Button>
          <Button variant="plain" color="primary">
            PRIMARY
          </Button>
          <Button variant="plain" color="error">
            ERROR
          </Button>
          <Button variant="plain" disabled>
            DISABLED
          </Button>
        </GroupBox>
        <Typography type="p">
          <strong>text</strong> buttons have no box shadow and no fill color.
          Only on hover is the container for the button shown.
        </Typography>
        <GroupBox>
          <Button variant="text" color="default">
            DEFAULT
          </Button>
          <Button variant="text" color="primary">
            PRIMARY
          </Button>
          <Button variant="text" color="error">
            ERROR
          </Button>
          <Button variant="text" disabled>
            DISABLED
          </Button>
        </GroupBox>
        <Typography type="p">
          <strong>outlined</strong> buttons have no box shadow and no fill color
          but borders.
        </Typography>
        <GroupBox>
          <Button variant="outlined" color="default">
            DEFAULT
          </Button>
          <Button variant="outlined" color="primary">
            PRIMARY
          </Button>
          <Button variant="outlined" color="error">
            ERROR
          </Button>
          <Button variant="outlined" disabled>
            DISABLED
          </Button>
        </GroupBox>
        <Typography type="h2" id="ac-color">
          Color
        </Typography>
        <Typography type="p">
          Use the prop <code>color</code> to style the color theme of the
          buttons.
        </Typography>
        <Typography type="quote">
          Preset themes have been provided including <code>default</code>,{" "}
          <code>primary</code>, <code>error</code>, <code>disabled</code>.
        </Typography>
        <Typography type="h2" id="ac-size">
          Size
        </Typography>
        <Typography type="p">
          Use the prop <code>size</code> to set the size of the buttons which
          decides the padding, fontsize and height.
        </Typography>
        <GroupBox block>
          <GroupRow>
            <Button variant="plain" color="primary" size="xsm">
              X-SMALL
            </Button>
            <Button variant="plain" color="primary" size="sm">
              SMALL
            </Button>
            <Button variant="plain" color="primary" size="md">
              MEDIUM
            </Button>
            <Button variant="plain" color="primary" size="lg">
              LARGE
            </Button>
            <Button variant="plain" color="primary" size="xlg">
              X-LARGE
            </Button>
          </GroupRow>
          <GroupRow>
            <Button variant="text" color="primary" size="xsm">
              X-SMALL
            </Button>
            <Button variant="text" color="primary" size="sm">
              SMALL
            </Button>
            <Button variant="text" color="primary" size="md">
              MEDIUM
            </Button>
            <Button variant="text" color="primary" size="lg">
              LARGE
            </Button>
            <Button variant="text" color="primary" size="xlg">
              X-LARGE
            </Button>
          </GroupRow>
          <GroupRow>
            <Button variant="outlined" color="primary" size="xsm">
              X-SMALL
            </Button>
            <Button variant="outlined" color="primary" size="sm">
              SMALL
            </Button>
            <Button variant="outlined" color="primary" size="md">
              MEDIUM
            </Button>
            <Button variant="outlined" color="primary" size="lg">
              LARGE
            </Button>
            <Button variant="outlined" color="primary" size="xlg">
              X-LARGE
            </Button>
          </GroupRow>
        </GroupBox>
        <Typography type="h2" id="ac-depressed">
          Depressed
        </Typography>
        <Typography type="p">
          Use the prop <code>depressed</code> to make buttons{" "}
          <strong>depressed</strong> which still maintain their background color
          but have no box shadow.
        </Typography>
        <GroupBox>
          <Button variant="plain" color="default" depressed>
            DEFAULT
          </Button>
          <Button variant="plain" color="primary" depressed>
            PRIMARY
          </Button>
          <Button variant="plain" color="error" depressed>
            ERROR
          </Button>
          <Button variant="plain" disabled depressed>
            DISABLED
          </Button>
        </GroupBox>
        <Typography type="h2" id="ac-tile">
          Tile
        </Typography>
        <Typography type="p">
          Use the prop <code>tile</code> to remove buttons's border radius.
        </Typography>
        <GroupBox>
          <Button variant="plain" color="primary" tile>
            PLAIN
          </Button>
          <Button variant="text" color="primary" tile>
            TEXT
          </Button>
          <Button variant="outlined" color="primary" tile>
            OUTLINED
          </Button>
          <Button variant="plain" disabled tile>
            DISABLED
          </Button>
        </GroupBox>
        <Typography type="h2" id="ac-rounded">
          Rounded
        </Typography>
        <Typography type="p">
          Use the prop <code>rounded</code> to make buttons have round edges.
        </Typography>
        <GroupBox>
          <Button variant="plain" color="primary" rounded>
            PLAIN
          </Button>
          <Button variant="text" color="primary" rounded>
            TEXT
          </Button>
          <Button variant="outlined" color="primary" rounded>
            OUTLINED
          </Button>
          <Button variant="plain" disabled rounded>
            DISABLED
          </Button>
        </GroupBox>
        <Typography type="h2" id="ac-loading">
          Loading
        </Typography>
        <Typography type="p">
          Use the prop <code>loading</code> to notify a user that there is a
          process taking place.
        </Typography>
        <GroupBox block>
          <GroupRow justifyContent="start">
            <Button
              variant="plain"
              color="primary"
              onClick={handleChangeLoading}
            >
              {isLoading ? "FINISHED" : "LOADING "}
            </Button>
          </GroupRow>
          <GroupRow justifyContent="start" width={500}>
            <Button variant="outlined" color="primary" loading={isLoading}>
              SUBMIT
            </Button>
            <Button variant="outlined" color="primary" loading={isLoading}>
              FETCH
            </Button>
            <Button variant="plain" color="primary" loading={isLoading}>
              SEND
            </Button>
            <Button variant="plain" color="error" loading={isLoading}>
              SAVE
            </Button>
          </GroupRow>
        </GroupBox>
      </Page>
    </ButtonPageContentContext.Provider>
  );
}
