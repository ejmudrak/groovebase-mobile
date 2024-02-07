import { StyleSheet, View } from 'react-native';
import Skeleton from 'components/Skeleton';

export default function EditRecordFormSkeleton({ style }: { style?: any }) {
  return (
    <View style={[styles.container, style]}>
      {new Array(6).fill(0).map((_, index) => (
        <View key={index} style={styles.skeleton}>
          <Skeleton style={styles.label} />
          <Skeleton style={styles.input} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, display: 'flex', flexDirection: 'column', gap: 12 },
  skeleton: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    height: 12,
    borderRadius: 4,
    width: '30%',
  },
  input: {
    height: 48,
    borderRadius: 12,
    width: '100%',
  },
});
