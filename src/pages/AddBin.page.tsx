/* 
  @component AddBinForm
  @description Page where users input the name of the bin they're creating
*/

import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import { StyleSheet } from 'react-native';
import Card from '@src/components/Card/Card';
import AddBinForm from '@src/features/bins/add-bin/AddBinForm';

export interface AddBinPageProps {}

export default function AddBinPage() {
  return (
    <Page authenticated hideNavBar>
      <Header title='Create Bin' displayBackButton style={styles.header} />
      <Card elevation={100} style={styles.card}>
        <AddBinForm />
      </Card>
    </Page>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  card: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    flex: 0,
    height: 188,
  },
});
