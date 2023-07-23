import useDebounce from '@src/utils/hooks/useDebounce';
import { useState } from 'react';
import { useRecordsQuery } from '../../useRecordsQuery';

export default function useSearchInput() {
  const [searchValue, setSearchValue] = useState('Tame Impala');
  const [queryValue, setQueryValue] = useState({ name: 'Tame Impala' });

  useDebounce(() => setQueryValue({ name: searchValue }), [searchValue]);

  const { data: { items = [] } = {} } = useRecordsQuery(queryValue);

  return { searchValue, setSearchValue, records: items };
}
