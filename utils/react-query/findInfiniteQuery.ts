import { useInfiniteQuery } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { FindResult, QueryParams } from 'types';

// Grabs all items from all pages
const getAllItems = (pages?: any[]) => {
  let allItems: any[] = [];
  if (!pages) return allItems;

  pages.forEach(({ items }: { items: any[] }) => {
    allItems = allItems.concat(items);
  });

  return allItems;
};

// Fetches data from the API, allowing for infinite scroll pagination
export default function findInfiniteQuery<ServiceType>(
  queryKey: string,
  params?: QueryParams<ServiceType>,
) {
  const infiniteQueryResult = useInfiniteQuery<FindResult<ServiceType>, Error>(
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

  const allItems = getAllItems(infiniteQueryResult?.data?.pages);
  const total = infiniteQueryResult?.data?.pages[0]?.total || 0;

  return { allItems, total, ...infiniteQueryResult };
}
