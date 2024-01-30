import type { Control, UseFormHandleSubmit } from 'react-hook-form';
import type { AddBinFormData } from './AddBinForm.schema';

export interface AddBinFormProps {
  handleSubmit: UseFormHandleSubmit<AddBinFormData, undefined>;
  addBin: (data: AddBinFormData) => void;
  isValid: boolean;
  isDirty: boolean;
  isLoading: boolean;
  control: Control<AddBinFormData, any>;
}

export type BaseAddBinFormProps = Pick<AddBinFormProps>;
