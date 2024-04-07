import SearchInput from '@components/SearchInput';
import { StyleSheet, View } from 'react-native';

export interface RecordsSearchInputProps {
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
}

export default function RecordsSearchInputView({
  searchValue,
  setSearchValue,
}: RecordsSearchInputProps) {
  return (
    <View style={styles.container}>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder='Search by album or artist'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 0,
  },
});
