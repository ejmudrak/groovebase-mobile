/* 
  @component AddBinForm
  @description Page where users input the name of the bin they're creating
*/

import Header from '@components/Header';
import Page from '@components/Page/Page';
import { StyleSheet } from 'react-native';
import Card from '@components/Card/Card';
import AddBinForm from '@features/bins/add-bin/AddBinForm';

export interface AddBinPageProps {}

export default function AddBinPage() {
  return (
    <Page authenticated hideNavBar>
      <Header title='Create Bin' displayBackButton />
      <Card elevation={100} style={styles.card}>
        <AddBinForm />
      </Card>
    </Page>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 16,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    flex: 0,
    height: 188,
  },
});
