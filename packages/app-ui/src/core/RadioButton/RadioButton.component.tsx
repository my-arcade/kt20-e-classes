// React libraries
import React, { SyntheticEvent } from "react";

// third party libraries
import styled, { DefaultTheme, css } from "styled-components";

// helper functions
import generateId from "../utils/uniqueid.utils";

interface RadioButtonProps {
  appearance: string;
  id: string;
  value?: string;
  label?: string;
  hideLabel?: boolean;
  description?: string;
  theme: DefaultTheme;
  radioColor?: string;
  checked?: boolean;
  onChange?: (event: SyntheticEvent) => void;
}

const Label = styled.label<Partial<RadioButtonProps>>`
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.size.s2}px;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  position: relative;
  height: 1em;
  display: flex;
  align-items: center;
`;

const OptionalText = styled.span<Partial<RadioButtonProps>>`
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

const LabelText = styled.span``;

const Description = styled.div<Partial<RadioButtonProps>>`
  font-size: ${({ theme }) => theme.typography.size.s1}px;
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  color: ${({ theme }) => theme.colors.mediumdark};
  margin-top: 4px;
  margin-left: calc(${({ theme }) => theme.typography.size.s2}px + 0.4em);
  width: 100%;
`;

const Input = styled.input.attrs({ type: "radio" })<RadioButtonProps>`
  margin: 0 0.4em 0 0;
  font-size: initial;
  opacity: 0;

  & + ${LabelText} {
    &:before,
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      height: 1em;
      width: 1em;
      content: "";
      display: block;
      border-radius: 3em;
    }
  }

  & + ${LabelText}:before {
    box-shadow: ${({ theme }) => theme.colors.mediumdark} 0 0 0 1px inset;
  }

  &:focus + ${LabelText}:before {
    box-shadow: ${({ radioColor }) => radioColor} 0 0 0 1px inset;
  }

  &:checked + ${LabelText}:before {
    box-shadow: ${({ radioColor }) => radioColor} 0 0 0 1px inset;
  }

  &:checked:focus + ${LabelText}:before {
    box-shadow: ${({ radioColor }) => radioColor} 0 0 0 1px inset,
      rgba(${({ radioColor }) => radioColor}, 0.3) 0 0 5px 2px;
  }

  & + ${LabelText}:after {
    transition: all 150ms ease-out;
    transform: scale3d(0, 0, 1);

    height: 10px;
    margin-left: 2px;
    margin-top: 2px;
    width: 10px;

    opacity: 0;
  }

  &:checked + ${LabelText}:after {
    transform: scale3d(1, 1, 1);
    background: ${({ radioColor }) => radioColor};
    opacity: 1;
  }
`;

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const RadioButton = (props: RadioButtonProps) => {
  const { appearance, id, label, description, hideLabel, value, theme } = props;
  const radioColor = theme.colors[appearance];
  let descriptionId;
  let ariaDescribedBy;

  if (description) {
    descriptionId = `${id}-description`;
    ariaDescribedBy = `${ariaDescribedBy} ${descriptionId}`;
  }

  return (
    <RadioWrapper>
      <Label theme={theme} htmlFor={id}>
        <Input
          {...props}
          id={id}
          aria-describedby={ariaDescribedBy}
          radioColor={radioColor}
          type="radio"
          value={value}
        />
        <LabelText>
          <OptionalText hideLabel={hideLabel}>{label}</OptionalText>
        </LabelText>
      </Label>
      {description && (
        <Description id={descriptionId} theme={theme}>{description}</Description>
      )}
    </RadioWrapper>
  );
};

RadioButton.defaultProps = {
  appearance: "primary",
  value: "",
  label: null,
  hideLabel: false,
  description: null,
  id: generateId(),
  onChange: (() => {}),
};

export default RadioButton;
