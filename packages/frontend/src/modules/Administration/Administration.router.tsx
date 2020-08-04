import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '@ui/core';

import RoleRouter from './Role/Role.router'
import UserRouter from './User/User.router'

const sidebarItems = [
  {key: 'dashboard', name: 'Dashboard', href: '/'},
  {key: 'library', name: 'Library', active: true},
  {key: 'management', name: 'Management', href: '/administration'},
  {key: 'communities', href: '/', name: 'Communities'}
]

const AdministrationRouter : FC<{}> = () => {
  return (
    <>
      <Sidebar items={sidebarItems} />
      <Routes>
        <Route path="/" element={<div>Administration</div>} />
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/role/*" element={<RoleRouter />} />
      </Routes>
    </>
  )
}


export default AdministrationRouter
