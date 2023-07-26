import { useMutation, useQueryClient } from '@tanstack/react-query';

import feathersClient from '@src/utils/client';
import { Service } from '@src/utils/services';

export function useReauthenticate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => feathersClient.reAuthenticate(),
    onSuccess: (response: any) => {
      queryClient.setQueryData([Service.Users], response.user);
    },
  });
}
