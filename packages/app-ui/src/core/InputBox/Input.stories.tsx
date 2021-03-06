import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from '@storybook/addon-knobs'

import { Input } from "./Input.component";

const onChange = action("change");

export default {
  title: "Design System/forms/Input",
  component: Input,
  decorators: [withKnobs],
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
    <Input id="Default" label="Email" hideLabel icon="email" onChange={onChange} />
    <Input
      id="Secondary"
      label="Email"
      hideLabel
      icon="email"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Secondary-with-label"
      label="Label secondary"
      icon="email"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Tertiary"
      label="Email"
      hideLabel
      icon="email"
      appearance="tertiary"
      onChange={onChange}
    />
    <Input
      id="Pill"
      label="Search"
      hideLabel
      icon="search"
      appearance="pill"
      onChange={onChange}
    />
    <Input
      id="secondary-horizontal"
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
      label="Input with value"
      hideLabel
      onChange={onChange}
    />
    <Input
      id="Disabled"
      label="Disabled input"
      hideLabel
      disabled
      onChange={onChange}
    />
    <Input
      id="Icon"
      label="Input with icon"
      hideLabel
      icon="email"
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
      label="Input with value"
      hideLabel
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Disabled"
      label="Disabled input"
      hideLabel
      disabled
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="Icon"
      label="Input with icon"
      hideLabel
      icon="email"
      appearance="secondary"
      onChange={onChange}
    />
    <Input
      id="With-label"
      label="Label secondary"
      appearance="secondary"
      onChange={onChange}
    />
  </form>
);

export const Pill = () => (
  <Input
    id="Pill"
    label="Search"
    hideLabel
    icon="search"
    appearance="pill"
    onChange={onChange}
  />
);
