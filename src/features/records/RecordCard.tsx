import Card from '@src/components/Card';
import Text from '@src/components/Text';
import { StyleSheet, View } from 'react-native';
import { colors } from '@src/utils/styles/colors';

interface RecordCardProps {
  artist: string;
  title: string;
  year: string;
}

export default function RecordCard({ artist, title, year }: RecordCardProps) {
  return (
    <Card elevation={100} style={styles.recordCard} key={artist}>
      <View style={styles.labelContainer}>
        <Text variant='body4' color={colors.black[400]}>
          {artist}
        </Text>
        <Text variant='body2Bold'>{title}</Text>
        <Text variant='body4' color={colors.black[400]}>
          {year}
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  recordCard: {
    padding: 8,
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  labelContainer: {
    paddingLeft: 16,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 0,
    gap: 6,
  },
});
