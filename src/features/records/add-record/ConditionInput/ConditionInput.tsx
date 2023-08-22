/*
  @component ConditionInput
  @description Select input for specifying the condition of a record
*/

import SelectInput from '@src/components/SelectInput/SelectInput';
import { StyleSheet } from 'react-native';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import Text from '@src/components/Text/Text';
import useConditionInput from './useConditionInput';

export interface ConditionInputProps
  extends ControllerRenderProps,
    ControllerFieldState {}

export default function ConditionInput({
  onBlur,
  onChange,
  value,
  error,
}: ConditionInputProps) {
  const { conditionOptions } = useConditionInput();

  return (
    <>
      <SelectInput
        options={conditionOptions}
        label='Condition'
        placeholder='Select media condition'
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      {Boolean(error) && <Text>This field is required</Text>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
