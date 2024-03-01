import Page from '@components/Page';
import Header from '@components/Header';
import RecordOptionsButton from '@features/records/view-record/RecordOptionsButton';
import { useLocalSearchParams } from 'expo-router';
import { useRecordQuery } from '@features/records/view-record/hooks/useRecordQuery';
import { ScrollView, StyleSheet } from 'react-native';
import RecordCard from '@features/records/RecordCard';
import EditRecordForm from '@features/records/view-record/EditRecordForm';
import Card from '@components/Card';
import GenreChips from '../components/GenreChips';
import TrackList from '../components/TrackList/TrackList.view';

export default function RecordPage() {
  const { recordId } = useLocalSearchParams<{ recordId: string }>();
  const { data: record, isLoading } = useRecordQuery(recordId);

  return (
    <Page authenticated>
      <Header
        title='Record'
        displayBackButton
        ActionsComponent={RecordOptionsButton}
      />

      <ScrollView style={styles.container}>
        <RecordCard record={record} isLoading={isLoading} />

        <Card elevation={100} style={styles.card}>
          {Boolean(record?.genres?.length) && (
            <GenreChips genres={record?.genres} />
          )}

          {Boolean(record?.tracks?.length) && (
            <TrackList tracks={record?.tracks || []} />
          )}
          <EditRecordForm record={(record || {}) as any} />
        </Card>
      </ScrollView>
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

  card: {
    padding: 24,
    flex: 1,
    alignItems: 'stretch',
    marginBottom: 16,
  },
});
