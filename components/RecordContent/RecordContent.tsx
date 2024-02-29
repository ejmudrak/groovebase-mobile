import Text from 'components/Text';
import { StyleSheet, View, Image } from 'react-native';
import { colors } from 'utils/styles/colors';
import { Record } from 'types';
import RecordContentSkeleton from './RecordContent.skeleton';

interface RecordContentProps
  extends Partial<Pick<Record, 'artist' | 'name' | 'year' | 'smallImageUrl'>> {
  isLoading?: boolean;
}

export default function RecordContent({
  artist,
  isLoading,
  name,
  smallImageUrl,
  year,
}: RecordContentProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: smallImageUrl }} style={styles.image} />

      {!isLoading ? (
        <View style={styles.labelContainer}>
          <Text
            variant='body4'
            color={colors.black[400]}
            numberOfLines={1}
            ellipsizeMode='tail'
          >
            {artist}
          </Text>
          <Text variant='body2Bold' numberOfLines={1} ellipsizeMode='tail'>
            {name}
          </Text>
          <Text variant='body4' color={colors.black[400]}>
            {year}
          </Text>
        </View>
      ) : (
        <RecordContentSkeleton />
      )}
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
    gap: 4,
    flex: 1,
  },
});
