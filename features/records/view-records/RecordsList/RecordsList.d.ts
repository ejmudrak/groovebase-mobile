import { Record } from 'types';

export interface RecordsListProps {
  fetchNextPage?: () => void;
  onRecordPress: (record: Record) => void;
  records?: Record[];
  refreshing?: boolean;
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
  sortValue: Record<string, 1 | -1>;
  setSortValue: (newSortValue: Record<string, 1 | -1>) => void;
}

export type BaseRecordsListProps = RecordsListProps;
