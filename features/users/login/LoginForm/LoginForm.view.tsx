import Button from 'components/Button';
import Text from 'components/Text/Text';
import { StyleSheet, View } from 'react-native';
import { colors } from 'utils/styles/colors';
import { LoginFormProps } from './LoginForm';

export default function LoginForm({ promptGoogleAuthRequest }: LoginFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text variant='h3'>Log In</Text>
        <Text>Sign in with one of the following options</Text>
      </View>

      <Button
        title='Continue with Google'
        size='md'
        fullWidth
        onPress={() => promptGoogleAuthRequest()}
      />

      {/* <Button
        title='Clear Storage'
        size='md'
        fullWidth
        onPress={async () => await AsyncStorage.removeItem('user')}
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
});
