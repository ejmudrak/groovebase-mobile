/* 
  @component AddRecordSearch
  @description Page where users search for albums and select that one that they want to add to their collection
*/

import Header from '@components/Header';
import Page from '@components/Page/Page';
import RecordsList from '@features/records/view-records/RecordsList';
import SearchInput from '@components/SearchInput';
import useSearch from '@utils/hooks/useSearch';
import { StyleSheet, View } from 'react-native';
import { useRecordsQuery } from '@features/records/hooks/useRecordsQuery';
import { Record } from 'types';
import { router } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { Service } from '@utils/services';

export default function AddRecordSearch() {
  const queryClient = useQueryClient();

  const {
    searchValue = '',
    setSearchValue,
    items,
    isLoading,
  } = useSearch({
    useSearchQuery: useRecordsQuery,
    initialValue: '',
    queryKey: 'name',
  });

  const handleOnRecordPress = (record: Record) => {
    setSearchValue('');

    // Add this temp record to the cache so that we can access it in the next step
    queryClient.setQueryData(
      [Service.Records, record.discogsMasterId?.toString()],
      record,
    );

    // Navigate to the add record form
    router.push({
      pathname: 'add-record/[recordId]',
      params: { recordId: record.discogsMasterId },
    });
  };

  return (
    <Page authenticated hideNavBar>
      <Header title='Add Record' displayBackButton />

      <View style={styles.searchInputContainer}>
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          placeholder='ex. The Beatles'
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
