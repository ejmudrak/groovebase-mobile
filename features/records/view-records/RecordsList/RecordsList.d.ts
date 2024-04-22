import { VinylRecord } from 'types';

export interface RecordsListProps {
  fetchNextPage?: () => void;
  hideSortButton?: boolean;
  onRecordPress: (record: VinylRecord) => void;
  records?: VinylRecord[];
  refetch?: () => void;
  refreshing?: boolean;
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
  sortValue: Record<string, 1 | -1>;
  setSortValue: (newSortValue: Record<string, 1 | -1>) => void;
}

export type BaseRecordsListProps = RecordsListProps;
