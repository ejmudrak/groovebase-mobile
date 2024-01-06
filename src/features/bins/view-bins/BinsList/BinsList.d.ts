export interface BinsListProps {
  bins?: Record[];
  onBinPress: (record: Record) => void;
  refreshing?: boolean;
}

export type BaseBinsListProps = BinsListProps;
