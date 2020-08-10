import React from "react";
// import { action } from '@storybook/addon-actions';

import { Button } from "./Button.component";
import { Icon } from "../Icon/Icon.component";
import theme from "../theme";

export default {
  title: "Design System/Button",
  component: Button,
};

export const Basic = (args: any) => <Button {...args}>Label</Button>;

export const All = () => (
  <>
    <Button theme={theme} appearance="primary">
      Primary
    </Button>
    <Button theme={theme} appearance="secondary">
      Secondary
    </Button>
    <Button theme={theme} appearance="tertiary">
      Tertiary
    </Button>
    <Button theme={theme} appearance="outline">
      Outline
    </Button>
    <Button theme={theme} appearance="primaryOutline">
      Outline primary
    </Button>
    <Button theme={theme} appearance="secondaryOutline">
      Outline secondary
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <Button theme={theme} appearance="primary">
      Default
    </Button>
    <Button theme={theme} appearance="primary" size="small">
      Small
    </Button>
  </>
);

export const Loading = () => (
  <>
    <Button theme={theme} appearance="primary" isLoading>
      Primary
    </Button>
    <Button theme={theme} appearance="secondary" isLoading>
      Secondary
    </Button>
    <Button theme={theme} appearance="tertiary" isLoading>
      Tertiary
    </Button>
    <Button theme={theme} appearance="outline" isLoading>
      Outline
    </Button>
    <Button
      theme={theme}
      appearance="outline"
      isLoading
      loadingText="Custom..."
    >
      Outline
    </Button>
  </>
);

export const Disabled = () => (
  <>
    <Button theme={theme} appearance="primary" disabled>
      Primary
    </Button>
    <Button theme={theme} appearance="secondary" disabled>
      Secondary
    </Button>
    <Button theme={theme} appearance="tertiary" disabled>
      Tertiary
    </Button>
    <Button theme={theme} appearance="outline" disabled>
      Outline
    </Button>
  </>
);

export const ContainsIcon = () => (
  <>
    <Button theme={theme} appearance="outline" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
    <Button theme={theme} appearance="outline" size="small" containsIcon>
      <Icon icon="link" aria-label="Link" />
    </Button>
  </>
);
