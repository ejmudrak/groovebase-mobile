import Header from '@components/Header';
import Page from '@components/Page/Page';
import RecordsList from '@features/records/view-records/RecordsList';
import RecordsListOptions from '@features/records/view-records/RecordsListOptions';
import useDebounce from '@utils/hooks/useDebounce';
import useRefresh from '@utils/hooks/useRefresh';
import { VinylRecord } from 'types';
import { router } from 'expo-router';
import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { useRecordsInfiniteQuery } from '@features/records/hooks/useRecordsInfiniteQuery';
import { useState } from 'react';

export default function RecordsPage() {
  const user = useCurrentUser();
  const [inputValue, setInputValue] = useState('');
  const [sortValue, setSortValue] = useState<Record<string, 1 | -1>>({
    createdAt: -1,
  });
  const [searchQueryValue, setSearchQueryValue] = useState<any>({});

  useDebounce(() => {
    if (inputValue !== '' || (inputValue === '' && searchQueryValue?.$or)) {
      setSearchQueryValue({
        $or: [
          {
            name: {
              $ilike: `%${inputValue}%`,
            },
          },
          {
            artist: {
              $ilike: `%${inputValue}%`,
            },
          },
        ],
      });
    }
  }, [inputValue, setSearchQueryValue]);

  const {
    allItems: records = [],
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    total,
  } = useRecordsInfiniteQuery({
    userId: user?.id || 0,
    $sort: sortValue,
    ...searchQueryValue,
  });

  useRefresh(refetch);

  const handleOnRecordPress = (record: VinylRecord) => {
    router.push({
      pathname: 'record/[recordId]',
      params: { recordId: record.id },
    });
  };

  return (
    <Page authenticated>
      <Header
        title='Collection'
        subtitle={`${total} records`}
        ActionsComponent={RecordsListOptions}
      />

      <RecordsList
        fetchNextPage={hasNextPage ? fetchNextPage : undefined}
        onRecordPress={handleOnRecordPress}
        records={records}
        refreshing={isLoading}
        searchValue={inputValue}
        setSearchValue={setInputValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
    </Page>
  );
}
