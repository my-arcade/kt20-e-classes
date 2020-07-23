import React from 'react';
import styled from 'styled-components';
import Icon from './../Text/Icon.component';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const TabContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  color: ${({theme}) => theme.metaText};
`

const TabIcon = styled(Icon)`
  font-size: 15px;
  margin-right: 10px;
`

const customIcon = Icon => styled(Icon)`
  font-size: 15px;
  margin-right: 10px;
`

const TabItem = styled.div`
  margin-left: 12px;
  font-weight: normal;
  font-size: 16px;
  margin-right: 12px;
  cursor: pointer;
  padding: 11px;

  ${({active, theme}) => active ? `
    background-color: white;
    border-radius: 12px;
    color: ${theme.text}
  ` : ''}
`

export default class Tabs extends React.Component {
  static defaultProps = {
    renderAll: false
  };

  state = {currentId: null};

  selectTab(currentId) {
    this.setState({currentId})
    const { onTabChange } = this.props
    onTabChange && onTabChange(currentId)
  }
  
  /** external use only, don't call parent callback! */
  select = (currentId) => {
    this.setState({currentId})
  }


  /** external use only */
  getCurrentTabId = () => {
    return this.state.currentId
  }

  componentDidMount() {
    const { children } = this.props
    this.setState({currentId: children[0].props.id})
  }

  renderContent = () => {
    const {currentId} = this.state;
    const { renderAll, children } = this.props;
    const currentTab = children.filter(child => child != null).filter(child => child.props.id === currentId)[0];

    if(renderAll) {
      return (
        children.filter(child => child != null).map(child => (
          <React.Fragment key={child.props.id}>
            {React.cloneElement(child, {display: child.props.id === currentId})}
          </React.Fragment>
        ))
      )
    }

    return (
      <React.Fragment key={currentTab.props.id}>
        {React.cloneElement(currentTab)}
      </React.Fragment>
    )
  }

  render() {
    const {children, actionLeft} = this.props;
    const {currentId} = this.state;
    const currentTab = children.filter(child => child != null).filter(child => child.props.id === currentId)[0];
    if(currentTab == null) return null;
    const ActionLeft = actionLeft;
    return (
      <Container>
        <TabContainer>
          {actionLeft && <ActionLeft />}
          {React.Children.map(children, child => {
            if(child == null) return null;
            const { name, id, icon } = child.props
            const Icon = typeof icon === 'function' ? customIcon(icon) : icon;

            return (
              <TabItem onClick={() => this.selectTab(id)} key={id} active={currentId === id}>
                {typeof icon === 'function' ? <Icon /> : <TabIcon name={icon} />}
                {name}
              </TabItem>
            )
          })}
        </TabContainer>
        {this.renderContent()}
      </Container>
    )
  }
}
