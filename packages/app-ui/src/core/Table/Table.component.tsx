import React, { FC, ReactNode, useState } from 'react'
import Box from './../Box/Box.component'
import Skeleton from './../Skeleton/Skeleton.component'
import Checkbox from './../Checkbox/Checkbox.component'
import styled from 'styled-components'
import Button from './../Button/Button.component'
import Header, { ConfigProps } from './Header.component'
import Footer from './Footer.component'

type TableProps = {
  config: ConfigProps[],
  list: { [key: string]: any }[],
  actions: ReactNode[],
  onDelete: (ids: string[]) => void,
  loading?: boolean
}

const Container = styled(Box)`
  padding: 20px 15px 10px 15px;
  width: 100%;
`

const Content = styled.tbody`
`

const Row = styled.tr`
`

const Cell = styled.td`
  color: ${({theme}) => theme.colors.text};
  text-align: center; 
  vertical-align: middle;
  height: 60px;

  border-top-color: ${({theme}) => theme.colors.dividerColor};
  border-top-width: 1px;
  border-top-style: solid;
`

const Divider = styled.div`

`

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.clearBackground};

  padding: 20px 30px 20px 30px;
`

const Meta = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const FilterContainer = styled.div`
  margin-right: 20px;
`

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
`

const Table : FC<TableProps> = ({ config, list : dataList, actions: Actions, onDelete, loading }) => {
  const list = loading ? [{}, {}, {}, {}] : dataList
  const [selectedMap, setSelected] = useState({})

  const handleChangeValue = (id, value) => {
    setSelected(prevState => ({...prevState, [id]: value}))
  }

  const handlePageChange = ({selected}) => {
    console.log('page', selected)
    setSelected(prevState => ({}))
  }

  const selected = Object.getOwnPropertyNames(selectedMap)
    .filter(key => selectedMap[key])
    .map(key => key)

  return (
    <Container padding={20}>
      {selected.length === 0 && (
      <Meta>
        <div>Search...</div>
        <ActionContainer>
          <FilterContainer>Filter by: filter here</FilterContainer>
          {Actions}
        </ActionContainer>
      </Meta>
      )}
      {selected.length > 0 && (
      <Meta>
        <div />
        <ActionContainer>
          <Button onClick={() => setSelected({})}>Cancel</Button>
          <Button onClick={() => onDelete(selected)}>Delete</Button>
        </ActionContainer>
      </Meta>
      )}
      <TableContainer>
        <Header loading={loading} config={config} />
        <Content>
          {list.map(item => (
            <>
              <Row key={item.id}>
                <Cell key='checkbox'>
                  <Checkbox
                    disabled={loading}
                    value={selectedMap[item.id]}
                    onChange={value => handleChangeValue(item.id, value)}
                  />
                </Cell>
                {config.map(cell => (
                  <Cell key={cell.key}>
                    <div>{cell.transformer ? cell.transformer(item, loading) : (loading ? <Skeleton /> : item[cell.key])}</div>
                  </Cell>
                ))}
              </Row>
            </>
          ))}
        </Content>
      </TableContainer>
      <Footer page={1} count={300} pageSize={10} onPageChange={handlePageChange} />
    </Container>
  )
}

export default Table