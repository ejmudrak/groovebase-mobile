import { FlatList, StyleSheet } from 'react-native';
import RecordCard from '../RecordCard';
import useRecordsList from './useRecordsList';
import { Record } from '@src/types';

interface RecordsListProps {
  records?: Record[];
}

export default function RecordsList({ records }: RecordsListProps) {
  const {
    data: { items: staticItems = [] },
  } = useRecordsList();

  return (
    <FlatList
      data={records}
      renderItem={({ item }) => (
        <RecordCard
          artist={item.artist}
          name={item.name}
          year={item.year}
          smallImageUrl={item.smallImageUrl}
        />
      )}
      keyExtractor={(item) =>
        item.discogsMasterId?.toString() || item.id?.toString()
      }
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
