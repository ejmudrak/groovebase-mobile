import Page from '@components/Page';
import Header from '@components/Header';
import RecordDetails from '@features/records/[record]/RecordDetails';
import RecordOptionsButton from '@features/records/[record]/RecordOptionsButton';

export default function RecordPage() {
  // TODO: Replace this with real data
  const record = {} as any;

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
