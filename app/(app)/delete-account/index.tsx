import Header from '@components/Header';
import Page from '@components/Page/Page';
import Card from '@components/Card';
import { StyleSheet } from 'react-native';
import DeleteAccountForm from '@features/users/delete-account/DeleteAccountForm';

export default function DeleteAccountPage() {
  return (
    <Page authenticated hideNavBar>
      <Header title='Delete Account' displayBackButton />
      <Card elevation={100} style={styles.card}>
        {/* <DeleteAccountForm /> */}
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
