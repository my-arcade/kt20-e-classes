import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard.screen';

const DashboardRouter : FC<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}


export default DashboardRouter
