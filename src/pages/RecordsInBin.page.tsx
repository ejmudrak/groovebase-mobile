import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/view-records/RecordsList';
import { useRecordsQuery } from '@src/features/records/useRecordsQuery';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Record } from '@src/types';
import useRefresh from '@src/utils/hooks/useRefresh';
import BinOptionsButton from '@src/features/bins/view-bin/BinOptionsButton';

export default function RecordsInBinPage() {
  const { params: { bin = {} } = {} } = useRoute<any>();
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const {
    data: { items: records = [] } = {},
    isLoading,
    refetch,
  } = useRecordsQuery({
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
        displayBackButton
        ActionsComponent={BinOptionsButton}
      />

      <RecordList
        records={records}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
      />
    </Page>
  );
}
