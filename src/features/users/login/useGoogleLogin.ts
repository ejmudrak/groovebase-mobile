import client from '@src/utils/client';
import { useMutation } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGoogleLogin = () => {
  return useMutation({
    mutationFn: (accessToken: string) =>
      client.authenticate({ strategy: 'google', accessToken }),
    onSuccess: async (response: any) => {
      await AsyncStorage.setItem('@user', JSON.stringify(response.user));
    },
  });
};
