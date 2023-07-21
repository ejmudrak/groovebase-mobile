import useDebounce from '@src/utils/hooks/useDebounce';
import { useState } from 'react';

export default function useSearchInput() {
  const [searchValue, setSearchValue] = useState('');

  useDebounce(() => console.log('fetching records'), [searchValue]);
  return { searchValue, setSearchValue };
}
