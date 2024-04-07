import TextInput from 'components/TextInput/TextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import SearchIcon from 'components/Icons/SearchIcon';
import CloseIcon from 'components/Icons/CloseIcon';

export interface SearchInputProps {
  placeholder?: string;
  searchValue?: string;
  setSearchValue: (newSearchValue: string) => void;
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
    flex: 1,
  },
  inputContainerStyle: {
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: colors.white[500],
    ...shadows[100],
  },
  input: { flex: 1 },
});
