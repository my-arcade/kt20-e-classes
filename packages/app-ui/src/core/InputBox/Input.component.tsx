import React from "react";
import styled, { css } from "styled-components";
import { colors, typography, spacing } from "../theme/styles";

interface InputProps {
  appearance: string;
  hideLabel: boolean;
  orientation?: string;
  error?: string;
  focused?: boolean;
  className?: string;
}

const Label = styled.label<Partial<InputProps>>`
  font-weight: ${(props) =>
    props.appearance !== "code" && typography.weight.bold};
  font-family: ${(props) =>
    props.appearance === "code" && typography.type.code};
  font-size: ${(props) =>
    props.appearance === "code" ? typography.size.s1 : typography.size.s2}px;
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

const InputText = styled.input.attrs({ type: "text" })`
  ::placeholder {
    color: ${colors.mediumdark};
    font-weight: ${typography.weight.bold};
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

const Error = styled.div`
  position: absolute;
  right: 0;
`;

const InputWrapper = styled.div<Partial<InputProps>>`
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${InputText} {
    background: ${colors.lightest};
    border-radius: 0;
    color: ${colors.darkest};
    font-family: ${(props) =>
      props.appearance === "code" && typography.type.code};
    font-size: ${(props) =>
      props.appearance === "code" ? typography.size.s1 : typography.size.s2}px;
    line-height: 20px;
    padding: .715em 1em;

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

    ${(props) =>
      props.appearance === "code" &&
      css`
        font-size: ${typography.size.s2 - 1}px;
        line-height: 16px;
        font-family: ${typography.type.code};
        border-radius: 2px;
        background: rgba(0, 0, 0, 0.05);
        padding: 3px 6px;

        &:focus {
          box-shadow: ${colors.secondary} 0 0 0 1px inset;
        }
      `}
  }

  ${Error} {
    position: absolute;
    top: 50%;
    right: 1px;
    margin-left: 1px;
    transform: translate3d(100%, -50%, 0);
    transition: all 200ms ease-out;
    font-family: ${(props) =>
      props.appearance === "code"
        ? typography.type.code
        : typography.type.primary} ;
    font-size: ${typography.size.s1}px;
    line-height: 1em;
    opacity: 0;
    pointer-events: none;

    background: ${(props) =>
      props.appearance !== "tertiary" && "rgba(255,255,255,.9)"};
    color: ${colors.danger};

    ${(props) =>
      props.appearance === "tertiary" &&
      css`
        right: 0;
      `}
    ${(props) =>
      props.appearance === "code" &&
      css`
        top: -4px;
        right: auto;
        left: 0;
        border-radius: ${spacing.borderRadius.small}px;
        padding: 6px;
      `}
  }

  ${(props) =>
    props.error &&
    css`
    ${Error} {
      color: ${colors.danger};
      background: none;
      transform: translate3d(0%, -50%, 0);
      opacity: 1;
      padding: .25em 1.25em .25em .5em;
    }

    ${InputText}:hover + ${Error},
    ${InputText}:focus + ${Error} {
      opacity: 0;
      transform: translate3d(100%, -50%, 0);
      padding: 0;
    }

    ${props.focused &&
      css`
        ${Error} {
          opacity: 0;
          transform: translate3d(100%, -50%, 0);
        }
      `}

    ${props.appearance === "code" &&
      css`
        ${Error} {
          opacity: 0;
        }
        ${InputText}:hover + ${Error}, ${InputText}:focus + ${Error} {
          transform: translate3d(0%, -100%, 0);
          opacity: 1;
          padding: 0.25em 1.25em 0.25em 0.5em;
        }
      `}

    ${props.appearance !== "tertiary" &&
      css`
        ${InputText} {
          box-shadow: ${colors.danger} 0 0 0 1px inset;
          &:focus {
            box-shadow: ${colors.danger} 0 0 0 1px inset !important;
          }
        }
      `};

    svg {
      path { fill: ${colors.danger}; }
    }
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

export const Input = ({
  id = "",
  value = "",
  label = "Label",
  hideLabel = false,
  orientation = "vertical",
  error = "",
  appearance = "default",
  className = "",
  focused = false,
  lastErrorValue = "",
  ...props
}) => {
  const errorId = `${id}-error`;
  let errorMessage = error;

  if (lastErrorValue) {
    if (value !== lastErrorValue) {
      errorMessage = "";
    }
  }

  return (
    <InputContainer orientation={orientation} className={className}>
      <LabelWrapper hideLabel={hideLabel}>
        <Label htmlFor={id} appearance={appearance}>
          {label}
        </Label>
      </LabelWrapper>

      <InputWrapper
        error={errorMessage}
        data-error={error}
        appearance={appearance}
        focused={focused}
      >
        <InputText
          id={id}
          value={value}
          aria-describedby={errorId}
          aria-invalid={!!error}
          {...props}
        />
        <Error id={errorId}>{error}</Error>
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
