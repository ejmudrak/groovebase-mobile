import { Record } from '@src/types';

export interface RecordDetailsProps {
  record: Record;
}

export type BaseRecordDetailsProps = Pick<RecordDetailsProps>;
