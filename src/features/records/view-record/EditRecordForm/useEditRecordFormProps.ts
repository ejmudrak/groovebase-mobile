import { useForm } from 'react-hook-form';
import { BaseEditRecordFormProps } from './EditRecordForm';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  EditRecordFormData,
  editRecordFormSchema,
} from './EditRecordForm.schema';
import { useEffect, useMemo } from 'react';
import {
  convertActionToSelectOptions,
  convertBinsToSelectOptions,
  convertMediaConditionToSelectOptions,
} from '../utils/convert-options';
import useRefresh from '@src/utils/hooks/useRefresh';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { useUserRecordsQuery } from '../hooks/useUserRecordsQuery';

export default function useEditRecordFormProps({
  record,
  ...restOfBaseProps
}: BaseEditRecordFormProps) {
  const user = useCurrentUser();
  const {
    data: { items = [] } = {},
    isSuccess: isUserRecordQuerySuccess,
    isLoading: isRecordQueryLoading,
    refetch,
  } = useUserRecordsQuery({ recordId: record.id, userId: user?.id });

  useRefresh(refetch);

  const userRecord = items[0] || {};
  const {
    action,
    bins,
    mediaCondition,
    color = '',
    price = '',
    notes = '',
  } = userRecord;

  const initialValues = useMemo(
    () => ({
      action: convertActionToSelectOptions(action),
      bins: convertBinsToSelectOptions(bins),
      mediaCondition: convertMediaConditionToSelectOptions(mediaCondition),
      color,
      price: price ? price?.toString() : '',
      notes,
    }),
    [
      isUserRecordQuerySuccess,
      action,
      bins,
      mediaCondition,
      color,
      price,
      notes,
    ],
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
  // TODO: Reset form on successful update
  useEffect(() => {
    reset(initialValues);
  }, [isUserRecordQuerySuccess, initialValues]);

  return {
    control,
    recordId: record.id,
    userRecordId: userRecord.id,
    handleSubmit,
    isValid,
    isDirty,
    isRecordQueryLoading,
    ...restOfBaseProps,
  };
}
