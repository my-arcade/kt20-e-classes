import React, { ReactElement, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react';
import { store } from '@models';

type Inputs = {
  email: string;
  password: string;
}

function LoginScreen() : ReactElement {
  const { loginStore } = store;
  const authenticated = loginStore.authenticated;
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data : Inputs) => {
    loginStore.login(data)
  }

  useEffect(() => {
    loginStore.checkAuthentication();
  }, [])

  return (
    <div>
      <div>Login</div>
      <div>authenticated: {`${authenticated}`}</div>
      {authenticated && <div>name: {`${loginStore.user.name}`}</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" ref={register} />
        <input name="password" ref={register} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default observer(LoginScreen)