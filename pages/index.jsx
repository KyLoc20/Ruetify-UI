import App from "../components/App";
import Typography from "../ui/Typography/Typography";
import { GroupRow, GroupBox } from "../ui/layout/Group";
import Button from "../ui/Button/Button";
export default function Home() {
  return (
    <App>
      <Typography type="h1">Buttons</Typography>
      <Typography type="p" description>
        The <code>Button</code> component replaces the standard html button with
        a material design theme and a multitude of options.
      </Typography>
      <Typography type="h2">Variant</Typography>
      <Typography type="p">
        Use the prop <code>variant</code> to set your buttons' styles.
      </Typography>

      <Typography type="p">
        <strong>plain</strong> buttons are distinguished by their box shadow and
        fill color.
      </Typography>
      <GroupBox>
        <Button variant="plain" color="default">
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
        <strong>text</strong> buttons have no box shadow and no fill color. Only
        on hover is the container for the button shown.
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
      <Typography type="h2">Color</Typography>
      <Typography type="p">
        Use the prop <code>color</code> to style the color theme of the buttons.
      </Typography>
      <Typography type="quote">
        Preset themes have been provided including <code>default</code>,{" "}
        <code>primary</code>, <code>error</code>, <code>disabled</code>.
      </Typography>
      <Typography type="h2">Size</Typography>
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
      <Typography type="h2">Depressed</Typography>
      <Typography type="p">
        Use the prop <code>depressed</code> to make buttons
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
      <Typography type="h2">Tile</Typography>
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
      <Typography type="h2">Rounded</Typography>
      <Typography type="p">
        Use the prop <code>rounded</code> to make buttons have round edges.
      </Typography>
      <GroupBox>
        <Button variant="plain" color="default" rounded>
          DEFAULT
        </Button>
        <Button variant="plain" color="primary" rounded>
          PRIMARY
        </Button>
        <Button variant="plain" color="error" rounded>
          ERROR
        </Button>
        <Button variant="plain" disabled rounded>
          DISABLED
        </Button>
      </GroupBox>
      <GroupBox></GroupBox>
    </App>
  );
}
