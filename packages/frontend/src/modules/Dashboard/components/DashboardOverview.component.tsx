import React, { FC } from 'react'
import { ActionBox, Text, Skeleton, ActionBoxProps } from '@ui/core'

const DashboardOverview : FC<ActionBoxProps & {loading?: boolean}> = ({ loading, ...props }) => {
  return (
    <ActionBox {...props} title='Overview'>
      <Text size={30}>{!loading ? 'Really' : <Skeleton />}</Text>
      <Text size={20}>{!loading ? 'Really' : <Skeleton />}</Text>
      <Text size={10} meta>{!loading ? 'Really' : <Skeleton />}</Text>
    </ActionBox>
  )
}


export default DashboardOverview
