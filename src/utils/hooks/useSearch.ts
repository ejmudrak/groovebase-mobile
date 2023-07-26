import useDebounce from '@src/utils/hooks/useDebounce';
import { useState } from 'react';

interface SearchInputParams {
  initialValue?: string;
  queryKey: string;
  useSearchQuery: any;
}

export default function useSearchInput({
  initialValue,
  queryKey,
  useSearchQuery,
}: SearchInputParams) {
  const [searchValue, setSearchValue] = useState(initialValue || '');
  const [queryValue, setQueryValue] = useState({ [queryKey]: initialValue });

  useDebounce(() => setQueryValue({ [queryKey]: searchValue }), [searchValue]);

  const { data: { items = [] } = {} } = useSearchQuery(queryValue);

  return { searchValue, setSearchValue, items };
}
