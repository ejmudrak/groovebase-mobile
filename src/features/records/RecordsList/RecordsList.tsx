import { FlatList, StyleSheet } from 'react-native';
import RecordCard from '../RecordCard';
import useRecordsList from './useRecordsList';

export default function RecordsList() {
  const {
    data: { items = [] },
  } = useRecordsList();

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
