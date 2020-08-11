import React, { FC } from 'react'
import Box, { BoxProps } from './Box.component'
import styled from 'styled-components'
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
    color: ${({theme}) => theme.colors.text};
  }
  
  color: ${({theme}) => theme.colors.primary};
  background-color: white;
  border-radius: 5px;
  font-weight: bolder;
  padding: 5px;
  cursor: pointer;
`

export type ActionBoxProps = BoxProps & {
  title: string,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  action?: 'plus' | 'dots' | 'custom',
  children: React.ReactNode
}

const ActionBox : FC<ActionBoxProps> = ({title, onClick, children, action, ...props}) => (
  <Box {...props}>
    <Header>
      <Text>{title}</Text>
      {action === 'plus' && (
        <ActionIconContainer onClick={onClick}>
          <Plus size={20} />
        </ActionIconContainer>
      )}
      {action === 'dots' && (
        <div>not implemented dots</div>
      )}
      {action === 'custom' && (
        <div>not implemented custom</div>
      )}
    </Header>
    {children}
  </Box>
)

export default ActionBox