import { useQuery } from '@tanstack/react-query';
import feathersClient from '@src/utils/client';
import { FindResult, QueryParams } from '@src/types';

// Fetches data from the API
export default function findQuery<ServiceType>(
  queryKey: string,
  params?: QueryParams<ServiceType>,
) {
  return useQuery<FindResult<ServiceType>, Error>(
    [queryKey, params],
    () =>
      feathersClient
        .service(queryKey)
        .find({ query: params })
        .then(({ data, ...rest }: any) => {
          console.log('rest: ', rest);
          return {
            items: data,
            ...rest,
          };
        }),
    {
      refetchOnMount: false,
    },
  );
}
