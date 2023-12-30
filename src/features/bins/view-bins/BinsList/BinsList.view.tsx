import { FlatList, StyleSheet, View } from 'react-native';
import Text from '@src/components/Text';
import { BinsListProps } from './BinsList';
import BinCard from '../BinCard';

export default function BinsListView({ bins, onBinPress }: BinsListProps) {
  return (
    <FlatList
      data={bins}
      renderItem={({ item }) => <BinCard bin={item} onPress={onBinPress} />}
      keyExtractor={(item) => item.id?.toString()}
      style={styles.container}
      ListEmptyComponent={
        <View>
          <Text>No record bins found.</Text>
        </View>
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
