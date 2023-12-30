/*
  @component AddRecordForm
  @description 
*/

import { ScrollView, StyleSheet, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import ActionInput from '../ActionInput';
import BinsInput from '../BinsInput';
import ConditionInput from '../ConditionInput';
import TextInput from '@src/components/TextInput';
import Button from '@src/components/Button/Button';
import { AddRecordFormData, addRecordFormSchema } from './AddRecordForm.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateUserRecord } from '../hooks/useCreateUserRecord';
import { Record } from '@src/types';
import { useCreateRecord } from '../hooks/useCreateRecord';
import { useCurrentUser } from '@src/features/users/useCurrentUser';
import { useNavigation } from '@react-navigation/native';
import { useCreateRecordBin } from '@src/features/bins/useCreateRecordBin';

export interface AddRecordFormProps {
  record: Record;
}

export default function AddRecordForm({ record }: AddRecordFormProps) {
  const user = useCurrentUser();
  const { navigate } = useNavigation();

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

  const { mutate: createUserRecord } = useCreateUserRecord();
  const { mutate: createRecord } = useCreateRecord();
  const { mutate: createRecordBin } = useCreateRecordBin();

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
              navigate('Collection' as never);
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Controller
            control={control}
            name='action'
            render={({ field, fieldState }) => (
              <ActionInput {...field} {...fieldState} required />
            )}
            rules={{
              required: true,
            }}
          />

          <Controller
            control={control}
            name='mediaCondition'
            render={({ field, fieldState }) => (
              <ConditionInput {...field} {...fieldState} required />
            )}
            rules={{
              required: true,
            }}
          />

          <Controller
            control={control}
            name='bins'
            render={({ field, fieldState }) => (
              <BinsInput {...field} {...fieldState} multiple />
            )}
          />

          <Controller
            control={control}
            name='color'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Color'
                placeholder='ex. black, cosmic marble purple'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='price'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Price'
                placeholder='Enter how much you paid'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name='notes'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Liner Notes'
                placeholder='Write some additional notes...'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </View>

        <Button
          title='Submit'
          onPress={handleSubmit(addRecordToCollection)}
          disabled={!isDirty || (isDirty && !isValid)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 425,
  },
  form: { display: 'flex', gap: 24, marginBottom: 8 },
  fields: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flexGrow: 1,
  },
});
