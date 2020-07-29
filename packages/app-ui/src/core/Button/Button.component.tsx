import React, { MouseEvent } from "react";
import styled, { DefaultTheme } from "styled-components";

// not finished

export interface ButtonProps {
  readonly danger: boolean;
  readonly disabled: boolean;
  readonly onClick: (event: MouseEvent<HTMLElement>) => void;
  readonly size: string;
  readonly theme: DefaultTheme;
  readonly isLoading: boolean;
  readonly containsIcon: boolean;
  readonly appearance: string;
  readonly isLink: boolean;
  readonly ButtonWrapper: any;
  readonly children: React.ReactNode;
  readonly loadingText: string;
}

const Text = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Loading = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  opacity: 0;
`;

const APPEARANCES = {
  PRIMARY: "primary",
  PRIMARY_OUTLINE: "primaryOutline",
  SECONDARY: "secondary",
  SECONDARY_OUTLINE: "secondaryOutline",
  TERTIARY: "tertiary",
  OUTLINE: "outline",
};

const SIZES = {
  SMALL: "small",
  REGULAR: "regular",
  LARGE: "large",
};

const ButtonStyled = styled.button<ButtonProps>`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: ${(props: ButtonProps) =>
    props.size === SIZES.SMALL ? "8px 16px" : "13px 20px"};
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  margin: 0;
  background: transparent;

  font-size: ${(props: ButtonProps) =>
    props.size === SIZES.SMALL
      ? props.theme.typography.size.s1
      : props.theme.typography.size.s2}px;
  font-weight: ${(props: ButtonProps) =>
    props.theme.typography.weight.extrabold};
  line-height: 1;

  ${(props: ButtonProps) =>
    !props.isLoading &&
    `
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 6px 0;
      }

      &:active {
        transform: translate3d(0, 0, 0);
      }

      &:focus {
        box-shadow: rgba${(props.theme.colors.primary, 0.4)} 0 1px 9px 2px;
      }

      &:focus:hover {
        box-shadow: rgba${(props.theme.colors.primary, 0.2)} 0 8px 18px 0px;
      }
    `}

  ${Text} {
    transform: scale3d(1,1,1) translate3d(0,0,0);
    opacity: 1;
  }

  ${Loading} {
    transform: translate3d(0, 100%, 0);
  }

  svg {
    height: ${(props: ButtonProps) =>
      props.size === SIZES.SMALL ? "14" : "16"}px;
    width: ${(props: ButtonProps) =>
      props.size === SIZES.SMALL ? "14" : "16"}px;
    vertical-align: top;
    margin-right: ${(props: ButtonProps) =>
      props.size === SIZES.SMALL ? "4" : "6"}px;
    margin-top: ${(props: ButtonProps) =>
      props.size === SIZES.SMALL ? "-1" : "-2"}px;
    margin-bottom: ${(props: ButtonProps) =>
      props.size === SIZES.SMALL ? "-1" : "-2"}px;

    /* Necessary for js mouse events to not glitch out when hovering on svgs */
    pointer-events: none;
  }

  ${(props: ButtonProps) =>
    props.disabled &&
    `
      cursor: not-allowed !important;
      opacity: 0.5;
      &:hover {
        transform: none;
      }
    `}

  ${(props: ButtonProps) =>
    props.disabled &&
    `
      cursor: default !important;
      pointer-events: none;
      &:hover {
        transform: none;
      }
    `}

  ${(props: ButtonProps) =>
    props.isLoading &&
    `
      cursor: progress !important;
      opacity: 0.7;

      ${Loading} {
        transform: translate3d(0, -50%, 0);
        opacity: 1;
      }

      ${Text} {
        transform: scale3d(0, 0, 1) translate3d(0, -100%, 0);
        opacity: 0;
      }

      &:hover {
        transform: none;
      }
    `}

  ${(props: ButtonProps) =>
    props.containsIcon &&
    `
      svg {
        display: block;
        margin: 0;
      }
      padding: ${props.size === SIZES.SMALL ? "7" : "12"}px;
    `}

  ${(props: ButtonProps) =>
    props.appearance === APPEARANCES.PRIMARY &&
    `
      background: ${props.theme.colors.primary};
      color: ${props.theme.colors.lightest};

      ${!props.isLoading &&
        `
          &:hover {
            background: rgba${(props.theme.colors.primary, 0.5)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: rgba${(props.theme.colors.primary, 0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: rgba${(props.theme.colors.primary, 0.2)} 0 8px 18px 0px;
          }
        `}
    `}

  ${(props: ButtonProps) =>
    props.appearance === APPEARANCES.SECONDARY &&
    `
      background: ${props.theme.colors.secondary};
      color: ${props.theme.colors.lightest};

      ${!props.isLoading &&
        `
          &:hover {
            background: rgba${(props.theme.colors.secondary, 0.5)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: rgba${(props.theme.colors.secondary,
            0.4)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: rgba${(props.theme.colors.secondary,
            0.2)} 0 8px 18px 0px;
          }
        `}
    `}

  ${(props: ButtonProps) =>
    props.appearance === APPEARANCES.TERTIARY &&
    `
      background: ${props.theme.colors.tertiary};
      color: ${props.theme.colors.darkest};

      ${!props.isLoading &&
        `
          &:hover {
            background: rgba${(props.theme.colors.tertiary, 0.5)};
          }
          &:active {
            box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 3em inset;
          }
          &:focus {
            box-shadow: rgba${(props.theme.colors.darkest, 0.15)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: rgba${(props.theme.colors.darkest,
            0.05)} 0 8px 18px 0px;
          }
        `}
    `}

  ${(props: ButtonProps) =>
    props.appearance === APPEARANCES.OUTLINE &&
    `
      box-shadow: ${props.theme.colors.border} 0 0 0 1px inset;
      color: ${props.theme.colors.dark};
      background: transparent;

      ${!props.isLoading &&
        `
          &:hover {
            box-shadow: rgba${(props.theme.colors.border, 0.5)} 0 0 0 1px inset;
          }

          &:active {
            background: rgba${(props.theme.colors.border, 0.4)};
            box-shadow: transparent 0 0 0 1px inset;
            color: ${props.theme.colors.darkest};
          }

          &:active:focus:hover {
            ${
              /* This prevents the semi-transparent border from appearing atop the background */ ""
            }
            background: rgba${(props.theme.colors.border, 0.4)};
            box-shadow:  rgba${(props.theme.colors.darkest,
            0.15)} 0 1px 9px 2px;
          }

          &:focus {
            box-shadow: rgba${(props.theme.colors.border,
            0.15)} 0 0 0 1px inset, 
            rgba${(props.theme.colors.darkest, 0.15)} 0 1px 9px 2px;
          }
          &:focus:hover {
            box-shadow: rgba${(props.theme.colors.border,
            0.15)} 0 0 0 1px inset, 
            rgba${(props.theme.colors.darkest, 0.05)} 0 8px 18px 0px;
          }
        `};
    `};

  ${(props: ButtonProps) =>
    props.appearance === APPEARANCES.PRIMARY_OUTLINE &&
    `
      box-shadow: ${props.theme.colors.primary} 0 0 0 1px inset;
      color: ${props.theme.colors.primary};

      &:hover {
        box-shadow: ${props.theme.colors.primary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${props.theme.colors.primary};
        box-shadow: ${props.theme.colors.primary} 0 0 0 1px inset;
        color: ${props.theme.colors.lightest};
      }
      &:focus {
        box-shadow: ${props.theme.colors.primary} 0 0 0 1px inset, rgba${(props
      .theme.colors.primary,
    0.4)} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${props.theme.colors.primary} 0 0 0 1px inset, rgba${(props
      .theme.colors.primary,
    0.2)} 0 8px 18px 0px;
      }
    `};

  ${(props: ButtonProps) =>
    props.appearance === APPEARANCES.SECONDARY_OUTLINE &&
    `
      box-shadow: ${props.theme.colors.secondary} 0 0 0 1px inset;
      color: ${props.theme.colors.secondary};

      &:hover {
        box-shadow: ${props.theme.colors.secondary} 0 0 0 1px inset;
        background: transparent;
      }

      &:active {
        background: ${props.theme.colors.secondary};
        box-shadow: ${props.theme.colors.secondary} 0 0 0 1px inset;
        color: ${props.theme.colors.lightest};
      }
      &:focus {
        box-shadow: ${props.theme.colors.secondary} 0 0 0 1px inset,
          rgba${(props.theme.colors.secondary, 0.4)} 0 1px 9px 2px;
      }
      &:focus:hover {
        box-shadow: ${props.theme.colors.secondary} 0 0 0 1px inset,
          rgba${(props.theme.colors.secondary, 0.2)} 0 8px 18px 0px;
      }
    `};
`;

const UnStyledButton = styled.button``;
const ButtonLink = styled.a``;

const ButtonComponentPicker = ({
  isLoading = false,
  isLink = false,
  appearance = APPEARANCES.TERTIARY,
  disabled = false,
  containsIcon = false,
  size = SIZES.REGULAR,
  ButtonWrapper = undefined,
  ...rest
}: ButtonProps) => {
  const ButtonComponent = isLink ? ButtonLink : ButtonWrapper || UnStyledButton;
  return <ButtonComponent {...rest} />;
};

export const Button = ({
  children,
  disabled,
  isLoading,
  loadingText,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyled
      as={ButtonComponentPicker}
      disabled={disabled}
      isLoading={isLoading}
      {...rest}
    >
      <>
        <Text>{children}</Text>
        {isLoading && <Loading>{loadingText || "Loading..."}</Loading>}
      </>
    </ButtonStyled>
  );
};

export default Button;
