import Button from 'components/Button';
import Text from 'components/Text/Text';
import { StyleSheet, View } from 'react-native';
import { colors } from 'utils/styles/colors';
import { LoginFormProps } from './LoginForm';
import LocalLoginForm from '../LocalLoginForm';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import LegalMessage from '@components/LegalMessage';

export default function LoginForm({ promptGoogleAuthRequest }: LoginFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant='h3'>Log In</Text>
        <Text>Sign in with one of the following options</Text>
      </View>

      <LocalLoginForm />

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text color={colors.black[400]}>OR</Text>
        <View style={styles.divider} />
      </View>

      <Button
        title='Continue with Google'
        size='md'
        fullWidth
        onPress={() => promptGoogleAuthRequest()}
      />

      <LegalMessage />

      {/* {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>} */}
      {/* {userInfo && <Button title='Logout' onPress={logout} />} */}

      {/* <GoogleSigninButton
        size={GoogleSigninButton.Size.Standard}
        onPress={signIn}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    alignItems: 'flex-start',
    width: '100%',
  },

  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: colors.gray[100],
    width: '40%',
  },
});
