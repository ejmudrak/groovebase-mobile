/*
  @component EditRecordForm
  @description 
*/

import { View, StyleSheet } from 'react-native';
import type { EditRecordFormProps } from './EditRecordForm';
import Card from 'components/Card';
import { Controller } from 'react-hook-form';
import ConditionInput from '@features/records/add-record/ConditionInput';
import BinsInput from '@features/records/add-record/BinsInput';
import TextInput from 'components/TextInput';
import ActionInput from '@features/records/add-record/ActionInput';
import UpdateRecordButton from '../UpdateRecordButton';

export default function EditRecordForm({
  control,
  isValid,
  isDirty,
  isRecordQueryLoading,
  recordId,
  userRecordId,
  handleSubmit,
}: EditRecordFormProps) {
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

        <UpdateRecordButton
          recordId={recordId}
          userRecordId={userRecordId}
          handleSubmit={handleSubmit}
          isDirty={isDirty}
          isValid={isValid}
          isRecordQueryLoading={isRecordQueryLoading}
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

  form: {
    display: 'flex',
    gap: 24,
    marginBottom: 8,
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});