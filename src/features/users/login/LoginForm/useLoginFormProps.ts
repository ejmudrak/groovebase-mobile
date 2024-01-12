import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  WEB_GOOGLE_CLIENT_ID,
  IOS_GOOGLE_CLIENT_ID,
  EXPO_GOOGLE_CLIENT_ID,
} from '@env';
import { useEffect, useState } from 'react';
import { useGoogleLogin } from '../useGoogleLogin';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function useLoginFormProps() {
  const { mutate: authenticate, isSuccess: isAuthenticated } = useGoogleLogin();
  const { navigate } = useNavigation();
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  // The promptAsync function starts the Google signin flow
  const [_, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '',
    iosClientId: IOS_GOOGLE_CLIENT_ID,
    webClientId: WEB_GOOGLE_CLIENT_ID,
    expoClientId: EXPO_GOOGLE_CLIENT_ID,
  });

  // Once the user is authenticated via Google, we can use the accessToken to authenticate with our API server
  useEffect(() => {
    const handleAuthenticate = async () => {
      const localUser = await getLocalUser();

      if (!localUser) {
        if (
          response?.type === 'success' &&
          response?.authentication?.accessToken
        ) {
          // Authenticates with our API server, creating or finding the entity for this profile
          authenticate(response?.authentication?.accessToken);
        }
      } else {
        // We have user data, so let's move on to the main app!
        navigate('Collection' as never);
      }
    };

    handleAuthenticate();
  }, [response, isAuthenticated]);

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  };

  return {
    promptGoogleAuthRequest: promptAsync,
    email,
    onChangeEmail,
    password,
    onChangePassword,
  };
}
