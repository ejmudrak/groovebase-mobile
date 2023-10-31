import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/RecordsList';
import { useRecordsQuery } from '@src/features/records/useRecordsQuery';
import { useCurrentUser } from '@src/features/users/useCurrentUser';

export default function CollectionPage() {
  const user = useCurrentUser();
  const { data: { items: records = [] } = {} } = useRecordsQuery({
    userId: user?.id || 0,
  });

  return (
    <Page authenticated>
      <Header title='Collection' />
      <RecordList records={records} onRecordPress={() => {}} />
    </Page>
  );
}
