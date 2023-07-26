import { FlatList, StyleSheet, View } from 'react-native';
import RecordCard from '../RecordCard';
import { Record } from '@src/types';
import Text from '@src/components/Text';

interface RecordsListProps {
  records?: Record[];
  onRecordPress: (record: Record) => void;
}

export default function RecordsList({
  records,
  onRecordPress,
}: RecordsListProps) {
  return (
    <FlatList
      data={records}
      renderItem={({ item }) => (
        <RecordCard record={item} onPress={onRecordPress} />
      )}
      keyExtractor={(item) =>
        item.discogsMasterId?.toString() || item.id?.toString()
      }
      style={styles.container}
      ListEmptyComponent={
        <View>
          <Text>No records found.</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
