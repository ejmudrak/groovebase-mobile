import { Record } from '@src/types';

export interface RecordsListProps {
  records?: Record[];
  onRecordPress: (record: Record) => void;
  refreshing?: boolean;
  fetchNextPage?: () => void;
}

export type BaseRecordsListProps = RecordsListProps;
