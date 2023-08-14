import Card from '@src/components/Card';
import RecordContent from '@src/components/RecordContent';
import { Pressable, StyleSheet } from 'react-native';
import { Record } from '@src/types';

interface RecordCardProps {
  record: Record;
  onPress: (record: Record) => void;
}

export default function RecordCard({ record, onPress }: RecordCardProps) {
  return (
    <Pressable onPress={() => onPress(record)}>
      <Card elevation={100} style={styles.container}>
        <RecordContent {...record} />
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    padding: 8,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
});
