import Page from '@src/components/Page';
import Header from '@src/components/Header';
import { useRoute } from '@react-navigation/native';
import RecordDetails from '@src/features/records/view-record/RecordDetails';
import RecordOptionsButton from '@src/features/records/view-record/RecordOptionsButton';

export default function RecordPage() {
  const { params: { record = {} } = {} } = useRoute<any>();

  return (
    <Page authenticated>
      <Header
        title='Record'
        displayBackButton
        ActionsComponent={RecordOptionsButton}
      />
      <RecordDetails record={record} />
    </Page>
  );
}
