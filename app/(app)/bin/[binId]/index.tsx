import Header from '@components/Header';
import Page from '@components/Page/Page';
import RecordList from '@features/records/view-records/RecordsList';
import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { VinylRecord } from 'types';
import useRefresh from '@utils/hooks/useRefresh';
import BinOptionsButton from '@features/bins/view-bin/BinOptionsButton';
import { useRecordsInfiniteQuery } from '@features/records/hooks/useRecordsInfiniteQuery';
import { router, useLocalSearchParams } from 'expo-router';
import { useBinQuery } from '@features/records/view-record/hooks/useBinQuery';
import { useState } from 'react';
import useDebounce from '@utils/hooks/useDebounce';

export default function BinPage() {
  const user = useCurrentUser();
  const { binId } = useLocalSearchParams<{ binId: string }>();
  const { data: bin } = useBinQuery(binId);
  const [inputValue, setInputValue] = useState('');
  const [searchQueryValue, setSearchQueryValue] = useState<any>({});
  const [sortValue, setSortValue] = useState<Record<string, 1 | -1>>({
    artist: 1,
  });

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
    binId,
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
        title={bin?.name || 'Bin'}
        subtitle={`${total} records in bin`}
        displayBackButton
        ActionsComponent={BinOptionsButton}
      />

      <RecordList
        records={records}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
        fetchNextPage={hasNextPage ? fetchNextPage : undefined}
        searchValue={inputValue}
        setSearchValue={setInputValue}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
    </Page>
  );
}
