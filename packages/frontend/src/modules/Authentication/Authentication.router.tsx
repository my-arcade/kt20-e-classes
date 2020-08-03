import React, { ReactElement } from 'react'
import { Route } from 'react-router-dom'
import Login from './Login.screen'

function AuthenticationRouter() : ReactElement {
  return (
   <Route path="/" element={<Login />} />
  )
}

export default AuthenticationRouter