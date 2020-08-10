// react libraries
import React from "react";

// third-party libraries
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

// components
import Link from "./Link.component";
// import theme from "../theme";

const props = () => ({
  href: text('The link href (href)', '#'),
  onClick: (handler => (evt:any) => {
    evt.preventDefault(); 
    handler(evt);
  })(action('onClick')),
  disabled: boolean('Disabled', false),
});

export default {
  title: "Design System/Link",
  component: Link,
  decorators: [withKnobs]
};

export const Basic = () => <Link {...props()}>Link</Link>;
