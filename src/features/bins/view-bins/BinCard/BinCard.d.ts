import { Bin } from '@src/types';

export interface BinCardProps {
  bin: Bin;
  onPress: (bin: Bin) => void;
}

export type BaseBinCardProps = BinCardProps;
