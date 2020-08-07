// react libraries
import React from "react";

// third party libraries
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

// components
import RadioButton from "./RadioButton.component";
import theme from "../theme";

const onChange = (handler: any) => (evt: any) => {
  evt.preventDefault();
  handler(evt);
};
const props = () => ({
  id: text("Id", "RadioButton"),
  appearance: text("Appearance", "primary"),
  label: text("Label", "Radio Button"),
  onChange: onChange(action("onChange")),
  hideLabel: boolean("hideLabel", false),
  theme,
});

export default {
  title: "Design System/forms/RadioButton",
  component: RadioButton,
  decorators: [withKnobs],
};
export const Basic = (args: any) => <RadioButton {...args} {...props()} />;

export const All = () => (
  <form>
    <RadioButton
      id="school"
      label="school"
      value="school"
      checked
      onChange={onChange}
      appearance="primary"
      theme={theme}
    />
    <RadioButton
      id="subject"
      label="subject"
      value="subject"
      onChange={onChange}
      appearance="primary"
      theme={theme}
    />
    <RadioButton
      id="subject"
      label="subject"
      description="Take all subjects"
      value="subject"
      onChange={onChange}
      appearance="primary"
      theme={theme}
    />
    <RadioButton
      id="school"
      label="school"
      value="school"
      onChange={onChange}
      checked
      appearance="secondary"
      theme={theme}
    />
    <RadioButton
      id="subject"
      label="subject"
      value="subject"
      onChange={onChange}
      appearance="secondary"
      theme={theme}
    />
  </form>
);

export const Unchecked = () => (
  <RadioButton
    id="unchecked"
    label="Unchecked"
    hideLabel={true}
    value="unchecked"
    appearance="secondary"
    theme={theme}
  />
);

export const Checked = () => (
  <RadioButton
    id="checked"
    label="checked"
    hideLabel={true}
    value="checked"
    appearance="primary"
    theme={theme}
    checked={true}
  />
);
