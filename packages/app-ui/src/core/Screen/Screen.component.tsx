import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Screen = styled.div<{$direction: string}>`
  display: flex;
  flex-direction: ${({$direction}) => $direction};
  flex: 1;
  position: relative;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
`

export type ScreenProps = {
  children?: ReactNode;
  direction?: string;
}

const ScreenProxy : FC<ScreenProps> = ({children, direction}) => {
  const defaultDirection = direction || 'row';
  return (
    <Screen $direction={defaultDirection}>{children}</Screen>
  )
}

export default ScreenProxy