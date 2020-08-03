import React from 'react'
import styled from 'styled-components';
import { Text } from '@ui/core';
import { useNavigate } from 'react-router-dom';

interface SidebarItemType {
  name: string;
  key: string;
  active?: boolean;
  href?: string;
  items?: SidebarItemType[];
}

interface SidebarProps {
  collapsed?: boolean;
  items: SidebarItemType[];
}

const Container = styled.div`
  width: 210px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
  box-shadow: 0 3px 3px rgba(0,0,0,0.01);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Items = styled.div`
  margin-top: 30px;
  padding: 15px;
`

const Item = styled.div<{$active: boolean}>`
  cursor: pointer;
  padding: 16px;
  border-radius: 10px;
  background-color: ${({$active, theme}) => $active ? theme.colors.clearText : 'inherit'};
`

const MetaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

const Sidebar : React.FC<SidebarProps> = ({collapsed, items} = {collapsed: false, items: []}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Items>
        {items.map(({name, key, active, href}) => (
          <Item onClick={!!href ? () => navigate(href) : () => {}} $active={active} key={key}>
            <Text meta={!active} size={18}>{name}</Text>
          </Item>
        ))}
      </Items>
      <MetaContainer>
        {!collapsed && <Text meta>Powered by Knolyx</Text>}
        {collapsed && <Text meta>More</Text>}
      </MetaContainer>
    </Container>
  )
}

export default Sidebar;