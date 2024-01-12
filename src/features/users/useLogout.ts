import { useMutation, useQueryClient } from '@tanstack/react-query';
import feathersClient from '@src/utils/client';
import { Service } from '@src/utils/services';
import { useNavigation } from '@react-navigation/native';

export function useLogoutMutation() {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation();

  return useMutation({
    mutationFn: () => feathersClient.logout(),
    onSuccess: () => {
      queryClient.setQueryData([Service.Users], null);

      // Remove queries matching the endpoint formats
      const queryFilter = ['/records', '/bins'];

      queryFilter.forEach((endpoint) => {
        queryClient.removeQueries({ queryKey: [endpoint], exact: false });
      });

      // redirects to the login screen
      navigate('Login' as never);
    },
  });
}
