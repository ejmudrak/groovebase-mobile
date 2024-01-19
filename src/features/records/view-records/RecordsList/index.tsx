import RecordsListView from './RecordsList.view';
import type { BaseRecordsListProps } from './RecordsList';

export default function RecordsList(baseProps: BaseRecordsListProps) {
  return <RecordsListView {...baseProps} />;
}
