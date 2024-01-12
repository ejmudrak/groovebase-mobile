import Button from '@src/components/Button';
import Text from '@src/components/Text/Text';
import { StyleSheet, View } from 'react-native';
import { colors } from '@src/utils/styles/colors';
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
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
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
