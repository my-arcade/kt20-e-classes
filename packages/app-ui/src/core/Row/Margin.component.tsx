import styled from 'styled-components';

export type MarginProps = {
  readonly bottom?: number;
  readonly top?: number;
  readonly left?: number;
  readonly right?: number;
}

const Margin = styled.div<Partial<MarginProps>>`
  margin-bottom: ${({bottom}) => bottom || 0}px;
  margin-top: ${({top}) => top || 0}px;
  margin-left: ${({left}) => left || 0}px;
  margin-right: ${({right}) => right || 0}px;
`

export default Margin