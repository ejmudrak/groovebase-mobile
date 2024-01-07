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
import { useCreateRecordBins } from '@src/features/bins/hooks/useCreateRecordBins';
import Toast from 'react-native-toast-message';
import { useEffect } from 'react';

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
              setTimeout(() => navigate('Collection' as never), 1000);
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
          isLoading={isLoading}
          disabled={!isDirty || (isDirty && !isValid)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 450,
    flex: 1,
    width: '100%',
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
