import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import type { BaseDeleteAccountFormProps } from './DeleteAccountForm';
import { useForm } from 'react-hook-form';
import { DeleteAccountFormData, DeleteAccountFormSchema } from './DeleteAccountForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

export default function useDeleteAccountFormProps({
  ...restOfBaseProps
}: BaseDeleteAccountFormProps) {
  const user = useCurrentUser();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<DeleteAccountFormData>({
    defaultValues: {
      confirm: ''
    },
    resolver: yupResolver(DeleteAccountFormSchema),
  });

  const {
    mutate: deleteUser,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useDeleteUser();

  const deleteAccount = () => {
    // Adds record to db
    if(user?.id) {
      deleteUser({ idsToDelete: [user.id]}, {
        onSuccess: () => {
          // Redirects to Login page
          // setTimeout(() => router.replace('/login'), 1000);
        },
      });
    }

  };

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Deleted account',
        position: 'bottom',
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to delete account',
        text2: error?.message,
        position: 'bottom',
      });
    }
  }, [isError, error]);

  return {
    deleteAccount,
    control,
    handleSubmit,
    isLoading,
    isDirty,
    isValid,
    ...restOfBaseProps,
  };
}
