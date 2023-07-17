import { FlatList, StyleSheet } from 'react-native';
import RecordCard from '../RecordCard';
import useRecordList from './useRecordList';

export default function RecordList() {
  const {
    data: { items = [] },
  } = useRecordList();

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
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
