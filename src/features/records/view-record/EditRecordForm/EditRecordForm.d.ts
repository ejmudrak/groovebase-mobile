import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { EditRecordFormData } from './EditRecordForm.schema';

export interface EditRecordFormProps {
  record: Record;
  control: Control<EditRecordFormData, any>;
  onSubmit: () => void;
  isValid: boolean;
  isDirty: boolean;
}

export type BaseEditRecordFormProps = Pick<EditRecordFormProps, 'record'>;
