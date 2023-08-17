/*
  @component AddRecordForm
  @description 
*/

import { View, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Text from '@src/components/Text/Text';
import SelectInput from '@src/components/SelectInput/SelectInput';
import TextInput from '@src/components/TextInput/TextInput';

export interface AddRecordFormProps {}

export default function AddRecordForm({}: AddRecordFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      action: '',
      bins: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);

  const actionOptions = [
    { value: '1', label: 'Snagged a new release' },
    { value: '2', label: 'Went crate digging' },
    { value: '3', label: 'Was graciously gifted' },
  ];

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <SelectInput
            options={actionOptions}
            label={`How'd you get it?`}
            placeholder='Select an option'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='action'
      />
      {errors.action && <Text>This is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label='Bins'
            placeholder='Select bins'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name='bins'
      />
      {errors.bins && <Text>This is required.</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
});
