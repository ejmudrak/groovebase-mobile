import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import RecordsList from '@src/features/records/RecordsList/RecordsList';
import SearchInput from '@src/features/records/add-record/SearchInput/SearchInput';
import useSearchInput from '@src/features/records/add-record/SearchInput/useSearchInput';
import { StyleSheet } from 'react-native';

export default function AddRecord() {
  const { searchValue, setSearchValue, records } = useSearchInput();

  return (
    <Page authenticated>
      <Header title='Add Record' displayBackButton style={styles.header} />
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />

      <RecordsList records={records as any} />
    </Page>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
});
