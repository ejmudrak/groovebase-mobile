import type { Control, UseFormHandleSubmit } from 'react-hook-form';
import type { DeleteAccountFormData } from './DeleteAccountForm.schema';

export interface DeleteAccountFormProps {
  handleSubmit: UseFormHandleSubmit<DeleteAccountFormData, undefined>;
  deleteAccount: (data: DeleteAccountFormData) => void;
  isValid: boolean;
  isDirty: boolean;
  isLoading: boolean;
  control: Control<DeleteAccountFormData, any>;
}

export type BaseDeleteAccountFormProps = Pick<DeleteAccountFormProps>;
