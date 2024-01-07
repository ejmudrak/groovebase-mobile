import { EditRecordFormProps } from '../EditRecordForm';

export interface UpdateRecordButtonProps
  extends Pick<
    EditRecordFormProps,
    'handleSubmit' | 'isDirty' | 'isValid' | 'isRecordQueryLoading'
  > {
  updateUserRecord: SubmitHandler<EditRecordFormData>;
  isUpdating: boolean;
  recordId: number;
}

export type BaseUpdateRecordButtonProps = Pick<
  UpdateRecordButtonProps,
  'recordId' | 'handleSubmit' | 'isDirty' | 'isValid' | 'isRecordQueryLoading'
>;
