import React, { FC } from 'react';
import { IUser } from '../data';
import { UserMain, UserSpan, UserWrapper } from '../styled';

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
