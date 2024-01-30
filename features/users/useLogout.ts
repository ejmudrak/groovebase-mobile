import { useMutation, useQueryClient } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { Service } from 'utils/services';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export function useLogoutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => feathersClient.logout(),
    onSuccess: async () => {
      await AsyncStorage.removeItem('user');
      await queryClient.setQueryData([Service.Users], null);

      // Remove queries matching the endpoint formats
      const queryFilter = ['/records', '/bins'];

      queryFilter.forEach((endpoint) => {
        queryClient.removeQueries({ queryKey: [endpoint], exact: false });
      });

      router.replace('/sign-in');
    },
  });
}
