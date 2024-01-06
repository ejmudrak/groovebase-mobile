import { FlatList, StyleSheet, View } from 'react-native';
import RecordCard from '../../RecordCard';
import { Record } from '@src/types';
import Text from '@src/components/Text';

interface RecordsListProps {
  records?: Record[];
  onRecordPress: (record: Record) => void;
  refreshing?: boolean;
}

export default function RecordsList({
  records,
  onRecordPress,
  refreshing,
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
      refreshing={refreshing}
      style={styles.container}
      ListEmptyComponent={
        !refreshing ? (
          <View>
            <Text>No records found.</Text>
          </View>
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
