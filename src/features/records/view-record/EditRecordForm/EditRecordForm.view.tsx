/*
  @component EditRecordForm
  @description 
*/

import { View, StyleSheet, ScrollView } from 'react-native';
import { EditRecordFormProps } from './EditRecordForm';
import Card from '@src/components/Card';
import { Controller } from 'react-hook-form';
import ConditionInput from '../../add-record/ConditionInput';
import BinsInput from '../../add-record/BinsInput';
import TextInput from '@src/components/TextInput';
import Button from '@src/components/Button';
import ActionInput from '../../add-record/ActionInput';

export default function EditRecordForm({
  record,
  control,
  onSubmit,
  isValid,
  isDirty,
}: EditRecordFormProps) {
  return (
    <Card elevation={100} style={styles.container}>
      <ScrollView>
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
            onPress={onSubmit}
            disabled={!isDirty || (isDirty && !isValid)}
          />
        </View>
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 425,
    padding: 16,
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