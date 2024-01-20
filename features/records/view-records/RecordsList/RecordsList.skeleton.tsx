import { StyleSheet, View } from 'react-native';
import Skeleton from 'components/Skeleton';

export default function RecordsListSkeleton({ style }: { style?: any }) {
  return (
    <View style={[styles.container, style]}>
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
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  skeleton: { height: 80, borderRadius: 24 },
});
