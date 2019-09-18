import React, { FC } from 'react';
import styled from 'styled-components';
import { IUser } from '../data';
import UserListItem from './UserListItem';

interface IProps {
  data: IUser[];
}

const StyledUserList = styled.ul`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  margin-left: 6rem;
`;
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
