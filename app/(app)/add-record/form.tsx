/* 
  @component AddRecordForm
  @description Page where users input fields about the record that they're adding to their collection
*/

import Header from '@components/Header';
import Page from '@components/Page/Page';
import { ScrollView, StyleSheet } from 'react-native';
import Card from '@components/Card/Card';
import RecordContent from '@components/RecordContent/RecordContent';
import AddRecordForm from '@features/records/add-record/AddRecordForm';

export interface AddRecordFormPageProps {}

export default function AddRecordFormPage() {
  // TODO: Replace this with real data
  const record = {} as any;

  return (
    <Page authenticated>
      <Header title='Add Record' displayBackButton />
      {record !== undefined && (
        <ScrollView style={styles.pageContent}>
          <Card elevation={100} style={styles.card}>
            <RecordContent {...record} />

            <AddRecordForm record={record} />
          </Card>
        </ScrollView>
      )}
    </Page>
  );
}

const styles = StyleSheet.create({
  pageContent: {
    padding: 16,
  },

  card: {
    width: '100%',
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginBottom: 32,
  },
});
