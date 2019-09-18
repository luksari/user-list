import React, { FC, useEffect, useState } from 'react';
import { Input, Title, Wrapper } from '../components';
import ErrorCard from '../components/ErrorCard';
import UsersList from '../components/UsersList';
import { instanceOfUserArray, IUser } from '../data';
import { apiCall } from '../helpers/api';
import { filterUsers } from '../helpers/filterUsers';
import useDebounce from '../hooks/useDebounce';

const UserFinder: FC = () => {
  const [userName, setUserName] = useState('');
  const [payload, setPayload] = useState<{ readonly data: IUser[]; readonly error: string }>({
    data: [],
    error: '',
  });
  const [filteredData, setFilteredData] = useState<IUser[]>([]);

  const getUserData = async () => {
    try {
      const data = await apiCall<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setPayload(prev => ({ ...prev, data, error: 'Nieszkodliwy error' }));
    } catch (error) {
      setPayload(prev => ({ ...prev, error }));
    }
  };

  const debouncedUserName = useDebounce<string>(userName, 500);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (debouncedUserName) {
      setFilteredData(filterUsers(payload.data)(debouncedUserName));
    } else {
      setFilteredData(payload.data);
    }
  }, [debouncedUserName, payload.data]);

  return (
    <Wrapper>
      <Title>Users list</Title>
      <Input value={userName} handleValueChange={setUserName} />
      {instanceOfUserArray(filteredData) ? (
        <UsersList data={filteredData} />
      ) : (
        <ErrorCard message={`Brak rekordów \u{1F622}`} />
      )}
      {payload.error && <ErrorCard message={payload.error} />}
    </Wrapper>
  );
};

export default UserFinder;
