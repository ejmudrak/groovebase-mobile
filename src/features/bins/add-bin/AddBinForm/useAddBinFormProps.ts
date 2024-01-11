import { useCurrentUser } from '@src/features/users/useCurrentUser';
import type { BaseAddBinFormProps } from './AddBinForm';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { AddBinFormData, addBinFormSchema } from './AddBinForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateBin } from '../../hooks/useCreateBin';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';

export default function useAddBinFormProps({
  ...restOfBaseProps
}: BaseAddBinFormProps) {
  const user = useCurrentUser();
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
    reset: resetForm,
  } = useForm<AddBinFormData>({
    defaultValues: {
      userId: user?.id,
      name: '',
    },
    resolver: yupResolver(addBinFormSchema),
  });

  const {
    mutate: createBin,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useCreateBin();

  const addBin = (data: AddBinFormData) => {
    // Adds record to db
    createBin(data, {
      onSuccess: () => {
        // Redirects to Bins page
        setTimeout(() => navigate('Bins' as never), 1000);
        resetForm();
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Bin added! 🎸',
        position: 'bottom',
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to add bin',
        text2: error?.message,
        position: 'bottom',
      });
    }
  }, [isError, error]);

  return {
    addBin,
    control,
    handleSubmit,
    isLoading,
    isDirty,
    isValid,
    ...restOfBaseProps,
  };
}
