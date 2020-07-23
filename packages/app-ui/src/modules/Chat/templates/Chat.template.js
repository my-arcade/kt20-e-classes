import React from 'react';

// third party libraries
import styled from 'styled-components';
import { PaperPlane } from '@styled-icons/fa-regular';
import { SmileBeam } from '@styled-icons/fa-solid';
import { Chat } from '@styled-icons/entypo';
import _ from 'lodash';
// components
import Message from './Message.component';
import { InputBox, Button } from 'core-ui';
import { CellMeasurer, CellMeasurerCache, List } from 'react-virtualized';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';

// helper function
import { dynamicSort } from 'utils';

const Container = styled.div`
  display: ${({ hide }) => (hide ? 'none' : 'flex')};
  flex-wrap: wrap;
`;

const ChatInput = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px;
  border-radius: 12px;
  width: 100%;
  margin-top: 20px;
`;

const MessageRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const SmileIcon = styled(SmileBeam)`
color: ${({ theme }) => theme.clearBackground};
`

const SendMessageIcon = styled(PaperPlane)`
  color: inherit;
  cursor: pointer;
`;

const EmptyChat = styled(Chat)`
  color: ${({theme}) => theme.primary};
  width: 100px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const InputButton = styled(Button)`
  && {
    min-width: 32px;
    min-height: 32px;
    border-radius: 50%;
    padding: 0px;
    background-color: ${({ active, theme }) => active ? theme.primary : theme.metaText};
    color: ${({ theme }) => theme.clearBackground};

    &:hover {
      color: #2a3a5f;
    }
  }
`;

const MessageContainer = styled.div`
  max-height: 300px;
  min-height: 300px;
  overflow: scroll;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  flex-direction: column;
`;

const EmptyChatWrapper = () => {
  return (
    <Wrapper>
      <EmptyChat size="100px"/>
      <p>There are no messages yet</p>
    </Wrapper>
  )
}

export default class  StreamChat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: { content: '' }
    }

    this.listRef = React.createRef();
  }

  handleContentChange = event => {
    const { message } = this.state
    this.setState({
      message: {
        ...message,
        content: event.target.value
      }
    })
  }

  handleMessageSend = () => {
    const { message } = this.state
    const { onMessageSend } = this.props
    onMessageSend(message)
    this.setState({ message: { content: '' } })
  }

  recomputeHeight = () => {
    this.cache.clearAll();
    this.listRef.current.recomputeRowHeights();
  }
  
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { message: {content} } = this.state
      if(content != null && content.trim() !== '') {
        this.handleMessageSend()
      }
    }
  }

  cache = new CellMeasurerCache({
    defaultHeight: 30,
    fixedWidth: true,
    fixedHeight: false
  });

  rowRenderer = ({ index, key, style, parent }) => {
    const { messages, currentUser } = this.props
    const message = messages[index]
    return (
      <CellMeasurer
        cache={this.cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <MessageRow style={style} key={message.id}>
          <Message isOwner={currentUser.id === message.sender.id} {...message} />
        </MessageRow>
      </CellMeasurer>
    );
  }


  renderMessages = () => {
    const { messages } = this.props;

    return (
      <AutoSizer>
        {({height, width}) => (
          <List
            ref={this.listRef}
            width={width}
            height={height}
            rowCount={messages.length}
            rowHeight={this.cache.rowHeight}
            rowRenderer={this.rowRenderer}
            deferredMeasurementCache={this.cache}
          />
        )}
      </AutoSizer>
    )
  }

  render() {
    const { messages } = this.props;
    const { message: { content } } = this.state;
    const hasMessages = messages.length > 0;
    const active = !_.isEmpty(content) && content.trim() !== ''

    return (
      <Container>
        <ChatInput>
          <SmileIcon size="20" />
          <InputBox
            onKeyDown={this.handleKeyDown}
            placeholder="Type a message..."
            onChange={this.handleContentChange}
            value={content}
          />
          <InputButton
            onClick={this.handleMessageSend}
            active={active}
            disabled={!active}
          >
            <SendMessageIcon size="16" />
          </InputButton>
        </ChatInput>
        <MessageContainer>{ hasMessages ? this.renderMessages() : <EmptyChatWrapper /> }</MessageContainer>
      </Container>
    );
  }
}
