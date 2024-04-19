import { VinylRecord } from 'types';

export interface RecordsListProps {
  fetchNextPage?: () => void;
  onRecordPress: (record: VinylRecord) => void;
  records?: VinylRecord[];
  refreshing?: boolean;
  searchValue: string;
  setSearchValue: (newSearchValue: string) => void;
  sortValue: Record<string, 1 | -1>;
  setSortValue: (newSortValue: Record<string, 1 | -1>) => void;
}

export type BaseRecordsListProps = RecordsListProps;
