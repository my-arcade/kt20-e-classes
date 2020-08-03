import React, { ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { store } from '@models';
import { Box, Text } from '@ui/core';
import styled from 'styled-components';

type Inputs = {
  email: string;
  password: string;
}

const Screen = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ContainerBox = styled(Box)`
  height: 70vh;
  width: 450px;
`

const Header = styled.div`
  background: ${({theme}) => theme.colors.primary};
  height:18%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px; 
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled(Text)`
  color: ${({theme}) => theme.colors.clearText};
  font-weight: ${({theme}) => theme.typography.weight.black};
  font-size: 30px;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function LoginScreen() : ReactElement {
  const { loginStore } = store;
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data : Inputs) => {
    loginStore.login(data)
  }

  useEffect(() => {
    loginStore.provisionAuthentication();
  }, [])

  return (
    <Screen>
      <>
        <ContainerBox borderRadius={15}>
          <Header>
            <Title>Knolyx</Title>
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Text size={20}>Log in</Text>
            <Text>to continue to Knolyx</Text>
            <input name="email" ref={register} />
            <input name="password" ref={register} />
            <input type="submit" />
          </Form>
          {/* <div>
            <Text meta>English</Text>
            <>
              <Text meta>Help</Text>
              <Text meta>Privacy</Text>
              <Text meta>Terms</Text>
            </>
          </div> */}
        </ContainerBox>
        <Text size={15}>Powered by Knolyx</Text>
      </>
    </Screen>
  )
}

export default observer(LoginScreen)