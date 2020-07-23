import styled from 'styled-components';

const Container = styled.div`
  display: ${({hide}) => hide ? 'none' : 'flex'};
`
export default Container