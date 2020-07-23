import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: ${({hide}) => hide ? 'none' : 'flex'};
`

export default class Tab extends React.Component {
  render() {
    const { children, display } = this.props
    return (
      <Container hide={!display}>{children}</Container>
    )
  }
}
