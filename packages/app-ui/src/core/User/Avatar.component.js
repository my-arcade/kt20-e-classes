import React from 'react';

// third-party libraries
import styled from 'styled-components';

// helper functions
import {getInitials, getImageUrl} from 'utils';

const AvatarContainer = styled.div`
  border-radius: 50%;
  width: ${({size}) => size}px;
  min-width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  min-height: ${({size}) => size}px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.primary};
  color: white;
`;

const Initials = styled.div`
  font-weight: bold;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`

const Avatar = ({ name, id, size = 40 }) => {
  return (
    <AvatarContainer size={size}>
      {id ? <Image src={getImageUrl(id)} /> : <Initials>{getInitials(name)}</Initials>}
    </AvatarContainer>
  );
};

export default Avatar;
