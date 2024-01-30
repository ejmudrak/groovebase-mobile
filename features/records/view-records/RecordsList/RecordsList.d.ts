import { Record } from 'types';

export interface RecordsListProps {
  records?: Record[];
  onRecordPress: (record: Record) => void;
  refreshing?: boolean;
  fetchNextPage?: () => void;
}

export type BaseRecordsListProps = RecordsListProps;
