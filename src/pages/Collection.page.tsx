import { useNavigation } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/view-records/RecordsList';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Record } from '@src/types';
import useRefresh from '@src/utils/hooks/useRefresh';
import RecordsListOptions from '@src/features/records/view-records/RecordsListOptions';
import { useRecordsInfiniteQuery } from '@src/features/records/useRecordsInfiniteQuery';
import { useMemo } from 'react';

export default function CollectionPage() {
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const {
    data: { pages = [] } = {},
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useRecordsInfiniteQuery({
    userId: user?.id || 0,
    $sort: { createdAt: -1 },
  });

  // Grab the records off of the pages
  const records = useMemo(() => {
    let newItems: Record[] = [];
    pages.forEach(({ items }: { items: Record[] }) => {
      newItems = newItems.concat(items);
    });

    return newItems;
  }, [pages]);

  useRefresh(refetch);

  const handleOnRecordPress = (record: Record) => {
    navigation.navigate('Record', { record });
  };

  return (
    <Page authenticated>
      <Header
        title='Collection'
        subtitle={`${pages[0]?.total || 0} records`}
        ActionsComponent={RecordsListOptions}
      />

      <RecordList
        records={records}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
        fetchNextPage={hasNextPage ? fetchNextPage : undefined}
      />
    </Page>
  );
}
