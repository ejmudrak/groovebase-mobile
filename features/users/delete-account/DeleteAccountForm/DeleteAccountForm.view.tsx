/*
  @component DeleteAccountForm
  @description 
*/

import { StyleSheet, View } from 'react-native';
import { Controller } from 'react-hook-form';
import TextInput from 'components/TextInput';
import Button from 'components/Button/Button';
import { DeleteAccountFormProps } from './DeleteAccountForm';
import Text from '@components/Text';

export default function DeleteAccountForm({
  control,
  handleSubmit,
  deleteAccount,
  isLoading,
  isDirty,
  isValid,
}: DeleteAccountFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.fields}>
          <Text>Are you sure you want to delete your account?</Text>
          
          <Controller
            control={control}
            name='confirm'
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                label='Confirm Deletion'
                placeholder='girl bye'
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </View>

        <Button
          title='Submit'
          onPress={handleSubmit(deleteAccount)}
          isLoading={isLoading}
          disabled={!isDirty || (isDirty && !isValid)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
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
