import { Bin, Record } from '@src/types';

export interface BinCardProps {
  bin: Bin;
  onPress: (bin: Bin) => void;
  featuredRecordImageUrl: string;
  previewRecords: Record[];
}

export type BaseBinCardProps = Pick<BinCardProps, 'bin' | 'onPress'>;
