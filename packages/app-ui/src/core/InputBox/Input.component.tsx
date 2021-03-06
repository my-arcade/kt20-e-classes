import React, {SyntheticEvent} from "react";
import styled, { css } from "styled-components";
import { colors, typography } from "../theme/styles";

interface InputProps {
  appearance: string;
  hideLabel: boolean;
  icon?: string;
  orientation?: string;
  focused?: boolean;
  error?: boolean;
  label?: string;
  name?: string;
  type: string;
  placeholder?:string;
  onChange?:(event:SyntheticEvent) => void;
  disabled?: boolean;
}

const Label = styled.label<Partial<InputProps>>`
  font-weight: ${({theme}) => theme.typography.weight.regular};
  font-size: ${({theme}) => theme.typography.size.s2}px;
  color: ${({theme}) => theme.colors.text};
`;

const LabelWrapper = styled.div<Partial<InputProps>>`
  margin-bottom: 0.33em;

  ${(props) =>
    props.hideLabel &&
    css`
      border: 0px !important;
      clip: rect(0 0 0 0) !important;
      -webkit-clip-path: inset(100%) !important;
      clip-path: inset(100%) !important;
      height: 1px !important;
      overflow: hidden !important;
      padding: 0px !important;
      position: absolute !important;
      white-space: nowrap !important;
      width: 1px !important;
    `}
`;

const InputText = styled.input`
  ::placeholder {
    color: ${({theme}) => theme.colors.metaText};
    font-weight: ${({theme}) => theme.typography.weight.regular};
  }
  appearance: none;
  border: none;
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  margin: 0;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 3em ${colors.lightest} inset;
  }
`;

const InputWrapper = styled.div<Partial<InputProps>>`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${InputText} {
    background: ${({theme}) => theme.colors.lightest};
    border-radius: 7px;
    color: ${({theme}) => theme.colors.darkest};
    font-size: ${({theme}) => theme.typography.size.s2}px;
    line-height: 20px;
    padding: .715em 1em;

    box-shadow: ${colors.border} 0 0 0 1px inset;

    &:focus { box-shadow: ${colors.primary} 0 0 0 1px inset; }

    ${(props) =>
      props.appearance === "secondary" &&
      css`
        box-shadow: ${colors.mediumlight} 0 0 0 1px inset;

        &:focus {
          box-shadow: ${colors.secondary} 0 0 0 1px inset;
        }
      `}

    ${(props) =>
      props.appearance === "tertiary" &&
      css`
        padding: 0;
        border: none;
        box-shadow: none;
        background: none;

        &:focus {
          box-shadow: none !important;
        }
      `}

    ${(props) =>
      props.appearance === "pill" &&
      css`
        font-size: ${typography.size.s1}px;
        line-height: 16px;
        padding: 0.5em 1em;
        border-radius: 3em;
        background: transparent;

        box-shadow: ${colors.medium} 0 0 0 1px inset;

        &:focus {
          box-shadow: ${colors.secondary} 0 0 0 1px inset;
        }
      `}
  }
  ${(props) =>
    props.error &&
    css`
      color: ${colors.danger};
      background: none;
      transform: translate3d(0%, -50%, 0);
      opacity: 1;
      padding: 0.25em 1.25em 0.25em 0.5em;
    `}

  ${(props) =>
    props.icon &&
    css`
      > svg {
        transition: all 150ms ease-out;
        position: absolute;
        top: 50%;
        height: 1em;
        width: 1em;
        font-size: ${props.appearance === "pill" ? 0.75 : 1}em;
        margin-top: -0.5em;
        z-index: 1;

        background: transparent;

        path {
          transition: all 150ms ease-out;
          fill: ${colors.mediumdark};
        }
      }

      ${InputText}:focus + svg path {
        fill: ${colors.darker};
      }

      ${InputText} {
        padding-left: 2.75em;

        ${props.appearance === "pill" &&
          css`
            padding-left: 2.4em;
          `};
        ${props.appearance === "tertiary" &&
          css`
            padding-left: 1.75em;
          `};
      }
      > svg {
        left: ${props.appearance === "tertiary" ? 0 : 0.8}em;
      }
      ${props.error &&
        css`
          ${InputText} {
            box-shadow: ${colors.danger} 0 0 0 1px inset;
            &:focus {
              box-shadow: ${colors.danger} 0 0 0 1px inset !important;
            }
          }
          svg {
            path {
              fill: ${colors.danger};
            }
          }
        `};
    `}
`;

const InputContainer = styled.div<Partial<InputProps>>`
  ${(props) =>
    props.orientation === "horizontal" &&
    css`
      display: table-row;

      ${LabelWrapper}, ${InputWrapper} {
        display: table-cell;
      }

      ${LabelWrapper} {
        width: 1px;
        padding-right: 20px;
        vertical-align: middle;
      }

      ${InputWrapper} {
        width: auto;
      }
    `}
`;

export const Input = React.forwardRef((props: InputProps, ref) => {
  const {
    label,
    name,
    type,
    hideLabel,
    orientation,
    appearance,
    focused,
  } = props;
  return (
    <InputContainer orientation={orientation}>
      <LabelWrapper hideLabel={hideLabel}>
        <Label appearance={appearance}>
          {label}
        </Label>
      </LabelWrapper>

      <InputWrapper appearance={appearance} focused={focused}>
        <InputText type={type} name={name} ref={ref} {...props} />
      </InputWrapper>
    </InputContainer>
  );
});

Input.defaultProps = {
  label: "Label",
  hideLabel: false,
  orientation: "vertical",
  appearance: "primary",
  focused: false,
  type: "text"
};

export default Input;
