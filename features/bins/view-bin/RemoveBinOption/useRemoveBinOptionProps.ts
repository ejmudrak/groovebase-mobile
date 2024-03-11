import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import type { BaseRemoveBinOptionProps } from './RemoveBinOption';
import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useDeleteBins } from '../../hooks/useDeleteBins';
import { router } from 'expo-router';

export default function useRemoveBinOptionProps(
  baseProps: BaseRemoveBinOptionProps,
) {
  const { binId, closeModal } = baseProps;
  const user = useCurrentUser();

  // Removes a bin using a query param, which needs the user's id
  const {
    mutate: removeBin,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useDeleteBins({
    userId: user?.id,
  });

  const handleRemoveBin = () => {
    if (binId && user?.id) {
      removeBin({ idsToDelete: [binId] });
    }
  };

  const handleBinRemovedSuccess = () => {
    closeModal && closeModal();

    // Redirects to Bins page
    setTimeout(() => router.replace('/bins'), 1000);
  };

  // Success and error toast messages
  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Removed bin successfully',
        position: 'bottom',
      });

      handleBinRemovedSuccess();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Failed to remove bin',
        text2: error?.message,
        position: 'bottom',
      });
    }
  }, [isError]);

  useEffect(() => {
    if (!binId || !user?.id) {
      Toast.show({
        type: 'error',
        text1: 'Cannot remove bin',
        text2: 'Bin ID or user ID is missing',
        position: 'bottom',
      });
    }
  }, [binId, user?.id]);

  return { handleRemoveBin, isRemovingBin: isLoading, ...baseProps };
}
