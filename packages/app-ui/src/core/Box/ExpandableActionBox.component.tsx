import React, { FC } from 'react'
import ActionBox, { ActionBoxProps } from './ActionBox.component'
import styled from 'styled-components'
import { DotsHorizontalRounded } from '@styled-icons/boxicons-regular';


type ExpandableActionBoxProps = ActionBoxProps & {
  onExpandClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  expand?: boolean
}

const ActionExpandContainer = styled.div`
  &:hover {
    color: ${({theme}) => theme.colors.primary};
  }
  
  color: ${({theme}) => theme.colors.text};
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

const ExpandableActionBox : FC<ExpandableActionBoxProps> = ({onExpandClick, expand, ...props}) => {
  return (
    <ActionBox {...props}>
      <Wrapper>
        <ActionExpandContainer onClick={onExpandClick}>
          {expand && <DotsHorizontalRounded size={30} />}
        </ActionExpandContainer>
      </Wrapper>
    </ActionBox>
  )
}

export default ExpandableActionBox