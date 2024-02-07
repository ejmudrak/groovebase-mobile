import Page from '@components/Page';
import Header from '@components/Header';
import RecordDetails from '@features/records/view-record/RecordDetails';
import RecordOptionsButton from '@features/records/view-record/RecordOptionsButton';
import { useLocalSearchParams } from 'expo-router';
import { useRecordQuery } from '@features/records/view-record/hooks/useRecordQuery';

export default function RecordPage() {
  const { recordId } = useLocalSearchParams<{ recordId: string }>();
  const { data: record = {}, isLoading } = useRecordQuery(recordId);

  return (
    <Page authenticated>
      <Header
        title='Record'
        displayBackButton
        ActionsComponent={RecordOptionsButton}
      />
      <RecordDetails record={record} isLoading={isLoading} />
    </Page>
  );
}
