import useRecordDetailsProps from './useRecordDetailsProps';
import RecordDetailsView from './RecordDetails.view';
import { BaseRecordDetailsProps } from './RecordDetails';

export default function RecordDetails(baseProps: BaseRecordDetailsProps) {
  const props = useRecordDetailsProps(baseProps);
  return <RecordDetailsView {...props} />;
}
