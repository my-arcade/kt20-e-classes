import React, {ReactElement} from 'react'
import { Table, Box, Button, Screen, Skeleton } from '@ui/core';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@styled-icons/boxicons-regular'
import styled from 'styled-components'

type RoleScreenProps = {

}

const config = [
  { key: 'info', name: 'Basic info', sortable: true, transformer: (item : { [key: string]: any }, loading: boolean) => loading ? <Skeleton /> : (<div>{item.name}</div>) },
  { key: 'job', name: 'Job' },
  { key: 'department', name: 'Department' },
  { key: 'edit', name: 'edit', transformer: () => <Edit size={20} /> }
]

const list = [
  {id: 1, name: 'hello lets talk more with a lot of text just because i want it to be fun eah', job: 'SD', department: 'me'},
  {id: 2, name: 'bon', job: 'SD', department: 'no'},
  {id: 3, name: 'jovi', job: 'hello lets talk more with a lot of text just because i want it to be fun eah', department: 'me'},
  {id: 4, name: 'jon', job: 'dsa', department: 'hello lets talk more with a lot of text just because i want it to be fun eah'}
]


function RoleScreen({} : RoleScreenProps) : ReactElement {
  const navigate = useNavigate();

  const actions = [
    <Button key='button-add' onClick={() => navigate('create')} appearance="primary">Add</Button>
  ]
  return (
    <Screen>
      <Table loading config={config} list={list} actions={actions} />
    </Screen>
  )
}

export default RoleScreen