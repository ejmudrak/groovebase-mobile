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
      <View style={styles.fields}>
        <View>
          <Text variant='body2Bold'>
            Are you sure you want to delete your account?
          </Text>
          <Text>Your records and bins will be lost.</Text>
        </View>

        <Controller
          control={control}
          name='confirm'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label='Enter "girl bye" into the input below to confirm'
              placeholder='girl bye'
              autoCapitalize='none'
              autoCorrect={false}
              autoComplete='off'
              autoFocus
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>

      <Button
        title='Delete'
        onPress={handleSubmit(deleteAccount)}
        isLoading={isLoading}
        disabled={!isDirty || (isDirty && !isValid)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    marginBottom: 8,
  },
  fields: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
});
