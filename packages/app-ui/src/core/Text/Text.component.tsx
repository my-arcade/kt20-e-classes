import styled, { DefaultTheme } from 'styled-components'

interface TextProps {
  readonly size: number;
  readonly meta: boolean;
  readonly bold: boolean;
  readonly theme: DefaultTheme;
}

const Text = styled.div<TextProps>`
  font-size: ${({size}) => size ? size : 16}px;
  color: ${({meta, theme}) => !meta ? theme.colors.text : theme.colors.metaText};
  font-weight: ${({bold}) => bold ? 'bold' : 'regular'};
`

export default Text;