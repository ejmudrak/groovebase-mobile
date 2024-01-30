import { Record } from 'types';

export interface RecordDetailsProps {
  record: Record;
}

export type BaseRecordDetailsProps = Pick<RecordDetailsProps>;
