import { useNavigation } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/view-records/RecordsList';
import { useRecordsQuery } from '@src/features/records/useRecordsQuery';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Record } from '@src/types';
import RecordsListSkeleton from '@src/features/records/view-records/RecordsList/RecordsList.skeleton';
import useRefresh from '@src/utils/hooks/useRefresh';
import RecordsListOptions from '@src/features/records/view-records/RecordsListOptions';

export default function CollectionPage() {
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const {
    data: { items: records = [] } = {},
    isLoading,
    refetch,
  } = useRecordsQuery({
    userId: user?.id || 0,
    $sort: { createdAt: -1 },
  });

  useRefresh(refetch);

  const handleOnRecordPress = (record: Record) => {
    navigation.navigate('Record', { record });
  };

  return (
    <Page authenticated>
      <Header title='Collection' ActionsComponent={RecordsListOptions} />
      {isLoading && <RecordsListSkeleton />}

      <RecordList
        records={records}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
      />
    </Page>
  );
}
