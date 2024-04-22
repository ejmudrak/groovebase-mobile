/* 
  @component AddRecordSearch
  @description Page where users search for albums and select that one that they want to add to their collection
*/

import Header from '@components/Header';
import Page from '@components/Page/Page';
import RecordsList from '@features/records/view-records/RecordsList';
import useDebounce from '@utils/hooks/useDebounce';
import { Keyboard } from 'react-native';
import { VinylRecord } from 'types';
import { Service } from '@utils/services';
import { router } from 'expo-router';
import { useQueryClient } from '@tanstack/react-query';
import { useRecordsQuery } from '@features/records/hooks/useRecordsQuery';
import { useState } from 'react';

export default function AddRecordSearch() {
  const queryClient = useQueryClient();

  const [inputValue, setInputValue] = useState('');
  const [searchQueryValue, setSearchQueryValue] = useState<any>({});

  useDebounce(() => {
    if (inputValue !== '' || (inputValue === '' && searchQueryValue?.name)) {
      setSearchQueryValue({
        name: inputValue,
      });
    }
  }, [inputValue, setSearchQueryValue]);

  const { data: { items: records = [] } = {}, isLoading } =
    useRecordsQuery(searchQueryValue);

  const handleOnRecordPress = (record: VinylRecord) => {
    Keyboard.dismiss();
    setInputValue('');

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

      <RecordsList
        records={records}
        onRecordPress={handleOnRecordPress}
        refreshing={isLoading}
        searchValue={inputValue}
        setSearchValue={setInputValue}
        sortValue={{}}
        setSortValue={() => {}}
        hideSortButton
      />
    </Page>
  );
}
