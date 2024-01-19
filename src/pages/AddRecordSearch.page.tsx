/* 
  @component AddRecordSearch
  @description Page where users search for albums and select that one that they want to add to their collection
*/

import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordsList from '@src/features/records/view-records/RecordsList';
import SearchInput from '@src/components/SearchInput';
import useSearch from '@src/utils/hooks/useSearch';
import { StyleSheet, View } from 'react-native';
import { useRecordsQuery } from '@src/features/records/useRecordsQuery';
import { Record } from '@src/types';
import { useNavigation } from '@react-navigation/native';

export default function AddRecordSearch() {
  const navigation = useNavigation<any>();
  const { searchValue, setSearchValue, items, isLoading } = useSearch({
    useSearchQuery: useRecordsQuery,
    initialValue: undefined,
    queryKey: 'name',
  });

  const handleOnRecordPress = (record: Record) => {
    navigation.navigate('AddRecordForm', { record });
  };

  return (
    <Page authenticated hideNavBar>
      <Header title='Add Record' displayBackButton />

      <View style={styles.searchInputContainer}>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </View>

      <RecordsList
        records={items as any}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
      />
    </Page>
  );
}

const styles = StyleSheet.create({
  searchInputContainer: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: -8,
  },
});
