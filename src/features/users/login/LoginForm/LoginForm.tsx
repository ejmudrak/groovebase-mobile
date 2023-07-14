import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '@src/components/Button';
import Text from '@src/components/Text/Text';
import TextInput from '@src/components/TextInput/TextInput';
import { StyleSheet, View } from 'react-native';
import { WEB_GOOGLE_CLIENT_ID, IOS_GOOGLE_CLIENT_ID } from '@env';
import { colors } from '@src/utils/styles/colors';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '../useGoogleLogin';

WebBrowser.maybeCompleteAuthSession();

export default function LoginForm() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const [userInfo, setUserInfo] = useState();
  console.log('userInfo: ', userInfo);
  const {
    mutate: authenticate,
    isLoading: isAuthenticating,
    isSuccess: isAuthenticated,
  } = useGoogleLogin();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '',
    iosClientId: IOS_GOOGLE_CLIENT_ID,
    webClientId: WEB_GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    handleEffect();
  }, [response, isAuthenticated]);

  const handleEffect = async () => {
    const user = await getLocalUser();

    if (!user) {
      if (
        response?.type === 'success' &&
        response?.authentication?.accessToken
      ) {
        // Authenticates with our API server, creating or finding the entity for this profile
        authenticate(response?.authentication?.accessToken);
      }
    } else {
      setUserInfo(user);
    }
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('@user');
    return data ? JSON.parse(data) : null;
  };

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
        <Text style={styles.dividerText} color={colors.black[400]}>
          OR
        </Text>
        <View style={styles.divider} />
      </View>

      <Button
        title='Continue with Google'
        size='md'
        fullWidth
        onPress={() => promptAsync()}
      />

      <Button
        title='Clear Storage'
        size='md'
        fullWidth
        onPress={async () => await AsyncStorage.removeItem('@user')}
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
  dividerText: {
    width: '20%',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: colors.gray[100],
    width: '40%',
  },
});
