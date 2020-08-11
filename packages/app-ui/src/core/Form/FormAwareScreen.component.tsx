import React, { PropsWithChildren, ReactNode } from 'react';
import Screen, { ScreenProps } from './../Screen/Screen.component';
import FormFloatingActions from './FormFloatingActions.component'
import Form from './Form.component'
import { UseFormMethods, UseFormOptions } from 'react-hook-form'

type FormAwareScreenProps<T> = ScreenProps & {
  children?: ReactNode;
  direction?: string;
  defaultValues?: UseFormOptions<T>["defaultValues"];
  onSubmit: (values: T) => void;
  config: UseFormMethods<T>;
}

const FormAwareScreen = <T, >({children, direction, config, onSubmit, defaultValues}: PropsWithChildren<FormAwareScreenProps<T>>) => {
  const { formState: {isDirty}, reset } = config
  return (
    <Screen direction={direction}>
      <Form onSubmit={onSubmit} config={config}>
        {children}
        {isDirty && <FormFloatingActions onCancel={() => reset(defaultValues)} />}
      </Form>
    </Screen>
  )
}

export default FormAwareScreen