import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/view-records/RecordsList';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Record } from '@src/types';
import useRefresh from '@src/utils/hooks/useRefresh';
import BinOptionsButton from '@src/features/bins/view-bin/BinOptionsButton';
import { useRecordsInfiniteQuery } from '@src/features/records/useRecordsInfiniteQuery';

export default function RecordsInBinPage() {
  const { params: { bin = {} } = {} } = useRoute<any>();
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const {
    allItems: records = [],
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    total,
  } = useRecordsInfiniteQuery({
    userId: user?.id || 0,
    binId: bin.id,
    $sort: { createdAt: -1 },
  });

  useRefresh(refetch);

  const handleOnRecordPress = (record: Record) => {
    navigation.navigate('Record', { record });
  };

  return (
    <Page authenticated>
      <Header
        title={bin.name}
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
