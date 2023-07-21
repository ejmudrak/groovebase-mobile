import TextInput from '@src/components/TextInput/TextInput';
import { View, StyleSheet } from 'react-native';
import useSearchInput from './useSearchInput';
import { colors } from '@src/utils/styles/colors';
import { shadows } from '@src/utils/styles/shadows';

export interface SearchInputProps {}

export default function SearchInput({}: SearchInputProps) {
  const { searchValue, setSearchValue } = useSearchInput();

  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder='Search by artist or record'
        hideOutline
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: colors.white[500],
    border: 'none',
    ...shadows[100],
  },
});
