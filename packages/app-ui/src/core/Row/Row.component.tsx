import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Row = styled.div<{$flex?: number, $marginRight?: number}>`
  display: flex;
  flex-direction: column;
  flex: ${({$flex}) => $flex ? $flex : 1};
  margin-right: ${({$marginRight}) => $marginRight ? $marginRight : 0}px;
`


const RowProxy : FC<{flex?: number, marginRight?: number, children?: ReactNode}> = ({flex, marginRight, children}) => (
  <Row $flex={flex} $marginRight={marginRight}>{children}</Row>
)

export default RowProxy