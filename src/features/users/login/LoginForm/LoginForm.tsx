import Button from '@src/components/Button';
import Text from '@src/components/Text/Text';
import TextInput from '@src/components/TextInput/TextInput';
import { StyleSheet, View } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { useState } from 'react';
import useLoginForm from './useLoginForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginForm() {
  const { promptGoogleAuthRequest } = useLoginForm();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          value={email}
          onChangeText={onChangeEmail}
          label='Email'
          placeholder='Enter your email'
        />
        <TextInput
          value={password}
          onChangeText={onChangePassword}
          label='Password'
          placeholder='Enter your password'
        />
      </View>

      <Button
        title='Log In'
        size='md'
        fullWidth
        disabled={!email || !password}
      />

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text color={colors.black[400]}>
          OR
        </Text>
        <View style={styles.divider} />
      </View>

      <Button
        title='Continue with Google'
        size='md'
        fullWidth
        onPress={() => promptGoogleAuthRequest()}
      />

      <Button
        title='Clear Storage'
        size='md'
        fullWidth
        onPress={async () => await AsyncStorage.removeItem('user')}
      />
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
  inputsContainer: {
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
