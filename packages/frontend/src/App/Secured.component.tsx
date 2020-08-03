import React from 'react'
import { FC, useEffect } from 'react'

const Secured : FC<{}> = ({children}) => {
  useEffect(() => {
    console.log('did load')
  })

  return (
    <>
    {children}
    </>
  )
}

export default Secured;