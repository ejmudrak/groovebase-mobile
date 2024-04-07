import { Record } from 'types';

export interface RecordsListProps {
  fetchNextPage?: () => void;
  onRecordPress: (record: Record) => void;
  records?: Record[];
  refreshing?: boolean;
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
}

export type BaseRecordsListProps = RecordsListProps;
