import React, { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Secured from './Secured.component';
import Header from './Header.component';
import { Sidebar, SidebarContext } from '@ui/core';

// App routers
import AuthenticationRouter from '@modules/Authentication/Authentication.router'
import AdministrationRouter from '@modules/Administration/Administration.router'
import DashboardRouter from '@modules/Dashboard/Dashboard.router'

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


const Navigator : FC<{}> = () => {
  const [noOfSidebars, setNumberOfSidebars] = useState(0)

  const increaseNoOfSidebars = () => setNumberOfSidebars(prevNoOfSidebars => prevNoOfSidebars + 1);
  const decreaseNoOfSidebars = () => setNumberOfSidebars(prevNoOfSidebars => prevNoOfSidebars - 1);

  return (
    <Routes>
      <Route path="login/*" element={<AuthenticationRouter />} />
      <Secured>
        <Header />
        <SidebarContext.Provider value={{noOfSidebars, increaseNoOfSidebars, decreaseNoOfSidebars}}>
          <Container>
            <Sidebar primary items={sidebarItems} />
            <Screen>
              <Routes>
                <Route path="/" element={<DashboardRouter />} />
                <Route path="administration/*" element={<AdministrationRouter />} />
                <Route path="*" element={<div>Not found </div>} />
              </Routes>
            </Screen>
          </Container>
        </SidebarContext.Provider>
      </Secured>
  </Routes>
  )
}

export default Navigator;
  