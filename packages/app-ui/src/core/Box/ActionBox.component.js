import React from 'react'
import Box from './Box.component'
import styled from 'styled-components'
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular';
import { Plus } from '@styled-icons/entypo';

const Text = styled.div`
  font-size: 19px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 18px;
  margin-top: 7px;
`

const ActionIconContainer = styled.div`
  &:hover {
    color: ${({theme}) => theme.text};
  }
  
  color: ${({theme}) => theme.primary};
  background-color: white;
  border-radius: 5px;
  font-weight: bolder;
  padding: 5px;
  cursor: pointer;
`

const ActionExpandContainer = styled.div`
  &:hover {
    color: ${({theme}) => theme.primary};
  }
  
  color: ${({theme}) => theme.text};
  background-color: white;
  border-radius: 5px;
  font-weight: bolder;
  padding: 5px;
  cursor: pointer;

  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  align-self: center;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const noOp = () => {}

const ActionBox = ({title, onClick, children, dot, plus, onExpandClick}) => (
  <Box>
    <Header>
      <Text>{title}</Text>
      {plus && (
        <ActionIconContainer onClick={onClick ? onClick : noOp}>
          <Plus size={20} />
        </ActionIconContainer>
      )}
    </Header>
    {children}
    {dot && (
      <Wrapper>
        <ActionExpandContainer onClick={onExpandClick ? onExpandClick : noOp}>
          {dot && <DotsHorizontalRounded size={30} />}
        </ActionExpandContainer>
      </Wrapper>
    )}
  </Box>
)

export default ActionBox