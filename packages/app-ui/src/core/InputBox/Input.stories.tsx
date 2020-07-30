import React from "react";
import { action } from "@storybook/addon-actions";

import { Input } from "./Input.component";

const onChange = action("change");

export default {
  title: "Design System/forms/Input",
  component: Input,
};
const initialArgs = {
  label: "label",
  value: "value",
  appearance: "pill",
  orientation: "horizontal",
  hideLabel: false,
};

export const Basic = (args:any) => <Input {...initialArgs} {...args} />;

export const All = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Input id="Default" value="Default" label="Email" hideLabel icon="email" onChange={onChange} />
    <Input
      id="Secondary"
      value="Secondary"
      label="Email"
      hideLabel
      icon="email"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Secondary-with-label"
      value="Secondary"
      label="Label secondary"
      icon="email"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Tertiary"
      value="Tertiary"
      label="Email"
      hideLabel
      icon="email"
      appearance="tertiary"
      onChange={onChange}
    />
    <Input
      id="Pill"
      value="Pill"
      label="Search"
      hideLabel
      icon="search"
      appearance="pill"
      onChange={onChange}
    />
    <Input id="Code" value="Code" label="Code" hideLabel appearance="code" onChange={onChange} />
    <Input
      id="Code-horizontal"
      value="Code"
      appearance="code"
      orientation="horizontal"
      onChange={onChange}
      label="horizontal"
    />
    <Input
      id="Code-secondary-horizontal"
      value="Code"
      appearance="secondary"
      orientation="horizontal"
      onChange={onChange}
      label="horizontal"
    />
  </form>
);

export const Default = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Input
      id="Placeholder"
      label="Input with placeholder"
      hideLabel
      placeholder="Placeholder"
      onChange={onChange}
    />
    <Input
      id="With-value"
      value="With value"
      label="Input with value"
      hideLabel
      onChange={onChange}
    />
    <Input
      id="Disabled"
      value="Disabled"
      label="Disabled input"
      hideLabel
      disabled
      onChange={onChange}
    />
    <Input
      id="Icon"
      value="Icon"
      label="Input with icon"
      hideLabel
      icon="email"
      onChange={onChange}
    />
    <Input
      id="Error"
      label="Input with error"
      hideLabel
      placeholder="Error"
      error="Error in the input"
      onChange={onChange}
    />
    <Input
      id="Error with icon"
      label="Input with error and icon"
      hideLabel
      placeholder="Error with icon"
      icon="email"
      error="Error in the input"
      onChange={onChange}
    />
  </form>
);

export const Secondary = () => (
  <form style={{ background: '#ffffff', padding: '3em' }}>
    <Input
      id="Placeholder"
      label="Input with placeholder"
      hideLabel
      placeholder="Placeholder"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="With-value"
      value="With value"
      label="Input with value"
      hideLabel
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Disabled"
      value="Disabled"
      label="Disabled input"
      hideLabel
      disabled
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Icon"
      value="Icon"
      label="Input with icon"
      hideLabel
      icon="email"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Error"
      label="Input with error"
      hideLabel
      placeholder="Error"
      error="There's an error with the input"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="With-label"
      value="With value"
      label="Label secondary"
      appearance="secondary"
      onChange={onChange}
    />
  </form>
);

export const Tertiary = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Input
      id="Placeholder"
      label="Input with placeholder"
      hideLabel
      placeholder="Placeholder"
      appearance="tertiary"
      onChange={onChange}
    />
    <Input
      id="With-value"
      value="With value"
      label="Input with value"
      hideLabel
      appearance="tertiary"
      onChange={onChange}
    />
    <Input
      id="Disabled"
      value="Disabled"
      label="Disabled input"
      hideLabel
      disabled
      appearance="tertiary"
      onChange={onChange}
    />
    <Input
      id="Icon"
      value="Icon"
      label="Input with icon"
      hideLabel
      icon="email"
      appearance="tertiary"
      onChange={onChange}
    />
    <Input
      id="Error"
      label="Input with error"
      hideLabel
      placeholder="Error"
      error="There's an error with the input"
      appearance="tertiary"
      onChange={onChange}
    />
  </form>
);

export const Pill = () => (
  <Input
    id="Pill"
    value="Pill"
    label="Search"
    hideLabel
    icon="search"
    appearance="pill"
    onChange={onChange}
  />
);

export const Code = () => (
  <form style={{ background: '#EEEEEE', padding: '3em' }}>
    <Input
      id="Code-placeholder"
      placeholder="Code placeholder"
      label="Code placeholder"
      hideLabel
      appearance="code"
      onChange={onChange}
    />
    <Input id="Code" value="Code" label="Code" hideLabel appearance="code" onChange={onChange} />
    <Input
      id="Code-with-error"
      placeholder="Code"
      label="Code"
      hideLabel
      appearance="code"
      error="Does not compute lorem ipsum dolor sit amet consecatur "
      onChange={onChange}
    />
    <Input
      id="Code-with-error-and-label"
      placeholder="Code"
      appearance="code"
      orientation="horizontal"
      error="Does not compute lorem ipsum dolor sit amet consecatur "
      onChange={onChange}
      label="horizontal"
    />
  </form>
);
