import React, { FC, ReactNode, MouseEvent } from 'react'
import Text, { TextProps } from './Text.component'
import styled, { DefaultTheme } from 'styled-components'
import { ArrowBack } from '@styled-icons/boxicons-regular'

type LinkTextContainerProps = TextProps & {
  $back?: boolean; // styled components use
  back?: boolean;
  theme?: DefaultTheme;
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  children?: ReactNode;
}

const LinkTextContainer = styled(Text)`
  color: ${({theme, $back}) => $back ? theme.colors.text : theme.colors.primary};
  cursor: pointer;
`

const LinkText : FC<LinkTextContainerProps> = ({children, back, onClick, className}) => {
  return (
    <LinkTextContainer className={className} onClick={onClick} $back={back}>
      {back && <ArrowBack size={14} />}
      {children}
    </LinkTextContainer>
  )
}
export default LinkText