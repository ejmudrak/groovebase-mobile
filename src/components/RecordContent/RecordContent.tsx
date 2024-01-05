import Text from '@src/components/Text';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { Record } from '@src/types';

type RecordContentProps = Pick<
  Record,
  'artist' | 'name' | 'year' | 'smallImageUrl'
>;

export default function RecordContent({
  artist,
  name,
  year,
  smallImageUrl,
}: RecordContentProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: smallImageUrl }} style={styles.image} />

      <View style={styles.labelContainer}>
        <Text variant='body4' color={colors.black[400]}>
          {artist}
        </Text>
        <Text variant='body2Bold'>{name}</Text>
        <Text variant='body4' color={colors.black[400]}>
          {year}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 12,
    marginBottom: 8,
    width: '100%',
  },
  image: {
    height: 64,
    width: 64,
    borderRadius: 16,
    backgroundColor: colors.gray[100],
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexShrink: 0,
    gap: 4,
  },
});
