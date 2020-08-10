// react libraries
import React from "react";

// third party libraries
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

// components
import TextArea from "./TextArea.component";

const props = () => ({
  placeholder: text("Placeholder", "Type here ..."),
  onChange: ((handler) => (evt: any) => {
    evt.preventDefault();
    handler(evt);
  })(action("onChange")),
  disabled: boolean("Disabled", false),
  appearance: text("appearance", "primary"),
});

export default {
  title: "Design System/forms/TextArea",
  component: TextArea,
  decorators: [withKnobs],
};

export const Basic = () => <TextArea {...props()} />;

export const Disabled = () => <TextArea {...props()} disabled />;
