import React from 'react';

import { Avatar } from './Avatar.component';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
};

export const Basic = (args: any) => <Avatar {...args} />;

export const large = () => (
  <div>
    <Avatar isLoading size="large" />
    <Avatar size="large" username="Charles Kato" />
    <Avatar
      size="large"
      username="Charles Kato"
      src="https://avatars1.githubusercontent.com/u/1590202"
    />
  </div>
);

export const medium = () => (
  <div>
    <Avatar isLoading />
    <Avatar username="Charles Kato" />
    <Avatar username="Charles Kato" src="https://avatars1.githubusercontent.com/u/1590202" />
  </div>
);

export const small = () => (
  <div>
    <Avatar isLoading size="small" />
    <Avatar size="small" username="Charles Kato" />
    <Avatar
      size="small"
      username="Charles Kato"
      src="https://avatars1.githubusercontent.com/u/1590202"
    />
  </div>
);

export const tiny = () => (
  <div>
    <Avatar isLoading size="tiny" />
    <Avatar size="tiny" username="Charles Kato" />
    <Avatar
      size="tiny"
      username="Charles Kato"
      src="https://avatars1.githubusercontent.com/u/1590202"
    />
  </div>
);
