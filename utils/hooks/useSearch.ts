import useDebounce from 'utils/hooks/useDebounce';
import { useState } from 'react';

interface SearchParams {
  initialValue?: string;
  getQueryParams: (searchValue?: string) => Record<string, any>; // query object that we'll use to filter API results
  useSearchQuery: any; // The query hook from React Query
}

export default function useSearch({
  initialValue,
  getQueryParams,
  useSearchQuery,
}: SearchParams) {
  const [searchValue, setSearchValue] = useState(initialValue);
  const [queryValue, setQueryValue] = useState(getQueryParams(initialValue));

  useDebounce(() => {
    if (searchValue !== undefined) {
      setQueryValue(getQueryParams(searchValue));
    }
  }, [searchValue]);

  const { data: { items = [] } = {}, isLoading } = useSearchQuery(queryValue);

  return { searchValue, setSearchValue, items, isLoading };
}
