import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  WEB_GOOGLE_CLIENT_ID,
  IOS_GOOGLE_CLIENT_ID,
  EXPO_GOOGLE_CLIENT_ID,
} from '@env';
import { useEffect } from 'react';
import { useGoogleLogin } from '../useGoogleLogin';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function useLoginForm() {
  const { mutate: authenticate, isSuccess: isAuthenticated } = useGoogleLogin();
  const { navigate } = useNavigation();

  // The promptAsync function starts the Google signin flow
  const [_, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '',
    iosClientId: IOS_GOOGLE_CLIENT_ID,
    webClientId: WEB_GOOGLE_CLIENT_ID,
    expoClientId: EXPO_GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    handleAuthenticate();
  }, [response, isAuthenticated]);

  const handleAuthenticate = async () => {
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
      // We have user data, so let's move on to the main app!
      navigate('Collection' as never);
    }
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('user');
    return data ? JSON.parse(data) : null;
  };

  return { promptGoogleAuthRequest: promptAsync };
}
