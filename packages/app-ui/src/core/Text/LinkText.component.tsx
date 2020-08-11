import Text from './Text.component'
import styled from 'styled-components'

const LinkText = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
  cursor: pointer;
`

export default LinkText