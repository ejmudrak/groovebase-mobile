import RecordList from '@src/features/records/RecordList';
import { View, StyleSheet } from 'react-native';

export default function CollectionPage() {
  return (
    <View style={styles.container}>
      <RecordList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingX: 16,
  },
});
