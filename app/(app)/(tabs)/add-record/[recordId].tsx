/* 
  @component AddRecordForm
  @description Page where users input fields about the record that they're adding to their collection
*/

import Header from '@components/Header';
import Page from '@components/Page/Page';
import { ScrollView, StyleSheet } from 'react-native';
import AddRecordForm from '@features/records/add-record/AddRecordForm';
import { useLocalSearchParams } from 'expo-router/src/hooks';
import { useRecordQuery } from '@features/records/view-record/hooks/useRecordQuery';
import RecordCard from '@features/records/RecordCard';

export default function AddRecordFormPage() {
  const { recordId } = useLocalSearchParams<{ recordId: string }>();
  const { data: record } = useRecordQuery(recordId);

  return (
    <Page authenticated>
      <Header title='Add Record' displayBackButton />

      {record !== undefined && (
        <ScrollView style={styles.container}>
          <RecordCard record={record} />
          <AddRecordForm record={record} />
        </ScrollView>
      )}
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    gap: 8,
  },
});
