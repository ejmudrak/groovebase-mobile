import Card from 'components/Card';
import RecordContent from 'components/RecordContent';
import { Pressable, StyleSheet } from 'react-native';
import { VinylRecord } from 'types';

interface RecordCardProps {
  record?: VinylRecord;
  onPress?: (record: VinylRecord) => void;
  isLoading?: boolean;
}

export default function RecordCard({
  record,
  onPress,
  isLoading,
}: RecordCardProps) {
  return (
    <Pressable onPress={() => onPress && record && onPress(record)}>
      <Card elevation={100} style={styles.container}>
        <RecordContent {...record} isLoading={isLoading} />
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
