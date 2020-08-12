import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';

import RolesScreen from './Roles.screen'
import RoleForm from './Role.form'

const RoleRouter : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<RolesScreen />} />
      <Route path="create" element={<RoleForm type='create' />} />
    </Routes>
  )
}


export default RoleRouter
