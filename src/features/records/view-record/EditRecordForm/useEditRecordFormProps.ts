import { useForm } from 'react-hook-form';
import { BaseEditRecordFormProps } from './EditRecordForm';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  EditRecordFormData,
  editRecordFormSchema,
} from './EditRecordForm.schema';
import { useUpdateUserRecord } from './hooks/useUpdateUserRecord';
import { useUserRecordQuery } from './hooks/useUserRecordQuery';
import { useEffect, useMemo } from 'react';
import {
  convertActionToSelectOptions,
  convertBinsToSelectOptions,
  convertMediaConditionToSelectOptions,
} from './utils/convert-options';
import { useCreateRecordBins } from '@src/features/bins/hooks/useCreateRecordBins';
import Toast from 'react-native-toast-message';

export default function useEditRecordFormProps({
  record,
  ...restOfBaseProps
}: BaseEditRecordFormProps) {
  const {
    data: userRecord,
    isSuccess: isUserRecordQuerySuccess,
    isLoading: isRecordQueryLoading,
  } = useUserRecordQuery(record.id);

  const {
    id,
    action,
    bins,
    mediaCondition,
    color = '',
    price = '',
    notes = '',
  } = userRecord || {};

  const initialValues = useMemo(
    () => ({
      action: convertActionToSelectOptions(action),
      bins: convertBinsToSelectOptions(bins),
      mediaCondition: convertMediaConditionToSelectOptions(mediaCondition),
      color,
      price: price ? price?.toString() : '',
      notes,
    }),
    [isUserRecordQuerySuccess],
  );

  // sets up form
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty, errors },
    reset,
  } = useForm<EditRecordFormData>({
    defaultValues: {
      action: [],
      bins: [],
      mediaCondition: [],
      color: '',
      price: '',
      notes: '',
    },
    resolver: yupResolver(editRecordFormSchema),
  });

  // resets form when user-record is fetched with new values
  useEffect(() => {
    reset(initialValues);
  }, [isUserRecordQuerySuccess]);

  const {
    mutate: handleUpdateUserRecord,
    isLoading: isUpdatingUserRecord,
    isSuccess: isUpdatingUserRecordSuccess,
    isError: isUpdatingUserRecordError,
    error: updateUserRecordError,
  } = useUpdateUserRecord(id || 0);
  const {
    mutate: createRecordBin,
    isLoading: isCreatingBins,
    isSuccess: isCreatingBinsSuccess,
    isError: isCreatingBinsError,
    error: createBinsError,
  } = useCreateRecordBins();

  const updateUserRecord = (data: EditRecordFormData) => {
    handleUpdateUserRecord(data);

    // Removes existing bins and adds record to bin(s)
    const recordBinsPayload = data?.bins?.map(({ value }) => ({
      recordId: id,
      binId: parseInt(value),
    }));

    if (recordBinsPayload?.length) {
      createRecordBin(recordBinsPayload);
    }
  };

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

  const isUpdating = isUpdatingUserRecord || isCreatingBins;

  return {
    control,
    record,
    handleSubmit,
    updateUserRecord,
    isValid,
    isDirty,
    isRecordQueryLoading,
    isUpdating,
    ...restOfBaseProps,
  };
}
