import Header from '@components/Header';
import Page from '@components/Page/Page';
import RecordsList from '@features/records/view-records/RecordsList';
import { useCurrentUser } from '@features/users/useCurrentUser';
import { Record } from 'types';
import useRefresh from '@utils/hooks/useRefresh';
import RecordsListOptions from '@features/records/view-records/RecordsListOptions';
import { useRecordsInfiniteQuery } from '@features/records/hooks/useRecordsInfiniteQuery';
import { router } from 'expo-router';

export default function RecordsPage() {
  const user = useCurrentUser();

  const {
    allItems: records = [],
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    total,
  } = useRecordsInfiniteQuery({
    userId: user?.id || 0,
    $sort: { createdAt: -1 },
  });

  useRefresh(refetch);

  const handleOnRecordPress = (record: Record) => {
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
        records={records}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
        fetchNextPage={hasNextPage ? fetchNextPage : undefined}
      />
    </Page>
  );
}
