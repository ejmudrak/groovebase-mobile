import { BaseUpdateRecordButtonProps } from './UpdateRecordButton';
import { EditRecordFormData } from '../EditRecordForm/EditRecordForm.schema';
import { useUpdateUserRecord } from '../hooks/useUpdateUserRecord';
import { useEffect } from 'react';
import { useCreateRecordBins } from '@src/features/bins/hooks/useCreateRecordBins';
import Toast from 'react-native-toast-message';

export default function useUpdateRecordButtonProps({
  recordId,
  ...restOfBaseProps
}: BaseUpdateRecordButtonProps) {
  const {
    mutate: handleUpdateUserRecord,
    isLoading: isUpdatingUserRecord,
    isSuccess: isUpdatingUserRecordSuccess,
    isError: isUpdatingUserRecordError,
    error: updateUserRecordError,
  } = useUpdateUserRecord(recordId || 0);

  const {
    mutate: createRecordBin,
    isLoading: isCreatingBins,
    isSuccess: isCreatingBinsSuccess,
    isError: isCreatingBinsError,
    error: createBinsError,
  } = useCreateRecordBins();

  const isUpdating = isUpdatingUserRecord || isCreatingBins;

  const updateUserRecord = (data: EditRecordFormData) => {
    handleUpdateUserRecord(data);

    // Removes existing bins and adds record to bin(s)
    const recordBinsPayload = data?.bins?.map(({ value }) => ({
      recordId,
      binId: parseInt(value),
    }));

    if (recordBinsPayload?.length) {
      createRecordBin(recordBinsPayload);
    }
  };

  // Handle success and error toasts
  useEffect(() => {
    if (isUpdatingUserRecordSuccess && isCreatingBinsSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Record updated! 🎸',
        position: 'bottom',
      });
    }
  }, [isUpdatingUserRecordSuccess, isCreatingBinsSuccess]);

  useEffect(() => {
    if (isUpdatingUserRecordError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to update bins for record',
        text2: updateUserRecordError?.message,
        position: 'bottom',
      });
    }
  }, [isUpdatingUserRecordError, updateUserRecordError]);

  useEffect(() => {
    if (isCreatingBinsError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to update bins for record',
        text2: createBinsError?.message,
        position: 'bottom',
      });
    }
  }, [isCreatingBinsError, createBinsError]);

  return {
    updateUserRecord,
    isUpdating,
    recordId,
    ...restOfBaseProps,
  };
}
