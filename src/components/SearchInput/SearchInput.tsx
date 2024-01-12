import TextInput from '@src/components/TextInput/TextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { shadows } from '@src/utils/styles/shadows';
import SearchIcon from '@src/components/Icons/SearchIcon';
import CloseIcon from '@src/components/Icons/CloseIcon';

export interface SearchInputProps {
  placeholder?: string;
  searchValue: string;
  setSearchValue: (val: string) => void;
}

export default function SearchInput({
  placeholder,
  searchValue,
  setSearchValue,
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder={placeholder}
        hideOutline
        style={styles.input}
        inputContainerStyle={styles.inputContainerStyle}
        leftIcon={<SearchIcon color={colors.blue[200]} />}
        rightIcon={
          <Pressable onPress={() => setSearchValue('')}>
            <CloseIcon color={colors.black[400]} />
          </Pressable>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: colors.white[500],
    ...shadows[100],
  },
  input: { flex: 1 },
});
