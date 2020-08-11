import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import UserForm from './User.form';

const UserRouter : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Users</div>} />
      <Route path="create" element={<UserForm />} />
    </Routes>
  )
}


export default UserRouter
