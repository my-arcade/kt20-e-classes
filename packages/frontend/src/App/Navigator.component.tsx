import React, { FC, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Secured from './Secured.component';
import Header from './Header.component';
import { Sidebar, SidebarContext } from '@ui/core';

import { Dashboard as DashboardIcon } from '@styled-icons/boxicons-solid'
import { Settings as SettingsIcon } from '@styled-icons/ionicons-solid'
import { Book as BookIcon } from '@styled-icons/boxicons-solid'

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
  {
    key: 'dashboard',
    name: 'Dashboard',
    href: '/',
    icon: <DashboardIcon size={18} />,
    eq: (pathName: string, href: string) => pathName === href || pathName === '' || pathName == null
  },
  {
    key: 'library',
    name: 'Library',
    href: '/library',
    icon: <BookIcon size={18} />
  },
  {
    key: 'management',
    name: 'Management',
    href: '/administration',
    icon: <SettingsIcon size={18} />,
    eq: (pathName: string, href: string) => pathName.indexOf(href) === 0
  },
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
  