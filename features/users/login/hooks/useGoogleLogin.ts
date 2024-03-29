import client from 'utils/client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Service } from 'utils/services';
import { router } from 'expo-router';

export const useGoogleLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (accessToken: string) =>
      client.authenticate({ strategy: 'google', accessToken }),
    onSuccess: async (response: any) => {
      await queryClient.setQueryData([Service.Users], response.user);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));

      router.replace('/records');
    },
  });
};
