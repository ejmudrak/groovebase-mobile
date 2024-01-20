export interface RemoveRecordOptionProps extends PressableProps {
  recordId: number;
  closeModal?: () => void;
  handleRemoveRecord: () => void;
  isRemovingRecord: boolean;
}

export type BaseRemoveRecordOptionProps = Pick<
  RemoveRecordOptionProps,
  'recordId' | 'closeModal'
>;
