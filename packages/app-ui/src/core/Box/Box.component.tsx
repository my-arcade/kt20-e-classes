import styled from 'styled-components';

export type BoxProps = {
  readonly fill?: number;
  readonly borderRadius?: number;
}

const Box = styled.div<Partial<BoxProps>>`
  background-color: ${({theme}) => theme.colors.background};
  min-width: 50px;
  min-height: 50px;
  height: fit-content;
  border-radius: ${({borderRadius}) => borderRadius || 10}px;
  flex: ${({fill}) => fill ? 1 : 'initial'};  
  padding: 20px 10px 7px 10px;
`
// box-shadow: 0 3px 3px rgba(0,0,0,0.01);
export default Box