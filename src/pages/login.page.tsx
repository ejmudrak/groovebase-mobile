import { View, StyleSheet } from 'react-native';
import Text from '@src/components/Text';
import Card from '@src/components/Card/Card';
import { colors } from '@src/utils/styles/colors';
import Page from '@src/components/Page';
import LoginForm from '@src/features/users/login/LoginForm';

export default function LoginPage() {
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 24,
    height: '100%',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },

  card: {
    padding: 24,
    width: '100%',
  },
});
