import styled from 'styled-components';

const Box = styled.div`
  background-color: ${({theme}) => theme.background};
  min-width: 10px;
  min-height: 10px;
  height: fit-content;
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
  flex: ${({fillSpace}) => fillSpace ? 1 : 'initial'};
  margin-left: ${({marginLeft}) => marginLeft ? marginLeft : 0}px;
  margin-right: ${({marginRight}) => marginRight ? marginRight : 0}px;
`

export default Box