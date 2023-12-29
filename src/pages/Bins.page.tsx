import { useNavigation } from '@react-navigation/native';
import Header from '@src/components/Header';
import Page from '@src/components/Page/Page';
import { useBinsQuery } from '@src/features/bins/useBinsQuery';
import BinsList from '@src/features/bins/view-bins/BinsList';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { Bin } from '@src/types';

export default function BinsPage() {
  const user = useCurrentUser();
  const navigation = useNavigation<any>();

  const { data: { items: bins = [] } = {} } = useBinsQuery({
    $or: [
      {
        userId: user?.id || 0,
      },
      {
        isDefault: true,
      },
    ],
  });

  console.log('bins: ', bins);

  const handleBinPress = (bin: Bin) => {
    console.log('clicked bin: ', bin);
  };

  return (
    <Page authenticated>
      <Header title='Bins' />
      <BinsList bins={bins} onBinPress={handleBinPress} />
    </Page>
  );
}
