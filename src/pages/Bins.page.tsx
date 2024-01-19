import BinsList from '@src/features/bins/view-bins/BinsList';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import useRefresh from '@src/utils/hooks/useRefresh';
import { Bin } from '@src/types';
import { useBinsInfiniteQuery } from '@src/features/bins/hooks/useBinsInfiniteQuery';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { useNavigation } from '@react-navigation/native';

export default function BinsPage() {
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

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
    navigation.navigate('RecordsInBin', { bin });
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
