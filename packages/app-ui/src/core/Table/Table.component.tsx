import React, { FC, ReactNode } from 'react'
import Box from './../Box/Box.component'
import styled from 'styled-components'

type ConfigProps = {
  key: string,
  name: string,
  sortable?: boolean,
  transformer?: (item?: { [key: string]: any }) => ReactNode;
}

type TableProps = {
  config: ConfigProps[],
  list: { [key: string]: any }[]
}

const Container = styled(Box)`
  padding: 20px 15px 10px 15px;
  background-color: ${({theme}) => theme.colors.clearBackground};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderCell = styled.div`
  color: ${({theme}) => theme.colors.metaText};
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 30px;
`

const Cell = styled.div`
  display: flex;
  flex: 1;
  color: ${({theme}) => theme.colors.text};
`

const Divider = styled.div`
  background-color: ${({theme}) => theme.colors.dividerColor};
  width: 100%;
  height: 1px;
`

const Table : FC<TableProps> = ({ config, list }) => {
  return (
    <Container>
      <Header>
        {config.map(cell => (
          <HeaderCell key={cell.key}>
            <div>{cell.name}</div>
          </HeaderCell>
        ))}
      </Header>
      <Content>
        {list.map(item => (
          <>
            <Divider />
            <Row key={item.id}>
              {config.map(cell => (
                <Cell key={cell.key}>
                  <div>{cell.transformer ? cell.transformer(item) : item[cell.key]}</div>
                </Cell>
              ))}
            </Row>
          </>
        ))}
      </Content>
    </Container>
  )
}

export default Table