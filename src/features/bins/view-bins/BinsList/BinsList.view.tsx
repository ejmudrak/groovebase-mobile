import BinCard from '../BinCard';
import BinsListSkeleton from './BinsList.skeleton';
import Text from '@src/components/Text';
import { BinsListProps } from './BinsList';
import { FlatList, StyleSheet, View } from 'react-native';
import ListFooter from '@src/components/ListFooter';

export default function BinsListView({
  bins,
  fetchNextPage,
  onBinPress,
  refreshing,
}: BinsListProps) {
  return (
    <>
      {refreshing && !bins?.length && <BinsListSkeleton />}

      <FlatList
        data={bins}
        renderItem={({ item }) => <BinCard bin={item} onPress={onBinPress} />}
        keyExtractor={(item) => item.id?.toString()}
        refreshing={refreshing}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.1}
        style={styles.container}
        ListFooterComponent={() => (
          <ListFooter
            refreshing={refreshing}
            hasItems={Boolean(bins?.length)}
            Skeleton={BinsListSkeleton}
          />
        )}
        ListEmptyComponent={
          !refreshing ? (
            <View>
              <Text>No record bins found.</Text>
            </View>
          ) : null
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  listFooterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 16,
  },
});
