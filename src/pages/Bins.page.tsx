import { useNavigation } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import { useBinsQuery } from '@src/features/bins/hooks/useBinsQuery';
import BinsList from '@src/features/bins/view-bins/BinsList';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Bin } from '@src/types';
import { useRefreshOnFocus } from '@src/utils/hooks/useRefreshOnFocus';

export default function BinsPage() {
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const { data: { items: bins = [] } = {}, refetch } = useBinsQuery({
    userId: user?.id || 0,
    $sort: { name: 1 },
  });

  // TODO: Make the refetch happen when this page is visited
  useRefreshOnFocus(refetch);

  const handleBinPress = (bin: Bin) => {
    navigation.navigate('RecordsInBin', { bin });
  };

  return (
    <Page authenticated>
      <Header title='Record Bins' />
      <BinsList bins={bins} onBinPress={handleBinPress} />
    </Page>
  );
}
