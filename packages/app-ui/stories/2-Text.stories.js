import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from "@storybook/addon-knobs";
import { Text } from '@core';

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs]
};

export const TextSimple = () => <Text text={text("Label", "Hello Storybook")} />
