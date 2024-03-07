import Button from '@components/Button';
import TextInput from '@components/TextInput';
import type { LocalLoginFormProps } from './LocalLoginForm';
import { StyleSheet, View } from 'react-native';
import { colors } from '@utils/styles/colors';

export default function LocalLoginForm({
  email,
  isLoggingIn,
  logIn,
  onChangeEmail,
  onChangePassword,
  password,
}: LocalLoginFormProps) {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          spellCheck={false}
          autoCapitalize='none'
          autoComplete='email'
          label='Email'
          inputMode='email'
          textContentType='emailAddress'
          placeholder='Enter your email'
        />
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry
          spellCheck={false}
          autoCapitalize='none'
          label='Password'
          textContentType='password'
          placeholder='Enter your password'
        />
      </View>

      <Button
        title='Log In'
        size='md'
        fullWidth
        onPress={logIn}
        isLoading={isLoggingIn}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
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
  dividerText: {
    width: '20%',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: colors.gray[100],
    width: '40%',
  },
});
