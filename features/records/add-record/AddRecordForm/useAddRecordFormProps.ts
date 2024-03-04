import Toast from 'react-native-toast-message';
import type { BaseAddRecordFormProps } from './AddRecordForm';
import { AddRecordFormData, addRecordFormSchema } from './AddRecordForm.schema';
import { router } from 'expo-router';
import { useCreateRecord } from '../hooks/useCreateRecord';
import { useCreateRecordBins } from '@features/bins/hooks/useCreateRecordBins';
import { useCreateUserRecord } from '../hooks/useCreateUserRecord';
import { useCurrentUser } from '@features/users/useCurrentUser';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function useAddRecordFormProps({
  record,
  ...restOfBaseProps
}: BaseAddRecordFormProps) {
  const user = useCurrentUser();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<AddRecordFormData>({
    defaultValues: {
      userId: user?.id,
      recordId: undefined,
      action: [],
      bins: [],
      mediaCondition: [],
      color: '',
      price: '',
      notes: '',
    },
    resolver: yupResolver(addRecordFormSchema),
  });

  const {
    mutate: createUserRecord,
    isSuccess: isCreateUserRecordSuccess,
    isLoading: isCreatingUserRecord,
    isError: isCreatingUserRecordError,
    error: createUserRecordError,
  } = useCreateUserRecord();

  const {
    mutate: createRecord,
    isSuccess: isCreateRecordSuccess,
    isLoading: isCreatingRecord,
    isError: isCreateRecordError,
    error: createRecordError,
  } = useCreateRecord();

  const {
    mutate: createRecordBin,
    isSuccess: isCreateRecordBinSuccess,
    isLoading: isCreatingRecordBin,
    isError: isCreatingRecordBinError,
    error: createRecordBinError,
  } = useCreateRecordBins();

  const isSuccess =
    isCreateRecordSuccess &&
    isCreateUserRecordSuccess &&
    isCreateRecordBinSuccess;

  const isError =
    isCreateRecordError ||
    isCreatingUserRecordError ||
    isCreatingRecordBinError;

  const isLoading =
    isCreatingRecord || isCreatingUserRecord || isCreatingRecordBin;

  const addRecordToCollection = (data: AddRecordFormData) => {
    // Adds record to db
    createRecord(record, {
      onSuccess: ({ id }) => {
        // Adds record to user's collection
        createUserRecord(
          { recordId: id, ...data },
          {
            onSuccess: () => {
              // Redirects to Collection page
              setTimeout(() => router.replace('/records'), 1000);
            },
          },
        );

        // Adds record to bin(s)
        const recordBinsPayload = data?.bins?.map(({ value }) => ({
          recordId: id,
          binId: parseInt(value),
        }));

        if (recordBinsPayload?.length) {
          createRecordBin(recordBinsPayload);
        }
      },
    });
  };

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Record added to your collection! 🎸',
        position: 'bottom',
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to add record',
        text2:
          createRecordError?.message ||
          createUserRecordError?.message ||
          createRecordBinError?.message,
        position: 'bottom',
      });
    }
  }, [isError, createRecordError, createUserRecordError, createRecordBinError]);

  return {
    addRecordToCollection,
    control,
    handleSubmit,
    isDirty,
    isLoading,
    isValid,
    ...restOfBaseProps,
  };
}
