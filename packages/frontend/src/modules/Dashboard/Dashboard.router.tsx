import React, { FC } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';

const DashboardRouter : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Dashboard</div>} />
    </Routes>
  )
}


export default DashboardRouter
