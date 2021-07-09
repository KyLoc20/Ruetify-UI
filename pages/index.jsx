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

      <Typography type="quote">
        <code>v-btn</code> is the only component that behaves differently when
        using the dark prop. Normally components use the dark prop to denote
        that they have a dark colored background and need their text to be
        white. While this will work for v-btn, it is advised to only use the
        prop when the button IS ON a colored background due to the disabled
        state blending in with white backgrounds. If you need white text, simply
        add the white--text class.
      </Typography>

      <GroupBox></GroupBox>
    </App>
  );
}
