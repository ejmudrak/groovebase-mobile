import { FlatList, StyleSheet, View } from 'react-native';
import Text from '@src/components/Text';
import { BinsListProps } from './BinsList';
import BinCard from '../BinCard';

export default function BinsListView({
  bins,
  onBinPress,
  refreshing,
}: BinsListProps) {
  return (
    <FlatList
      data={bins}
      renderItem={({ item }) => <BinCard bin={item} onPress={onBinPress} />}
      keyExtractor={(item) => item.id?.toString()}
      refreshing={refreshing}
      style={styles.container}
      ListEmptyComponent={
        !refreshing ? (
          <View>
            <Text>No record bins found.</Text>
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
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
