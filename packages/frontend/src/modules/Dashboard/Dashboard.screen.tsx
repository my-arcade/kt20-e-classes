import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl';
import { Table, Box } from '@ui/core';
import { Edit } from '@styled-icons/boxicons-regular'

const config = [
  { key: 'info', name: 'Basic info', sortable: true, transformer: (item : { [key: string]: any }) => <div>{item.name}</div> },
  { key: 'job', name: 'Job' },
  { key: 'department', name: 'Department' },
  { key: 'edit', name: 'edit', transformer: () => <Edit size={20} /> }
]

const list = [
  {id: 1, name: 'hello', job: 'SD', department: 'me'},
  {id: 2, name: 'bon', job: 'SD', department: 'no'},
  {id: 3, name: 'jovi', job: 'SD', department: 'me'},
  {id: 4, name: 'jon', job: 'dsa', department: 'dsa'}
]

const Dashboard : FC<{}> = () => {
  return (
    <div style={{ flex: 1}}>
      Dashboard 
      <br />
      <FormattedMessage
        defaultMessage="Greetings, {name}"
        description="Standard greeting"
        values={{name: 'Ionut'}}
      />
      <div style={{margin: '30px'}}>
        <Box padding={30}>
          <Table config={config} list={list} />
        </Box>
      </div>
    </div>
  )
}


export default Dashboard
