import { useState } from 'react';
import type { BaseLocalLoginFormProps } from './LocalLoginForm';
import { useLocalLogin } from '../useLocalLogin';

export default function useLocalLoginFormProps({
  ...restOfBaseProps
}: BaseLocalLoginFormProps) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const {
    mutate: logIn,
    isLoading: isLoggingIn,
    error,
    isError,
  } = useLocalLogin();

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    logIn,
    isLoggingIn,
    error,
    isError,
    ...restOfBaseProps,
  };
}
