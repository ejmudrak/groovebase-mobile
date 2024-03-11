import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import feathersClient from '@utils/client';
import { Service } from '@utils/services';
import { router } from 'expo-router';

export interface LoginData {
  email: string;
  password: string;
}

export function useLocalLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, ...data }: LoginData) =>
      feathersClient.authenticate({
        email: email.toLowerCase(),
        ...data,
        strategy: 'local',
      }),
    onSuccess: async (response: any) => {
      queryClient.setQueryData([Service.Users], response.user);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));

      router.replace('(tabs)/records');
    },
  });
}
