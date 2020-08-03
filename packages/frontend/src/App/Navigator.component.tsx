import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Secured from './Secured.component';
import Header from './Header.component';
import Sidebar from './Sidebar.component';

// App routers
import AuthenticationRouter from '@modules/Authentication/Authentication.router'
import AdministrationRouter from '@modules/Administration/Administration.router'

const Container = styled.div`
  display: flex;
  flex: 1;
`

const Screen = styled.div`
  display: flex;
  flex: 1;
  background-color: ${({theme}) => theme.colors.clearBackground};
`

const sidebarItems = [
  {key: 'dashboard', name: 'Dashboard', href: '/'},
  {key: 'library', name: 'Library', active: true},
  {key: 'management', name: 'Management', href: '/administration'},
  {key: 'communities', href: '/', name: 'Communities'}
]

const Home : FC<{}> = () => {
  return (<div>Dashboard</div>)
}

const Navigator : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/login" element={<AuthenticationRouter />} />
      <Secured>
        <Header />
        <Container>
          <Sidebar items={sidebarItems} />
          <Screen>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="administration/*" element={<AdministrationRouter />} />
              <Route path="*" element={<div>Not found </div>} />
            </Routes>
          </Screen>
        </Container>
      </Secured>
  </Routes>
  )
}

export default Navigator;
  