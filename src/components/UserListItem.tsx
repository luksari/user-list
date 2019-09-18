import React, { FC } from 'react';
import styled from 'styled-components';
import { IUser } from '../data';

const UserWrapper = styled.div`
  display: flex;
  font-weight: 500;
  justify-content: baseline;
`;

const UserSpan = styled.span`
  display: flex;
  margin: 0 12px;
  color: #aeaeae;
  align-self: flex-end;
`;

const UserMain = styled.p`
  font-size: 1.2rem;
`;

const UserListItem: FC<{ readonly user: IUser }> = ({ user }) => {
  return (
    <UserWrapper>
      <UserSpan>{`${user.id}.`}</UserSpan>
      <UserMain>{user.name}</UserMain>
      <UserSpan>@{user.username}</UserSpan>
    </UserWrapper>
  );
};

export default UserListItem;
