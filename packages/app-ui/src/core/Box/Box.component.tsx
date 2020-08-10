import styled, { DefaultTheme } from 'styled-components';

interface BoxProps {
  readonly fillSpace: number;
  readonly theme: DefaultTheme;
  readonly borderRadius?: number;
  readonly padding?: number;
}

const Box = styled.div<Partial<BoxProps>>`
  background-color: ${({theme} : BoxProps) => theme.colors.background};
  min-width: 10px;
  min-height: 10px;
  height: fit-content;
  border-radius: ${({borderRadius} : BoxProps) => borderRadius || 10}px;
  flex: ${({fillSpace} : BoxProps) => fillSpace ? 1 : 'initial'};
  
  ${({padding} : BoxProps) => padding ? `padding: ${padding}px` : ''};
`
// box-shadow: 0 3px 3px rgba(0,0,0,0.01);
export default Box