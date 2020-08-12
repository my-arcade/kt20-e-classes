import React, { useContext, useEffect, ReactNode } from 'react';
import styled from 'styled-components';
import Text from './../Text/Text.component';
import { useNavigate } from 'react-router-dom';
import SidebarContext from './SidebarContext.component';

interface SidebarItemType {
  name: string;
  key: string;
  href?: string;
  icon?: ReactNode;
  eq?: (pathName: string, href: string) => boolean;
  items?: SidebarItemType[];
}

interface SidebarProps {
  primary?: boolean;
  items: SidebarItemType[];
}

const Container = styled.div<{ $collapsed?: boolean }>`
  width: ${({ $collapsed }) => ($collapsed ? '60px' : '210px')};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.01);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Items = styled.div`
  margin-top: 30px;
  padding: 15px;
`;

const IconContainer = styled.div<{ $active?: boolean }>`
  margin-bottom: -1px;
  margin-right: 10px;
  color: ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.metaText)};
`;

const Item = styled.div<{ $active?: boolean }>`
  cursor: pointer;
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ $active, theme }) => ($active ? theme.colors.clearText : 'inherit')};
  display: flex;
`;

const MetaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const renderItem = ({ name, key, href, eq, icon: Icon }: SidebarItemType, collapsed: boolean) => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;
  const active = !!href && (!!eq ? eq(pathName, href) : href === pathName);

  return (
    <Item onClick={!!href ? () => navigate(href) : () => {}} $active={active} key={key}>
      {!!Icon && <IconContainer $active={active}>{Icon}</IconContainer>}
      {!collapsed && (
        <Text meta={!active} size={18}>
          {name}
        </Text>
      )}
    </Item>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ items, primary } = { items: [], primary: false }) => {
  const { noOfSidebars, decreaseNoOfSidebars, increaseNoOfSidebars } = useContext(SidebarContext);

  useEffect(() => {
    increaseNoOfSidebars();

    return decreaseNoOfSidebars;
  }, []);

  const collapsed = primary && noOfSidebars > 1;
  return (
    <Container $collapsed={collapsed}>
      <Items>{items.map((item) => renderItem(item, !!collapsed))}</Items>
      <MetaContainer>
        {!collapsed && primary && <Text meta>Powered by Kt20eclass</Text>}
        {collapsed && <Text meta>More</Text>}
      </MetaContainer>
    </Container>
  );
};

export default Sidebar;
