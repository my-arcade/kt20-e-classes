import React from 'react';
import styled from 'styled-components';
import { moment } from 'utils';
import { Avatar } from 'core-ui';

const Container = styled.div`
  display: flex;
  align-items: center;
  min-width: 70px;
  min-height: 15px;
  flex-direction: ${({ mine }) => (mine ? 'row-reverse' : 'row')};
`;

const Message = styled.div`
  background-color: ${({ isOwner, theme }) => isOwner ? theme.metaPrimary : theme.clearBackground};
  border-radius: 0px 20px 20px 20px;
  padding: 10px 21px;
  color: ${({theme}) => theme.text};
  font-weight: bold;
  font-size: 14px;
`;

const Timestamp = styled.span`
  color: ${({theme}) => theme.metaText};
  font-size: 11px;
  margin-left: 6px;
  font-weight: bold;
`

const Header = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Name = styled.div`
  color: ${({theme}) => theme.metaText};
  font-weight: 400;
  margin-right: 20px;
`

const getFormat = (diffHours) => {
  if(diffHours <= 24) {
    return 'HH:mm'
  } else if(diffHours < 8765) {
    return 'DD/MM HH:mm' // at least a day passed, show the day and month
  }

  return 'DD/MM/YYYY HH:mm' // a year passed (8765 hours), show entire date
}

const messageContainer = (props) => {
  const { sentAt, content, sender, isOwner } = props;
  const diff = sentAt && Math.abs(moment.duration(moment.utc(sentAt).diff(new Date())).asHours())
  return (
    <Container>
      <Avatar name={sender.name} {...sender.avatar} />
      <Message isOwner={isOwner}>
        <Header>
          <Name>{sender.name}</Name>
          {!!diff && <Timestamp>{moment.utc(sentAt).tz(moment.tz.guess()).format(getFormat(diff))}</Timestamp>}
        </Header>
        {content}
        </Message>
    </Container>
  );
};

export default messageContainer;
