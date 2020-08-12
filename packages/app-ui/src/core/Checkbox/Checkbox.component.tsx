import React, { FC } from 'react'
import Check from 'rc-checkbox'
import styled from 'styled-components'

type CheckboxProps = {
  value?: boolean;
  disabled?: boolean;
  onChange: (value: boolean) => void;
  label?: string;
}

const Container = styled.div`
`

const Checkbox : FC<CheckboxProps> = ({value, label, onChange, disabled}) => {
  return (
    <Container>
      <Check disabled={disabled} checked={value || false} onChange={onChange ? (e : Event) => onChange(e.target?.checked) : undefined} />
      {label && <div>{label}</div>}
    </Container>
  )
}

export default Checkbox