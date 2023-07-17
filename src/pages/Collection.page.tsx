import Page from '@src/components/Page/Page';
import RecordList from '@src/features/records/RecordList';
import { View, StyleSheet } from 'react-native';

export default function CollectionPage() {
  return (
    <Page>
      <RecordList />
    </Page>
  );
}
