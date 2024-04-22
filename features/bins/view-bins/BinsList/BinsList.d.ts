import { Bin } from 'types';

export interface BinsListProps {
  bins?: Bin[];
  fetchNextPage?: () => void;
  onBinPress: (record: Record) => void;
  refetch: () => void;
  refreshing?: boolean;
}

export type BaseBinsListProps = BinsListProps;
