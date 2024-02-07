import { Record } from 'types';

export interface RecordDetailsProps {
  record: Record;
  isLoading?: boolean;
}

export type BaseRecordDetailsProps = Pick<RecordDetailsProps>;
