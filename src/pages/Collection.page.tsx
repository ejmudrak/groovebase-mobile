import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/RecordList';

export default function CollectionPage() {
  return (
    <Page authenticated>
      <Header title='Collection' />
      <RecordList />
    </Page>
  );
}
