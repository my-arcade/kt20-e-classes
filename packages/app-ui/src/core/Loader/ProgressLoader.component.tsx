import React, { FC, useEffect } from 'react'
import NProgress from 'nprogress'
import styled from 'styled-components'

const Blocker = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: progress;
  z-index: 9999999999999;
`

const ProgressLoader : FC<{loading: boolean}> = ({loading}) => {
  useEffect(() => {
    NProgress.configure({ trickleSpeed: 100 })

    // return () => progress.done()
  }, [])

  useEffect(() => {
    if(loading) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }, [loading])

  return (
    <>
      {loading && <Blocker />}
    </>
  )
}

export default ProgressLoader