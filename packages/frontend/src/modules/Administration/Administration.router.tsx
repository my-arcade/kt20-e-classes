import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '@ui/core';

import { User as UserIcon } from '@styled-icons/boxicons-regular'
import { Pyramid as DepartmentIcon } from '@styled-icons/boxicons-regular'
import { Lock as RoleIcon } from '@styled-icons/boxicons-solid'

import RoleRouter from './Role/Role.router'
import UserRouter from './User/User.router'

const sidebarItems = [
  {
    key: 'user',
    name: 'Users',
    href: 'user',
    icon: <UserIcon size={18} />,
    eq: (pathName: string, href: string) => pathName.indexOf(href) !== -1
  },
  {
    key: 'departments',
    name: 'Department',
    href: 'department',
    icon: <DepartmentIcon size={18} />,
    eq: (pathName: string, href: string) => pathName.indexOf(href) !== -1
  },
  {
    key: 'role',
    name: 'Roles',
    href: 'role',
    icon: <RoleIcon size={18} />,
    eq: (pathName: string, href: string) => pathName.indexOf(href) !== -1
  },
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
