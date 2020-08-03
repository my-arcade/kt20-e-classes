import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';

const UserRouter : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Users</div>} />
    </Routes>
  )
}


export default UserRouter
