import React, { FC, useEffect, useState } from 'react';
import wretch from 'wretch';
import { Input, Title, Wrapper } from '../components';
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
      setPayload(prev => ({ ...prev, data, error: '' }));
    } catch (error) {
      setPayload(prev => ({ ...prev, error }));
    }
  };

  const debouncedUserName = useDebounce<string>(userName, 500);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    console.log(payload);
  }, [payload]);

  useEffect(() => {
    if (debouncedUserName) {
      setFilteredData(filterUsers(payload.data)(debouncedUserName));
    } else {
      setFilteredData(payload.data);
    }
    console.warn(filteredData);
  }, [debouncedUserName, payload.data]);

  return (
    <Wrapper>
      <Title>Users list</Title>
      <Input value={userName} handleValueChange={setUserName} />
      {payload.data.length > 0 && instanceOfUserArray(payload.data) && (
        <UsersList data={filteredData} />
      )}
    </Wrapper>
  );
};

export default UserFinder;
