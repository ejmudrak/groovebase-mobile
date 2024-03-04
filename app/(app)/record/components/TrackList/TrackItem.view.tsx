/*
  @component Track
  @description 
*/

import Text from '@components/Text';
import { colors } from '@utils/styles/colors';
import { View, StyleSheet } from 'react-native';
import { Track } from 'types';

export interface TrackItemProps extends Track {
  variant?: 'outlined' | 'filled';
}

export default function TrackItem({
  name,
  duration,
  position,
  variant = 'outlined',
}: TrackItemProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.position,
          variant === 'outlined' ? styles.outlined : styles.filled,
        ]}
      >
        <Text
          variant='body3'
          color={variant === 'outlined' ? colors.black[500] : colors.white[500]}
        >
          {position}
        </Text>
      </View>

      <View>
        <Text variant='body2'>{name}</Text>
        {Boolean(duration) && (
          <Text variant='body4' color={colors.black[400]}>
            {duration}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  position: {
    width: 36,
    height: 36,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.black[500],
  },
  filled: {
    backgroundColor: colors.black[500],
  },
});
