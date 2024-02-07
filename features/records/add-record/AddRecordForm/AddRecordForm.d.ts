import { Control, UseFormHandleSubmit } from 'react-hook-form';
import { AddRecordFormData } from './AddRecordForm.schema';

export interface AddRecordFormProps {
  addRecordToCollection: (data: AddRecordFormData) => void;
  control: Control<AddRecordFormData, any>;
  handleSubmit: UseFormHandleSubmit<AddRecordFormData, undefined>;
  isDirty: boolean;
  isLoading: boolean;
  isValid: boolean;
  record?: Record | null;
}

export type BaseAddRecordFormProps = Pick<AddRecordFormProps, 'record'>;
