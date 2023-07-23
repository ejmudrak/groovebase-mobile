import { useInfiniteQuery } from '@tanstack/react-query';
import feathersClient from '@src/utils/client';
import { FindResult, QueryParams } from '@src/types';

// Fetches data from the API, allowing for infinite scroll pagination
export default function findInfiniteQuery<ServiceType>(
  queryKey: string,
  params?: QueryParams<ServiceType>,
) {
  return useInfiniteQuery<FindResult<ServiceType>, Error>(
    [queryKey, params],
    ({ pageParam }) =>
      feathersClient
        .service(queryKey)
        .find({ query: { $skip: pageParam, ...params } })
        .then(({ data, ...rest }: any) => {
          return {
            items: data,
            ...rest,
          };
        }),
    {
      getNextPageParam: (lastPage, pages) => {
        const { total, limit, skip } = lastPage || {};
        const numPagesFetched = pages.length;
        const hasNextPage = total - numPagesFetched * limit > 0;
        const nextPage = skip + limit;

        return hasNextPage && nextPage;
      },
      refetchOnMount: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  );
}
