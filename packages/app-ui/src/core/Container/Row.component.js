import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({flex}) => flex ? flex : 1};
`
export default Row