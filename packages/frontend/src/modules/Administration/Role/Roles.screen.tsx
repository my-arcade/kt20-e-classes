import React, {ReactElement, useState, useEffect} from 'react'
import { Table, Box, Button, Screen, Skeleton } from '@ui/core';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

type RoleScreenProps = {

}

const config = [
  { key: 'name', name: 'Name', sortable: true},
  { key: 'description', name: 'Description' },
  { key: 'edit', name: 'edit', type: 'edit' }
]

const list = [
]


function RoleScreen({} : RoleScreenProps) : ReactElement {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])

  const actions = [
    <Button key='button-add' onClick={() => navigate('create')} appearance="primary">Add</Button>
  ]
  return (
    <Screen>
      <Table
        onEdit={item => console.log(item)}
        loading={loading}
        config={config}
        list={list}
        actions={actions}
      />
    </Screen>
  )
}

export default RoleScreen