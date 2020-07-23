import React, { MouseEvent } from 'react';
import styled, { DefaultTheme } from 'styled-components';

// not finished 

interface ButtonProps {
  readonly danger: boolean,
  readonly disabled: boolean,
  readonly onClick: (event: MouseEvent<HTMLElement>) => void,
  readonly type: 'hollow' | 'regular',
  readonly size: 'small' | 'regular' | 'large',
  readonly theme: DefaultTheme
}

// const defaultProps : ButtonProps = {
//   type: 'hollow',
//   size: 'regular',
//   danger: false,
//   disabled: false,
//   onClick: () => {}
// }

const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${({ theme, danger, disabled }) => disabled ? theme.metaText : (danger ? theme.danger : theme.primary)};
  color: white;
  border: 1px solid transparent;
  outline: none;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
  white-space: nowrap;
  padding: 14px;
  min-height: 48px;
  min-width: 212px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
`;

// TODO add default props
// = defaultProps
const Button = ({...props} : ButtonProps) => (
  <ButtonStyled {...props} /> 
);

export default Button;
