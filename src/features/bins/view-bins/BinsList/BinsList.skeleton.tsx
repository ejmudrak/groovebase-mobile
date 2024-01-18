import { StyleSheet, View } from 'react-native';
import Skeleton from '@src/components/Skeleton';

export default function BinsListSkeleton() {
  return (
    <View style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {new Array(10).fill(0).map((_, index) => (
        <Skeleton style={styles.skeleton} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    height: 116,
    width: '100%',
    borderRadius: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
  },
});
