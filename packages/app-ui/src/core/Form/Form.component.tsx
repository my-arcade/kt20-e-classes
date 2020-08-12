import React, { PropsWithChildren, ReactNode } from 'react'
import { UseFormMethods } from 'react-hook-form'

type FormProps<T> = {
  config: UseFormMethods<T>,
  onSubmit: (values: Object) => void,
  children?: ReactNode
}

const Form = <T, >({config, onSubmit, children} : PropsWithChildren<FormProps<T>>) => {
  const { reset, handleSubmit } = config

  const onSubmitEnhanced = (values : T) => {
    console.log(values)
    onSubmit(values)
    console.log(reset)
    reset(values)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitEnhanced)}>
        {children}
      </form>
    </>
  )
}


export default Form
