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

export interface AddRecordFormProps {}

export default function AddRecordForm({}: AddRecordFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      action: [],
      bins: [],
      mediaCondition: [],
      color: '',
      price: '',
      notes: '',
    },
  });
  const onSubmit = (data: any) => console.log('submitted data: ', data);

  console.log('values: ', getValues());

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Controller
        control={control}
        name='action'
        render={({ field, fieldState }) => (
          <ActionInput {...field} {...fieldState} />
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
        name='mediaCondition'
        render={({ field, fieldState }) => (
          <ConditionInput {...field} {...fieldState} />
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
            placeholder='Write some liner notes...'
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />

      <Button title='Submit' onPress={onSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 325,
    // flex: 1,
  },
  content: {
    flexGrow: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});
