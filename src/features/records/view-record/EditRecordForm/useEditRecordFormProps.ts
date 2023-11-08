import { useForm } from 'react-hook-form';
import { BaseEditRecordFormProps } from './EditRecordForm';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  EditRecordFormData,
  editRecordFormSchema,
} from './EditRecordForm.schema';
import { useUpdateUserRecord } from './hooks/useUpdateUserRecord';

export default function useEditRecordFormProps({
  record,
  ...restOfBaseProps
}: BaseEditRecordFormProps) {
  // TODO: Fetch user-record for this album
  const userRecord: any = {};

  const {
    id,
    action = [],
    bins = [],
    mediaCondition,
    color,
    price,
    notes,
  } = userRecord;

  // sets up form
  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<EditRecordFormData>({
    defaultValues: {
      action,
      bins,
      mediaCondition,
      color,
      price,
      notes,
    },
    resolver: yupResolver(editRecordFormSchema),
  });

  const { mutate: updateUserRecord } = useUpdateUserRecord(id);

  const onSubmit = () => {
    handleSubmit((data: EditRecordFormData) => updateUserRecord(data));
  };

  return { control, record, onSubmit, isValid, isDirty, ...restOfBaseProps };
}
