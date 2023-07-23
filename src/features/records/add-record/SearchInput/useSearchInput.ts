import useDebounce from '@src/utils/hooks/useDebounce';
import { useEffect, useState } from 'react';
import { useRecordsQuery } from '../../useRecordsQuery';
import AsyncStorage from '@react-native-async-storage/async-storage';
import feathersClient from '@src/utils/client';

export default function useSearchInput() {
  const [searchValue, setSearchValue] = useState('Tame Impala');
  const [queryValue, setQueryValue] = useState({ name: 'Tame Impala' });

  const getLocalUser = async () => {
    const user = await AsyncStorage.getItem('user');
    const token = await feathersClient.authentication.getAccessToken();
    console.log('token: ', token);
    console.log('user data: ', user);

    return user ? JSON.parse(user) : null;
  };

  useEffect(() => {
    getLocalUser();
  }, []);

  useDebounce(() => setQueryValue({ name: searchValue }), [searchValue]);

  const { data = [] } = useRecordsQuery(queryValue);

  return { searchValue, setSearchValue, records: data };
}
