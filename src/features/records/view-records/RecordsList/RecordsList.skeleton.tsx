import { StyleSheet, View } from 'react-native';
import Skeleton from '@src/components/Skeleton';

export default function RecordsListSkeleton() {
  return (
    <View style={styles.container}>
      {new Array(10).fill(0).map((_, index) => (
        <Skeleton style={styles.skeleton} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flex: 1,
  },
  skeleton: { height: 80, borderRadius: 24 },
});
