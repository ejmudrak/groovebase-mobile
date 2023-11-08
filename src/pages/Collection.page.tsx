import { useNavigation } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/RecordsList';
import { useRecordsQuery } from '@src/features/records/useRecordsQuery';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Record } from '@src/types';

export default function CollectionPage() {
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const { data: { items: records = [] } = {} } = useRecordsQuery({
    userId: user?.id || 0,
  });

  const handleOnRecordPress = (record: Record) => {
    navigation.navigate('Record', { record });
  };

  return (
    <Page authenticated>
      <Header title='Collection' />
      <RecordList records={records} onRecordPress={handleOnRecordPress} />
    </Page>
  );
}
