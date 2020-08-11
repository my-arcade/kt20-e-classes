import React, {ReactElement} from 'react'
import { Table, Box, Button } from '@ui/core';
import { useNavigate } from 'react-router-dom';
import { Edit } from '@styled-icons/boxicons-regular'
import styled from 'styled-components'

type RoleScreenProps = {

}

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

const Container = styled.div`
  flex: 1;
`

function RoleScreen({} : RoleScreenProps) : ReactElement {
  const navigate = useNavigate();

  return (
    <Container>
      <div>Role screen</div>
      <Button onClick={() => navigate('create')} appearance="primary">Add</Button>
      <div style={{margin: '30px'}}>
        <Box padding={30}>
          <Table config={config} list={list} />
        </Box>
      </div>
    </Container>
  )
}

export default RoleScreen