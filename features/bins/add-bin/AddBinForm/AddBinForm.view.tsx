/*
  @component AddBinForm
  @description 
*/

import { StyleSheet, View } from 'react-native';
import { Controller } from 'react-hook-form';
import TextInput from 'components/TextInput';
import Button from 'components/Button/Button';
import { AddBinFormProps } from './AddBinForm';

export default function AddBinForm({
  addBin,
  control,
  handleSubmit,
  isDirty,
  isLoading,
  isValid,
}: AddBinFormProps) {
  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Controller
          control={control}
          name='name'
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label='Name'
              placeholder='ex. decade, genre, mood'
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </View>

      <Button
        title='Submit'
        onPress={handleSubmit(addBin)}
        isLoading={isLoading}
        disabled={!isDirty || (isDirty && !isValid)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    display: 'flex',
    gap: 24,
    marginBottom: 8,
  },
  fields: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    flexGrow: 1,
  },
});
