import { Image, Pressable, StyleSheet, View } from 'react-native';
import type { BinCardProps } from './BinCard';
import Card from 'components/Card';
import { colors } from 'utils/styles/colors';
import Text from 'components/Text';

export default function BinCard({
  bin,
  onPress,
  featuredRecordImageUrl,
  previewRecords,
}: BinCardProps) {
  return (
    <Pressable onPress={() => onPress && onPress(bin)}>
      <Card elevation={100} style={styles.container}>
        <Image
          source={{ uri: featuredRecordImageUrl }}
          style={styles.featuredImage}
        />

        <View style={styles.binContainer}>
          <View style={styles.titleContainer}>
            <Text variant='h4' color={colors.black[500]} numberOfLines={1}>
              {bin.name}
            </Text>
            <Text
              variant='body4'
              color={colors.black[400]}
              style={styles.numRecordsLabel}
            >
              {bin.numRecords} record{bin.numRecords === 1 ? '' : 's'}
            </Text>
          </View>

          {previewRecords?.length > 0 && (
            <View style={styles.smallRecordsContainer}>
              {previewRecords.map((record) => (
                <Image
                  source={{ uri: record.smallImageUrl }}
                  key={record.id}
                  style={styles.smallRecordImage}
                />
              ))}
            </View>
          )}
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 116,
    padding: 12,
    marginBottom: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
    gap: 12,
  },
  featuredImage: {
    height: 92,
    width: 92,
    borderRadius: 16,
    backgroundColor: colors.gray[100],
  },
  binContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: 8,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  numRecordsLabel: {
    marginStart: 1,
  },
  smallRecordsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 6, // aligns with title, subtracting border width from margin of small record image items
  },
  smallRecordImage: {
    height: 40,
    width: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: colors.white[500],
    backgroundColor: colors.gray[100],
    marginStart: -8,
  },
});
