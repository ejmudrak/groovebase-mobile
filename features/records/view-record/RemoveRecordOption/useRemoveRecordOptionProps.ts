import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { useDeleteUserRecord } from '../hooks/useRemoveUserRecord';
import type { BaseRemoveRecordOptionProps } from './RemoveRecordOption';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';

export default function useRemoveRecordOptionProps(
  baseProps: BaseRemoveRecordOptionProps,
) {
  const { recordId, closeModal } = baseProps;

  // Removes a record from a user's collection using a query param,
  //  which needs the record's id and the user's id
  const user = useCurrentUser();
  const {
    mutate: removeRecord,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useDeleteUserRecord({
    recordId,
    userId: user?.id,
  });

  const handleRemoveRecord = () => {
    if (recordId && user?.id) {
      removeRecord({});
    }
  };

  const handleRecordRemovedSuccess = () => {
    closeModal && closeModal();

    // Redirects to Collection page
    setTimeout(() => router.push('/records'), 1000);
  };

  // Success and error toast messages
  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Removed record successfully',
        position: 'bottom',
        visibilityTime: 2000,
      });

      handleRecordRemovedSuccess();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to remove record',
        text2: error?.message,
        position: 'bottom',
      });
    }
  }, [isError]);

  useEffect(() => {
    if (!recordId || !user?.id) {
      Toast.show({
        type: 'error',
        text1: 'Failed to remove record',
        text2: 'Record ID or user ID is missing',
        position: 'bottom',
      });
    }
  }, [recordId, user?.id]);

  return { handleRemoveRecord, isRemovingRecord: isLoading, ...baseProps };
}
