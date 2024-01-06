import { StyleSheet, View } from 'react-native';
import Skeleton from '@src/components/Skeleton';

export default function RecordsListSkeleton() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {new Array(10).fill(0).map((_, index) => (
        <Skeleton style={styles.skeleton} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: { height: 80, width: '100%', borderRadius: 24 },
});
