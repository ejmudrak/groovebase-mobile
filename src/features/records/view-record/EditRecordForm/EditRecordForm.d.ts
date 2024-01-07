import { Control, SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { EditRecordFormData } from './EditRecordForm.schema';
import { Record } from '@src/types';

export interface EditRecordFormProps {
  record: Record;
  recordId: number;
  userRecordId: number;
  control: Control<EditRecordFormData, any>;
  isValid: boolean;
  isDirty: boolean;
  isRecordQueryLoading: boolean;
  handleSubmit: UseFormHandleSubmit<EditRecordFormData, undefined>;
}

export type BaseEditRecordFormProps = Pick<EditRecordFormProps, 'record'>;
