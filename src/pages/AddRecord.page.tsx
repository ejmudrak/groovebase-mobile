import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import SearchInput from '@src/features/records/add-record/SearchInput/SearchInput';
import { StyleSheet } from 'react-native';

export default function AddRecord() {
  return (
    <Page authenticated>
      <Header title='Add Record' displayBackButton style={styles.header} />
      <SearchInput />
    </Page>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
});
