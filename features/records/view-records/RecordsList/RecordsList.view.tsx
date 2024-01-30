import RecordCard from '../../RecordCard';
import RecordsListSkeleton from './RecordsList.skeleton';
import Text from 'components/Text';
import { FlatList, StyleSheet, View } from 'react-native';
import { RecordsListProps } from './RecordsList';
import ListFooter from 'components/ListFooter';

export default function RecordsList({
  records,
  onRecordPress,
  refreshing,
  fetchNextPage,
}: RecordsListProps) {
  return (
    <>
      {refreshing && !records?.length && <RecordsListSkeleton />}

      <FlatList
        data={records}
        style={styles.listContainer}
        renderItem={({ item }) => (
          <RecordCard record={item} onPress={onRecordPress} />
        )}
        keyExtractor={(item) =>
          item.discogsMasterId?.toString() || item.id?.toString()
        }
        refreshing={refreshing}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        ListFooterComponent={() => (
          <ListFooter
            refreshing={refreshing}
            numItems={records?.length || 0}
            Skeleton={RecordsListSkeleton}
          />
        )}
        ListEmptyComponent={
          !refreshing ? (
            <View style={styles.listEmptyContainer}>
              <Text>No records found.</Text>
            </View>
          ) : null
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
