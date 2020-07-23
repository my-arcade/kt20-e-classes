import styled from 'styled-components'
import React from 'react'
import Text from './../Text/Text.component'
import Avatar from './Avatar.component'
const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`


export default ({name, email, avatar}) => (
  <Container>
    <Avatar {...avatar} name={name} />
    <Content>
      <Text bold size={13}>{name}</Text>
      <Text bold size={12} meta>{email}</Text>
    </Content>
  </Container>
)