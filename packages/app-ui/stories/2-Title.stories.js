import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from "@storybook/addon-knobs";
import { Title } from './../src/core';

export default {
  title: 'Title',
  component: Title,
  decorators: [withKnobs]
};

export const Text = () => <Title text={text("Label", "Hello Storybook")} />

export const Emoji = () => (
  <Button enabled={true} style={{backgroundColor: 'green'}} onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      
    </span>
  </Button>
);
