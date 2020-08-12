import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Checkbox from './../Checkbox/Checkbox.component'

export type ConfigProps = {
  key: string,
  name: string,
  sortable?: boolean,
  transformer?: (item?: { [key: string]: any }) => ReactNode;
  type?: 'edit'
}

type HeaderProps = {
  config: ConfigProps[];
  loading?: boolean;
}

const Header = styled.thead`
`


const HeaderCell = styled.th`
  color: ${({theme}) => theme.colors.metaText};
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
`

const HeaderProxy : FC<HeaderProps> = ({ config, loading }) => {
  return (
    <Header>
      <tr>
        <HeaderCell key={'checkbox'}>
          <Checkbox disabled={loading} />
        </HeaderCell>
        {config.map(cell => (
          <HeaderCell key={cell.key}>
            <div>{cell.name}</div>
          </HeaderCell>
        ))}
      </tr>
    </Header>
  )
}

export default HeaderProxy