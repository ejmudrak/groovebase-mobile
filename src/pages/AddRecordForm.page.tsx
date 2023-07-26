import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import { StyleSheet } from 'react-native';
import Card from '@src/components/Card/Card';
import RecordContent from '@src/components/RecordContent/RecordContent';
import { useRoute } from '@react-navigation/native';
import TextInput from '@src/components/TextInput/TextInput';

export interface AddRecordFormPageProps {}

export default function AddRecordFormPage() {
  const { params: { record = {} } = {} } = useRoute<any>();

  return (
    <Page authenticated>
      <Header title='Add Record' displayBackButton style={styles.header} />
      {record !== undefined && (
        <Card elevation={100} style={styles.card}>
          <RecordContent {...record} />

          <TextInput label='Bin' />
        </Card>
      )}
    </Page>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  card: {
    width: '100%',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
});
