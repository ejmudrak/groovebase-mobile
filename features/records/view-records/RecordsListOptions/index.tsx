import useRecordsListOptionsProps from './useRecordsListOptionsProps';
import RecordsListOptionsView from './RecordsListOptions.view';

export default function RecordsListOptions() {
  const props = useRecordsListOptionsProps();
  return <RecordsListOptionsView {...props} />;
}
