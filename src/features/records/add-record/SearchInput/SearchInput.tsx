import TextInput from '@src/components/TextInput/TextInput';
import { View, StyleSheet } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { shadows } from '@src/utils/styles/shadows';

export interface SearchInputProps {
  searchValue: string;
  setSearchValue: (val: string) => void;
}

export default function SearchInput({
  searchValue,
  setSearchValue,
}: SearchInputProps) {
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
    marginBottom: 16,
  },
  input: {
    backgroundColor: colors.white[500],
    border: 'none',
    ...shadows[100],
  },
});
