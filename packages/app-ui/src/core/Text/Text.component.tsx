import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

export interface TextProps {
  readonly size?: number;
  readonly meta?: boolean;
  readonly bold?: boolean;
  readonly children?: ReactNode | string;
  readonly className?: string;
  readonly onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const CustomDiv : FC<TextProps> = ({children, className, onClick} : TextProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}

const Text = styled(CustomDiv)<TextProps>`
  font-size: ${({size}) => size ||  16}px;
  color: ${({meta, theme}) => !meta ? theme.colors.text : theme.colors.metaText};
  font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
  font-family: ${({theme}) => theme.typography.type.primary}; 
`
export default Text;