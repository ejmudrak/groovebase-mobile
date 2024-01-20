import Page from '@components/Page';
import Header from '@components/Header';
import { useRoute } from '@react-navigation/native';
import RecordDetails from '@features/records/[record]/RecordDetails';
import RecordOptionsButton from '@features/records/[record]/RecordOptionsButton';

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
