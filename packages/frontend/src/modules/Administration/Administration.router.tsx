import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';

import RoleRouter from './Role/Role.router'
import UserRouter from './User/User.router'

const AdministrationRouter : FC<{}> = () => {
  return (
    <>
      <div>Sidebar</div>
      <Routes>
        <Route path="/" element={<div>Administration</div>} />
        <Route path="/user/*" element={<UserRouter />} />
        <Route path="/role/*" element={<RoleRouter />} />
      </Routes>
    </>
  )
}


export default AdministrationRouter
