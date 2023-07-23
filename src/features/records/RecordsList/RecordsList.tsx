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

  const items = records?.length ? records : staticItems;

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <RecordCard
          artist={item.artist}
          title={item.title}
          year={item.year}
          smallImageUrl={item.smallImageUrl}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
