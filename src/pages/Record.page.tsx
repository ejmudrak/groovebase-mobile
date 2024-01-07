import Page from '@src/components/Page';
import Header from '@src/components/Header';
import { useRoute } from '@react-navigation/native';
import RecordDetails from '@src/features/records/view-record/RecordDetails';

export default function RecordPage() {
  const { params: { record = {} } = {} } = useRoute<any>();
  console.log('record: ', record.price);

  return (
    <Page authenticated hideNavBar>
      <Header title='Record' displayBackButton />
      <RecordDetails record={record} />
    </Page>
  );
}
