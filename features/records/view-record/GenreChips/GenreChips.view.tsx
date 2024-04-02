import Chip from '@components/Chip';
import Text from '@components/Text';
import { StyleSheet, View } from 'react-native';

export interface GenreChipsProps {
  genres?: string[];
}

export default function GenreChips({ genres }: GenreChipsProps) {
  return (
    <View style={styles.container}>
      <Text variant='body3Bold'>Genres</Text>
      <View style={styles.chips}>
        {genres?.map((genre) => (
          <Chip key={genre} label={genre} />
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
  },
  chips: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
});
