import { View, StyleSheet } from 'react-native';
import Text from '@components/Text';
import Card from '@components/Card/Card';
import { colors } from '@utils/styles/colors';
import Page from '@components/Page';
import LoginForm from '@features/users/login/LoginForm';
import { useCurrentUser } from '@features/users/useCurrentUser';

export default function LoginPage() {
  const user = useCurrentUser();
  console.log('sign-in user: ', user);

  return (
    <Page>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant='h1' color={colors.blue[500]}>
            Welcome to Groovebase
          </Text>

          <Text variant='body1Bold' color={colors.black[400]}>
            The hub for vinyl collectors, crate diggers, and music lovers
          </Text>
        </View>

        <Card elevation={200} style={styles.card}>
          <LoginForm />
        </Card>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 24,
    padding: 16,
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },

  card: {
    padding: 24,
    flex: 0,
    width: '100%',
  },
});
