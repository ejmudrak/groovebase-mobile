import { StyleSheet, View } from 'react-native';
import Skeleton from 'components/Skeleton';

export default function RecordContentSkeleton({ style }: { style?: any }) {
  return (
    <View style={[styles.container, style]}>
      <Skeleton style={styles.artistSkeleton} />
      <Skeleton style={styles.albumSkeleton} />
      <Skeleton style={styles.yearSkeleton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 4,
    paddingBottom: 4,
    gap: 10,
    flex: 1,
  },
  artistSkeleton: {
    height: 12,
    borderRadius: 8,
    width: '50%',
  },
  albumSkeleton: {
    height: 12,
    borderRadius: 8,
    width: '75%',
  },
  yearSkeleton: {
    height: 12,
    borderRadius: 8,
    width: '25%',
  },
});
