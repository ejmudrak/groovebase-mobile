import { useForm } from 'react-hook-form';
import type { BaseSignupFormProps } from './SignupForm';
import { SignupFormSchema, signupFormSchema } from './SignupForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';

export default function useSignupFormProps({
  ...restOfBaseProps
}: BaseSignupFormProps) {
  const isSigningUp = false;
  const isLoggingIn = false;

  const defaultValues: SignupFormSchema = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid, isSubmitting: isFormSubmitting },
    watch,
    reset: resetForm,
    getValues,
  } = useForm({
    defaultValues,
    resolver: yupResolver(signupFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = ({ password, firstName, lastName }: SignupFormSchema) => {
    // Call API
  };

  return {
    control,
    formErrors: errors,
    handleSubmit,
    isLoading: isSigningUp || isLoggingIn || isFormSubmitting,
    isSubmitDisabled: !isDirty || !isValid,
    onSubmit,
    watch,
    ...restOfBaseProps,
  };
}
