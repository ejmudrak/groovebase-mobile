/*
  @component ActionInput
  @description Select input that asks user how they got a record
*/

import SelectInput from '@src/components/SelectInput/SelectInput';
import { StyleSheet } from 'react-native';
import useActionInput from './useActionInput';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import Text from '@src/components/Text/Text';

export interface ActionInputProps
  extends ControllerRenderProps,
    ControllerFieldState {}

export default function ActionInput({
  onBlur,
  onChange,
  value,
  error,
}: ActionInputProps) {
  const { actionOptions } = useActionInput();

  return (
    <>
      <SelectInput
        options={actionOptions}
        label={`How'd you get it?`}
        placeholder='Select an option'
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
