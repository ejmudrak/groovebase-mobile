import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import feathersClient from '@utils/client';
import { Service } from '@utils/services';
import { router } from 'expo-router';

export function useLocalLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: any) =>
      feathersClient.authenticate({
        ...data,
        strategy: 'local',
      }),
    onSuccess: async (response: any) => {
      queryClient.setQueryData([Service.Users], response.user);
      await AsyncStorage.setItem('user', JSON.stringify(response.user));

      router.replace('/records');
    },
  });
}
