import useDebounce from 'utils/hooks/useDebounce';
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
  const [searchValue, setSearchValue] = useState(initialValue);
  const [queryValue, setQueryValue] = useState({ [queryKey]: initialValue });

  useDebounce(() => {
    if (searchValue !== undefined) {
      setQueryValue({ [queryKey]: searchValue });
    }
  }, [searchValue]);

  const { data: { items = [] } = {}, isLoading } = useSearchQuery(queryValue);

  return { searchValue, setSearchValue, items, isLoading };
}
