import React, { FC } from 'react';
import { IUser } from '../data';
import { StyledUserList } from '../styled';
import UserListItem from './UserListItem';

interface IProps {
  data: IUser[];
}
const UsersList: FC<IProps> = ({ data }) => {
  return (
    <StyledUserList>
      {data.map(user => (
        <UserListItem key={user.id} user={user} />
      ))}
    </StyledUserList>
  );
};

export default UsersList;
