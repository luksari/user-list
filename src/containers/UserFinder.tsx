import React, { FC, useEffect, useState } from 'react';
import { Input } from '../components';
import ErrorCard from '../components/ErrorCard';
import Loader from '../components/Loader';
import UsersList from '../components/UsersList';
import { instanceOfUserArray, IUser } from '../data';
import { apiCall } from '../helpers/api';
import { filterUsers } from '../helpers/filterUsers';
import useDebounce from '../hooks/useDebounce';
import { StyledTitle, Wrapper } from '../styled';

const UserFinder: FC = () => {
  const [userName, setUserName] = useState('');
  const [payload, setPayload] = useState<{ readonly data: IUser[]; readonly error: string }>({
    data: [],
    error: '',
  });
  const [filteredData, setFilteredData] = useState<IUser[]>([]);
  const [showIndicator, setShowIndicator] = useState<boolean>(false);

  const getUserData = async () => {
    setShowIndicator(true);
    try {
      const data = await apiCall<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setPayload(prev => ({ ...prev, data, error: '\u{1F4A3} Meaningless error \u{1F4A3}' }));
    } catch (error) {
      setPayload(prev => ({ ...prev, error }));
    }
    setShowIndicator(false);
  };

  const debouncedUserName = useDebounce<string>(userName, 500);

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    setShowIndicator(true);

    // Created this timeout to show indicator
    // If you don't want to be bothered by long debounce with indicator
<<<<<<< HEAD
    // Comment lines (:45:53, :62) and Uncomment lines :54:60

=======
    // Comment this
    // vvvvvvvvvvvvvvvvvvvvvvvvv
>>>>>>> 8a865e0b0c8c0e5376715383a0695093aac237dd
    const timer = setTimeout(() => {
      if (debouncedUserName) {
        setFilteredData(filterUsers(payload.data)(debouncedUserName));
        setShowIndicator(false);
      } else {
        setFilteredData(payload.data);
        setShowIndicator(false);
      }
    }, 2000);
<<<<<<< HEAD
=======
    // Uncomment this
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvv
>>>>>>> 8a865e0b0c8c0e5376715383a0695093aac237dd
    // if (debouncedUserName) {
    //   setFilteredData(filterUsers(payload.data)(debouncedUserName));
    //   setShowIndicator(false);
    // } else {
    //   setFilteredData(payload.data);
    //   setShowIndicator(false);
    // }

    return () => clearTimeout(timer);
  }, [debouncedUserName, payload.data]);

  return (
    <Wrapper>
      <StyledTitle>Users list</StyledTitle>
      <Input value={userName} handleValueChange={setUserName} />
      {instanceOfUserArray(filteredData) ? (
        <UsersList data={filteredData} />
      ) : (
        <ErrorCard message={`No data \u{1F622}`} />
      )}
      {payload.error && <ErrorCard message={payload.error} />}
      {showIndicator && <Loader />}
    </Wrapper>
  );
};

export default UserFinder;
