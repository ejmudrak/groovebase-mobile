export interface BinsListProps {
  bins?: Record[];
  onBinPress: (record: Record) => void;
}

export type BaseBinsListProps = BinsListProps;
