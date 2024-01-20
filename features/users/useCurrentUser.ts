import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Service } from '@utils/services';
import { User } from 'types';
import {
  getLocalStorageUser,
  removeLocalStorageUser,
} from './login/userLocalStorage';
import { useEffect } from 'react';

export function useCurrentUser(): User | undefined | null {
  const queryClient = useQueryClient();

  const { data: user } = useQuery<User | undefined | null>(
    [Service.Users],
    async (): Promise<User | undefined | null> =>
      // await queryClient.getQueryData([Service.Users]),
      await getLocalStorageUser(),
    {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      onError: () => {
        removeLocalStorageUser();
      },
    },
  );

  return user;
}
