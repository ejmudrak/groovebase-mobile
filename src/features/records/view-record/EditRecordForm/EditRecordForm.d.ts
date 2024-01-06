import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { EditRecordFormData } from './EditRecordForm.schema';

export interface EditRecordFormProps {
  record: Record;
  control: Control<EditRecordFormData, any>;
  isValid: boolean;
  isDirty: boolean;
  isRecordQueryLoading: boolean;
  handleSubmit: UseFormHandleSubmit<EditRecordFormData, undefined>;
  updateUserRecord: SubmitHandler<EditRecordFormData>;
}

export type BaseEditRecordFormProps = Pick<EditRecordFormProps, 'record'>;
