import Header from '@components/Header';
import Page from '@components/Page/Page';
import RecordList from '@features/records/view-records/RecordsList';
import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { Record } from 'types';
import useRefresh from '@utils/hooks/useRefresh';
import BinOptionsButton from '@features/bins/view-bin/BinOptionsButton';
import { useRecordsInfiniteQuery } from '@features/records/hooks/useRecordsInfiniteQuery';
import { router, useLocalSearchParams } from 'expo-router';
import { useBinQuery } from '@features/records/view-record/hooks/useBinQuery';

export default function BinPage() {
  const user = useCurrentUser();
  const { binId } = useLocalSearchParams<{ binId: string }>();
  const { data: bin } = useBinQuery(binId);

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
      />
    </Page>
  );
}
