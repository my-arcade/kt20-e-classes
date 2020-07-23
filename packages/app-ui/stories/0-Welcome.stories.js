import React from 'react';
import { linkTo } from '@storybook/addon-links';

const Welcome = () => (
  <p>Welcome to our design system!</p>
)

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to Storybook',
};
