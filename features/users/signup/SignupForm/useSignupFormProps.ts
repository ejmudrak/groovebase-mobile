import { useForm } from 'react-hook-form';
import type { BaseSignupFormProps } from './SignupForm';
import { SignupFormSchema, signupFormSchema } from './SignupForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { useLocalLogin } from '@features/users/login/hooks/useLocalLogin';
import { router } from 'expo-router';
import { useSignupMutation } from '../hooks/useSignupMutation';

export default function useSignupFormProps({
  ...restOfBaseProps
}: BaseSignupFormProps) {
  const user = useCurrentUser();

  const {
    mutate: signUp,
    isSuccess: isSignupSuccess,
    error: unformattedSignupError,
    isError: isSignupError,
    reset: resetSignupQueryState,
    isLoading: isSigningUp,
  } = useSignupMutation();

  const {
    mutate: login,
    isLoading: isLoggingIn,
    error: loginError,
  } = useLocalLogin();

  const error = unformattedSignupError?.toString()?.includes('User not found')
    ? 'Account is already registered, or invitation is no longer valid. Try logging in.'
    : `Account set up failed: ${unformattedSignupError}`;

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

  useEffect(() => {
    if (isSignupSuccess) {
      // toggleSuccessToast();
      const { email, password } = getValues();

      // logs in using the form values from sign up
      login({
        email,
        password,
      });
    }
  }, [isSignupSuccess, resetSignupQueryState, resetForm]);

  useEffect(() => {
    if (isSignupError) {
      // toggleErrorToast();
    }
  }, [isSignupError]);

  useEffect(() => {
    if (user?.id) {
      resetForm(defaultValues);
      resetSignupQueryState();

      // redirects to records page
      router.replace('/records');
    }
  }, [user?.id]);

  return {
    apiError: error || loginError,
    control,
    formErrors: errors,
    handleSubmit,
    isLoading: isSigningUp || isLoggingIn || isFormSubmitting,
    isSubmitDisabled: !isDirty || !isValid,
    signUp,
    watch,
    ...restOfBaseProps,
  };
}
