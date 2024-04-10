/*
  @component EditRecordForm
  @description 
*/

import { View, StyleSheet } from 'react-native';
import type { EditRecordFormProps } from './EditRecordForm';
import { Controller } from 'react-hook-form';
import ConditionInput from '@features/records/add-record/ConditionInput';
import BinsInput from '@features/records/add-record/BinsInput';
import TextInput from 'components/TextInput';
import ActionInput from '@features/records/add-record/ActionInput';
import UpdateRecordButton from '../UpdateRecordButton';
import EditRecordFormSkeleton from './EditRecordForm.skeleton';

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
    <>
      <View style={styles.form}>
        {!isRecordQueryLoading && userRecordId && recordId ? (
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

            <View style={styles.rowInputs}>
              <Controller
                control={control}
                name='color'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label='Color/Variant'
                    placeholder='ex. marbled red'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    containerStyle={styles.rowInput}
                  />
                )}
              />

              <Controller
                control={control}
                name='price'
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    label='Price'
                    placeholder='$30'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    containerStyle={styles.rowInput}
                    inputMode='decimal'
                  />
                )}
              />
            </View>

            <Controller
              control={control}
              name='notes'
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  label='Liner Notes'
                  placeholder='Add some additional notes...'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </View>
        ) : (
          <EditRecordFormSkeleton />
        )}
      </View>

      <UpdateRecordButton
        recordId={recordId}
        userRecordId={userRecordId}
        handleSubmit={handleSubmit}
        isDirty={isDirty}
        isValid={isValid}
        isRecordQueryLoading={isRecordQueryLoading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    gap: 24,
    marginBottom: 16,
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flex: 1,
  },

  rowInputs: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    gap: 12,
  },
  rowInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
