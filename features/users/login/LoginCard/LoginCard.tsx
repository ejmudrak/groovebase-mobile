import Text from 'components/Text/Text';
import { StyleSheet, View } from 'react-native';
import LocalLoginForm from '../LocalLoginForm';
import LegalMessage from '@components/LegalMessage';
import Button from '@components/Button';
import { router } from 'expo-router';
import Divider from '@components/Divider';

export default function LoginCard() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant='h3'>Log In</Text>
        <Text>Sign in with your email and password</Text>
      </View>

      <LocalLoginForm />

      <Divider label='OR' />

      <Button
        variant='outlined'
        title='Sign Up'
        fullWidth
        onPress={() => router.push('/signup')}
      />

      <LegalMessage />
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
});
