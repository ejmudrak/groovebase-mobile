import Page from '@src/components/Page';
import Header from '@src/components/Header';
import { useRoute } from '@react-navigation/native';
import RecordDetails from '@src/features/records/view-record/RecordDetails';

export default function RecordPage() {
  const { params: { record = {} } = {} } = useRoute<any>();

  return (
    <Page authenticated hideNavBar>
      <Header title='Record' displayBackButton />
      <RecordDetails record={record} />
    </Page>
  );
}
