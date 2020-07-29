import React, { ComponentProps } from "react";
import styled, { css } from "styled-components";
import { colors, typography } from "../theme/styles";
import { Icon } from "../Icon/Icon.component";
import getInitials from '../utils/getIntials.utils';

interface AvatarProps {
  isLoading: boolean;
  username: string;
  src: string;
  size: keyof typeof sizes;
}

export const sizes = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
};

const Image = styled.div<Partial<AvatarProps>>`
  background: ${(props) => (!props.isLoading ? "transparent" : colors.light)};
  border-radius: 50%;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-transform: uppercase;

  height: ${sizes.medium}px;
  width: ${sizes.medium}px;
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.size === "tiny" &&
    css`
      height: ${sizes.tiny}px;
      width: ${sizes.tiny}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      height: ${sizes.small}px;
      width: ${sizes.small}px;
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      height: ${sizes.large}px;
      width: ${sizes.large}px;
      line-height: ${sizes.large}px;
    `}

  ${(props) =>
    !props.src &&
    css`
      background: ${!props.isLoading && colors.primary};
    `}

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  svg {
    position: relative;
    bottom: -2px;
    height: 100%;
    width: 100%;
    vertical-align: top;
  }
`;

const Initial = styled.div<Partial<AvatarProps>>`
  color: ${colors.lightest};
  text-align: center;

  font-size: ${typography.size.s2}px;
  line-height: ${sizes.medium}px;

  ${(props) =>
    props.size === "tiny" &&
    css`
      font-size: ${typography.size.s1 - 2}px;
      line-height: ${sizes.tiny}px;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: ${typography.size.s1}px;
      line-height: ${sizes.small}px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      font-size: ${typography.size.s3}px;
      line-height: ${sizes.large}px;
    `}
`;

/**
 * The `Avatar` component is where we put all avatars.
 */
export const Avatar = ({
  isLoading = false,
  username = "loading",
  src = "",
  size = "medium",
  ...props
}: AvatarProps) => {
  let avatarFigure = <Icon icon="useralt" />;
  const a11yProps: ComponentProps<typeof Image> = {};

  if (isLoading) {
    a11yProps["aria-busy"] = true;
    a11yProps["aria-label"] = "Loading avatar ...";
  } else if (src) {
    avatarFigure = <img src={src} alt={username} />;
  } else {
    a11yProps["aria-label"] = username;
    avatarFigure = (
      <Initial size={size} aria-hidden="true">
        {getInitials(username)}
      </Initial>
    );
  }

  return (
    <Image
      size={size}
      isLoading={isLoading}
      src={src}
      {...a11yProps}
      {...props}
    >
      {avatarFigure}
    </Image>
  );
};

export default Avatar;
