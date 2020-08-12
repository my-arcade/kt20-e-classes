import React, { ReactElement, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { store } from '@models';
import { Box, Text, Input, Button, Margin } from '@ui/core';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  email: string;
  password: string;
};

const Screen = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerBox = styled(Box)`
  height: 70vh;
  width: 450px;
  background-color: ${({ theme }) => theme.colors.clearBackground};
  padding: 0px;
  margin-bottom: 20px;

  position: relative;
`;

const Header = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 18%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.clearText};
  font-weight: ${({ theme }) => theme.typography.weight.black};
  font-size: 30px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  bottom: 18px;
  left: 25px;
  right: 25px;
  position: absolute;
`;

const MetaRight = styled.div`
  display: flex;
`;

function LoginScreen(): ReactElement {
  const { loginStore } = store;
  const { register, handleSubmit } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit = (data: Inputs) => {
    loginStore.login(data);
  };

  useEffect(() => {
    if (!loginStore.triedAuthentication) {
      loginStore.provisionAuthentication().then(() => {
        navigate('/');
      });
    }
  }, []);

  return (
    <Screen>
      <>
        <ContainerBox borderRadius={15}>
          <Header>
            <Title>Kt20eclass</Title>
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Text size={20}>Log in</Text>
            <Margin bottom={20}>
              <Text>to continue to Kt20eclass</Text>
            </Margin>
            <Input label="Enter your email" name="email" ref={register} />
            <Margin top={10}>
              <Input type="password" label="Enter your password" name="password" ref={register} />
            </Margin>
            <Margin top={20}>
              <Button appearance="primary" type="submit">
                Login
              </Button>
            </Margin>
          </Form>
          <MetaContainer>
            <Text meta>English</Text>
            <MetaRight>
              <Margin right={10}>
                <Text meta>Help</Text>
              </Margin>
              <Margin right={10}>
                <Text meta>Privacy</Text>
              </Margin>
              <Text meta>Terms</Text>
            </MetaRight>
          </MetaContainer>
        </ContainerBox>
        <Text size={15}>Powered by Kt20eclass</Text>
      </>
    </Screen>
  );
}

export default observer(LoginScreen);
