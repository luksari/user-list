import React, { FC } from 'react';
import styled from 'styled-components';
import { IUser } from '../data';
import UserListItem from './UserListItem';

interface IProps {
  data: IUser[];
}

const StyledUserList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 0 13rem;
  width: 500px;
  max-width: 500px;
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
