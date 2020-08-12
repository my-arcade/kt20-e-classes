import React, { FC, useEffect }  from 'react'
import { observer } from 'mobx-react'
import { useNavigate } from 'react-router-dom';
import { store } from '@models'

const Secured : FC<{}> = ({children}) => {
  const { loginStore } = store
  const navigate = useNavigate();

  useEffect(() => {
    if(!loginStore.authenticated) {
      loginStore.provisionAuthentication()
    }
  }, [])

  useEffect(() => {
    if(!loginStore.loading && !loginStore.authenticated) {
      navigate('/login')
    }
  }, [loginStore.authenticated, loginStore.loading])

  return (
    <>
    {loginStore.authenticated && children}

    </>
  )
}

export default observer(Secured);