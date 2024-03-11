import { useState } from 'react';
import type { BaseLocalLoginFormProps } from './LocalLoginForm';
import { useLocalLogin } from '../hooks/useLocalLogin';

export default function useLocalLoginFormProps({
  ...restOfBaseProps
}: BaseLocalLoginFormProps) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const {
    mutate: authenticate,
    isLoading: isLoggingIn,
    error,
    isError,
  } = useLocalLogin();

  const logIn = () => {
    authenticate({ email: email.toLowerCase(), password });
  };

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
