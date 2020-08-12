import React, {ReactElement, useEffect} from 'react'
import { Table, Button, Screen } from '@ui/core';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { store } from '@models';

type RoleScreenProps = {

}

const config = [
  { key: 'name', name: 'Name', sortable: true},
  { key: 'description', name: 'Description' },
  { key: 'edit', name: 'edit', type: 'edit' }
]


function RoleScreen({} : RoleScreenProps) : ReactElement {
  const navigate = useNavigate();
  const { roleStore } = store;

  useEffect(() => {
    roleStore.getPaged(0)
  }, [])

  const actions = [
    <Button key='button-add' onClick={() => navigate('create')} appearance="primary">Add</Button>
  ]
  return (
    <Screen>
      <Table
        onEdit={item => console.log(item)}
        loading={roleStore.paged.loading}
        config={config}
        list={roleStore.paged.list}
        actions={actions}
      />
    </Screen>
  )
}

export default observer(RoleScreen)