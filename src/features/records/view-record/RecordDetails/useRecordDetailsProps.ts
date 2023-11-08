import type { BaseRecordDetailsProps } from './RecordDetails';

export default function useRecordDetailsProps({
  ...restOfBaseProps
}: BaseRecordDetailsProps) {
  return { ...restOfBaseProps };
}
