import React, { FC } from 'react'
import styled from 'styled-components'
import { ActionBox, Text, Skeleton, ActionBoxProps } from '@ui/core'

const DashboardLearningPaths : FC<{loading?: boolean}> = ({ loading, ...props }) => {
  return (
    <ActionBox {...props} title='Learning paths'>
      <Text size={30}>{loading ? 'Really' : <Skeleton />}</Text>
      <Text size={20}>{loading ? 'Really' : <Skeleton />}</Text>
      <Text size={10} meta>{loading ? 'Really' : <Skeleton />}</Text>
    </ActionBox>
  )
}


export default DashboardLearningPaths
