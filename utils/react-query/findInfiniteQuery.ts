import { useInfiniteQuery } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { FindResult, QueryParams } from 'types';

type FeathersItem = any;

// Grabs all items from all pages
const getAllItems = (pages?: any[]) => {
  let allItems: FeathersItem[] = [];
  if (!pages) return allItems;

  pages.forEach(({ items }: { items: FeathersItem[] }) => {
    allItems = allItems.concat(items);
  });

  const allUniqueItems: FeathersItem[] = [];

  // clear out any duplicates
  allItems.forEach((item) => {
    const isDuplicate = allUniqueItems.find(
      (uniqueItem) => item.id === uniqueItem.id,
    );

    if (!isDuplicate) {
      allUniqueItems.push(item);
    }
  });

  return allUniqueItems;
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
