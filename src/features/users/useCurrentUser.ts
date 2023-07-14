import { useQueryClient, useQuery } from '@tanstack/react-query';
import { Service } from '@src/utils/services';
import { User } from '@src/types';

// Gets the current user from the cache
export function useCurrentUser(): User | undefined {
  const queryClient = useQueryClient();

  // We're putting this in a useQuery so that it re-renders components when the value changes
  const response = useQuery({
    queryKey: [Service.Users],
    queryFn: () => queryClient.getQueryData([Service.Users]),
  });

  return response?.data as User;
}
