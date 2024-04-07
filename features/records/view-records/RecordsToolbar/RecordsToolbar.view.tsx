import SearchInput from '@components/SearchInput';
import { StyleSheet, View } from 'react-native';
import RecordsSortButton from '../RecordsSortButton';

export interface RecordsToolbarProps {
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
  sortValue: Record<string, 1 | -1>;
  setSortValue: (newSortValue: Record<string, 1 | -1>) => void;
}

export default function RecordsToolbarView({
  searchValue,
  setSearchValue,
  sortValue,
  setSortValue,
}: RecordsToolbarProps) {
  return (
    <View style={styles.container}>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder='Search by album or artist'
      />

      <RecordsSortButton sortValue={sortValue} setSortValue={setSortValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 0,
  },
});
