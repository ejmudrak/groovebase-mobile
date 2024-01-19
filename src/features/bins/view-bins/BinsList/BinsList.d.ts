import { Bin } from '@src/types';

export interface BinsListProps {
  bins?: Bin[];
  onBinPress: (record: Record) => void;
  refreshing?: boolean;
  fetchNextPage?: () => void;
}

export type BaseBinsListProps = BinsListProps;
