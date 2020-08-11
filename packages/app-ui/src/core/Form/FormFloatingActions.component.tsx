import React from 'react'
import styled from 'styled-components'
import Button from './../Button/Button.component';
import LinkText from './../Text/LinkText.component';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 5vh;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: center;

  right: 0;
  left: 0;
  margin-right: auto;
  margin-left: auto;
`

const FloatingActions = styled.div`
  padding: 20px;
  box-shadow: 0px 4px 25px 0px rgba(74,90,112,0.18);
  border-radius: 8px;
  background: ${({theme}) => theme.colors.clearBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 210px;
`

const Spacer = styled.div`
  margin-top: 5vh;
  height: 80px;
`

const CancelLink = styled(LinkText)`
  margin-right: 5vw;
`

export type FormFloatingActionsProps = {
  onCancel: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const FormFloatingActions : React.FC<FormFloatingActionsProps> = ({onCancel}) => {
  return (
    <>
      <FloatingContainer>
        <FloatingActions>
          <CancelLink onClick={onCancel}>Cancel</CancelLink>
          <Button appearance="primary" type="submit">Submit</Button>
        </FloatingActions>
      </FloatingContainer>
      <Spacer />
    </>
  )
}

export default FormFloatingActions
