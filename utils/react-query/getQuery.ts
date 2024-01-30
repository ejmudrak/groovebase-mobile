import { useQuery } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { Id } from '@feathersjs/feathers';

// Gets one record's data from the API
export default function getQuery<ServiceType>(
  queryKey: string,
  id?: Id,
  params?: any,
  options?: any,
) {
  return useQuery<ServiceType, Error>(
    [queryKey, id?.toString()],
    () => {
      return feathersClient
        .service(queryKey)
        .get(id, params)
        .then((data: ServiceType) => {
          return data;
        });
    },
    {
      enabled: id !== undefined && Boolean(id), // prevents API from being called when there is no ID present
      refetchOnMount: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      ...options,
    },
  );
}
