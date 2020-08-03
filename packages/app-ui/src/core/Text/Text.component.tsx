import React, { FC } from 'react'
import styled, { DefaultTheme } from 'styled-components'

interface TextProps {
  readonly size?: number;
  readonly meta?: boolean;
  readonly bold?: boolean;
  readonly children?: string;
  readonly theme?: DefaultTheme;
  readonly className?: string;
}

const CustomDiv : FC<TextProps> = ({children, className} : TextProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const Text = styled(CustomDiv)<TextProps>`
  font-size: ${({size}: TextProps) => size ||  16}px;
  color: ${({meta, theme}: TextProps) => !meta ? theme.colors.text : theme.colors.metaText};
  font-weight: ${({bold}: TextProps) => bold ? 'bold' : 'normal'};
  font-family: ${({theme}: TextProps) => theme.typography.type.primary}; 
`
export default Text;