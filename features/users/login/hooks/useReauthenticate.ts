import { useMutation, useQueryClient } from '@tanstack/react-query';

import feathersClient from 'utils/client';
import { Service } from 'utils/services';

export function useReauthenticate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => feathersClient.reAuthenticate(),
    onSuccess: (response: any) => {
      queryClient.setQueryData([Service.Users], response.user);
      return response.user;
    },
  });
}
