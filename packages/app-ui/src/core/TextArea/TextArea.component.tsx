// React libraries
import React, { SyntheticEvent } from "react";

// third party libraries
import styled, { DefaultTheme, css } from "styled-components";

interface TextAreaProps {
  id?: string;
  onChange?: (event: SyntheticEvent) => void;
  labelText?: string;
  hideLabel?: boolean;
  disabled?: boolean;
  name?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
  theme?: DefaultTheme;
  appearance: string;
  orientation?: string;
  value?: any;
}

const Label = styled.label<TextAreaProps>`
  ${({ hideLabel }) =>
    hideLabel &&
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

const LabelWrapper = styled.div<TextAreaProps>`
  margin-bottom: ${({ appearance }) => (appearance === "code" ? 0.5 : 0.33)}em;
  font-weight: ${({ appearance, theme }) =>
    appearance !== "code" && theme.typography.weight.bold};
  font-family: ${({ appearance, theme }) =>
    appearance === "code" && theme.typography.type.code};
  font-size: ${({ appearance, theme }) =>
    appearance === "code"
      ? theme.typography.size.s1
      : theme.typography.size.s2}px;
`;

const TextareaText = styled.textarea<TextAreaProps>`
  ::placeholder: ${({ theme }) => theme.colors.medium};
  appearance: none;
  border: none;
  box-sizing: border-box;
  display: block;
  outline: none;
  width: 100%;
  word-wrap: break-word;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 3em ${({ theme }) => theme.colors.lightest} inset;
  }
`;

const TextareaWrapper = styled.div<TextAreaProps>`
  display: inline-block;
  font-family: ${({ appearance, theme }) =>
    appearance === "code" && theme.typography.type.code};
  font-size: ${({ appearance, theme }) =>
    appearance === "code"
      ? theme.typography.size.s1
      : theme.typography.size.s2}px;
  overflow: hidden;
  position: relative;
  vertical-align: top;
  width: 100%;

  ${TextareaText} {
    background: ${({ theme }) => theme.colors.lightest};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.darkest};
    border: 1px solid ${({ theme }) => theme.colors.darkest};
    font-size: ${({ theme }) => theme.typography.size.s2}px;
    line-height: 20px;
    padding: 0.7111em 1em;

    &:focus {
      box-shadow: ${({ theme }) => theme.colors.primary} 0 0 0 1px inset;
      border: none;
    }

    ${({ appearance }) =>
      appearance === "code" &&
      css`
        font-size: ${({ theme }) => theme.typography.size.s1}px;
        line-height: 16px;
        font-family: ${({ theme }) => theme.typography.type.code};
        border-radius: 2px;
        background: ${({ theme }) => theme.colors.border};
        padding: 6px 6px;
      `}
  }
`;

const TextareaContainer = styled.div<TextAreaProps>`
  ${({ orientation }) =>
    orientation === "horizontal" &&
    css`
      display: table-row;

      ${LabelWrapper}, ${TextareaWrapper} {
        display: table-cell;
      }

      ${LabelWrapper} {
        width: 1px;
        padding-right: 20px;
      }

      ${TextareaWrapper} {
        width: auto;
      }
    `}
`;

const TextArea = (props: TextAreaProps) => {
  const {
    id,
    value,
    labelText,
    hideLabel,
    appearance,
    orientation,
    theme,
  } = props;

  return (
    <TextareaContainer orientation={orientation} appearance={appearance}>
      <LabelWrapper appearance={appearance} hideLabel={hideLabel} theme={theme}>
        <Label htmlFor={id} hideLabel={hideLabel} appearance={appearance}>
          {labelText}
        </Label>
      </LabelWrapper>
      <TextareaWrapper appearance={appearance} theme={theme}>
        <TextareaText id={id} value={value} rows={7} {...props} />
      </TextareaWrapper>
    </TextareaContainer>
  );
};

TextArea.defaultProps = {
  disabled: false,
  placeholder: "",
  rows: 4,
  cols: 50,
};

export default TextArea;
