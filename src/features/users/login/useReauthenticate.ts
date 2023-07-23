import { useMutation } from '@tanstack/react-query';

import feathersClient from '@src/utils/client';

export function useReauthenticate() {
  return useMutation({
    mutationFn: () => feathersClient.reAuthenticate(),
  });
}
