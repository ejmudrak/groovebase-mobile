import ListFooter from 'components/ListFooter';
import RecordCard from '../../RecordCard';
import RecordsListSkeleton from './RecordsList.skeleton';
import RecordsToolbar from '../RecordsToolbar';
import Text from 'components/Text';
import { FlatList, StyleSheet, View } from 'react-native';
import { RecordsListProps } from './RecordsList';

export default function RecordsList({
  fetchNextPage,
  onRecordPress,
  records,
  refreshing,
  searchValue,
  setSearchValue = () => {},
  sortValue,
  setSortValue = () => {},
}: RecordsListProps) {
  return (
    <>
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
        ListHeaderComponent={
          <RecordsToolbar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
        }
        ListFooterComponent={() => (
          <ListFooter
            refreshing={refreshing}
            numItems={records?.length || 0}
            Skeleton={RecordsListSkeleton}
          />
        )}
        ListEmptyComponent={
          !refreshing && !records?.length ? (
            <View style={styles.listEmptyContainer}>
              <Text>No records found.</Text>
            </View>
          ) : (
            <RecordsListSkeleton />
          )
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
  searchInputContainer: {
    marginBottom: -8,
  },
});
