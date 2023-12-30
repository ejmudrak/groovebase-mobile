import { Image, Pressable, StyleSheet, View } from 'react-native';
import type { BinCardProps } from './BinCard';
import Card from '@src/components/Card';
import { colors } from '@src/utils/styles/colors';
import Text from '@src/components/Text';

export default function BinCard({ bin, onPress }: BinCardProps) {
  return (
    <Pressable onPress={() => onPress && onPress(bin)}>
      <Card elevation={100} style={styles.container}>
        <Image source={{ uri: '' }} style={styles.featuredImage} />

        <View style={styles.binContainer}>
          <View style={styles.titleContainer}>
            <Text variant='h4' color={colors.black[500]}>
              {bin.name}
            </Text>
            <Text variant='body4' color={colors.black[400]}>
              {bin.numRecords} records
            </Text>
          </View>

          {bin?.recentlyAddedRecords && (
            <View style={styles.recordsContainer}>
              {bin.recentlyAddedRecords.map((record) => (
                <Image
                  source={{ uri: '' }}
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
  },
  recordsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  smallRecordImage: {
    height: 40,
    width: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white[500],
    backgroundColor: colors.gray[100],
  },
});
