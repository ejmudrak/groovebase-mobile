import BinsList from '@features/bins/view-bins/BinsList';
import Header from '@components/Header';
import Page from '@components/Page/Page';
import useRefresh from '@utils/hooks/useRefresh';
import { Bin } from 'types';
import { useBinsInfiniteQuery } from '@features/bins/hooks/useBinsInfiniteQuery';
import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { router } from 'expo-router';

export default function BinsPage() {
  const user = useCurrentUser();

  const {
    allItems: bins = [],
    fetchNextPage,
    hasNextPage,
    isLoading,
    refetch,
    total,
  } = useBinsInfiniteQuery({
    userId: user?.id || 0,
    $sort: { name: 1 },
  });

  useRefresh(refetch);

  const handleBinPress = (bin: Bin) => {
    router.push({ pathname: 'bin/[binId]', params: { binId: bin.id } });
  };

  return (
    <Page authenticated>
      <Header title='Record Bins' subtitle={`${total} bins`} />
      <BinsList
        bins={bins}
        onBinPress={handleBinPress}
        refreshing={isLoading}
        fetchNextPage={hasNextPage ? fetchNextPage : undefined}
      />
    </Page>
  );
}
