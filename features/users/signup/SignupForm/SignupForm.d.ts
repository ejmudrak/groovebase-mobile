import { FieldErrors, UseFormWatch } from 'react-hook-form';
import { SignupFormSchema } from './SignupForm.schema';

export interface SignupFormProps {
  apiError?: any;
  control: Control<SignupFormSchema, any>;
  formErrors?: FieldErrors<SignupFormSchema>;
  handleSubmit: any;
  isLoading?: boolean;
  isSubmitDisabled: boolean;
  signUp: (data: Omit<SignupFormSchema, 'confirmPassword'>) => void;
  watch: UseFormWatch<SignupFormSchema>;
}

export type BaseSignupFormProps = Pick<SignupFormProps>;
