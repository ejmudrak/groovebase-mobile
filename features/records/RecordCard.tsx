import Card from 'components/Card';
import RecordContent from 'components/RecordContent';
import { Pressable, StyleSheet } from 'react-native';
import { Record } from 'types';

interface RecordCardProps {
  record: Record;
  onPress?: (record: Record) => void;
}

export default function RecordCard({ record, onPress }: RecordCardProps) {
  return (
    <Pressable onPress={() => onPress && onPress(record)}>
      <Card elevation={100} style={styles.container}>
        <RecordContent {...record} />
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 80,
    padding: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});