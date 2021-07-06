import App from "../components/App";
import Typography from "../ui/Typography/Typography";
export default function Home() {
  return (
    <App>
      <Typography type="h1">Buttons</Typography>
      <Typography type="p" description>
        The <code>v-btn</code> component replaces the standard html button with
        a material design theme and a multitude of options. Any color helper
        class can be used to alter the background or text color.
      </Typography>
      <Typography type="h2">Usage</Typography>
      <Typography type="h3">Usage</Typography>
      <Typography type="h4">block</Typography>
      <Typography type="p">
        <strong>depressed</strong> buttons still maintain their background
        color, but have no box shadow.
      </Typography>
      <Typography type="quote">
        <code>v-btn</code> is the only component that behaves differently when using the dark
        prop. Normally components use the dark prop to denote that they have a
        dark colored background and need their text to be white. While this will
        work for v-btn, it is advised to only use the prop when the button IS ON
        a colored background due to the disabled state blending in with white
        backgrounds. If you need white text, simply add the white--text class.
      </Typography>
    </App>
  );
}
