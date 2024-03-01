/*
  @component TrackList
  @description 
*/

import { View, StyleSheet } from 'react-native';
import { Track } from 'types';
import TrackItem from './TrackItem.view';
import Text from '@components/Text';

export interface TrackListProps {
  tracks: Track[];
}

// We'll flip the color of the track item based on the side of the record it's on
const FILLED_SIDES = ['B', 'D', 'F', 'H', 'J', 'L'];

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <View style={styles.container}>
      <Text variant='body3Bold'>Tracks</Text>

      <View style={styles.tracks}>
        {tracks.map((track) => (
          <TrackItem
            key={track.id}
            {...track}
            variant={
              FILLED_SIDES.some((side) => track.position?.includes(side))
                ? 'filled'
                : 'outlined'
            }
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flex: 1,
    marginBottom: 24,
  },

  tracks: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
});
