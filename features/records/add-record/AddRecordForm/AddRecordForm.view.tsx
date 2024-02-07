/*
  @component AddRecordForm
  @description 
*/

import { StyleSheet, View } from 'react-native';
import { Controller } from 'react-hook-form';
import ActionInput from '../ActionInput';
import BinsInput from '../BinsInput';
import ConditionInput from '../ConditionInput';
import TextInput from '@components/TextInput';
import Button from '@components/Button/Button';
import Card from '@components/Card';
import { AddRecordFormProps } from './AddRecordForm';

export default function AddRecordForm({
  addRecordToCollection,
  control,
  handleSubmit,
  isDirty,
  isLoading,
  isValid,
}: AddRecordFormProps) {
  return (
    <Card elevation={100} style={styles.container}>
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
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    marginBottom: 16,
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
