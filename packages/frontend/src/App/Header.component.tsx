import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  border-bottom-color: ${({ theme }) => theme.colors.clearBackground};
  border-bottom-width: 1px;
  display: flex;
`;

const Logo = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${require('./assets/logo-kt20eclass.svg').default});
  width: 142px;
  height: 50px;
`;

const Profile = styled.div`
  margin-left: 30px;
`;

const LogoContainer = styled.div`
  height: 100%;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const Header: React.FC<{}> = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Content>
        <div>Search...</div>
        <Profile>Lungu Ioan - student pro</Profile>
      </Content>
    </Container>
  );
};

export default Header;
