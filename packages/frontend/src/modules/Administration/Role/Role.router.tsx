import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';

const RoleRouter : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Roles</div>} />
    </Routes>
  )
}


export default RoleRouter
