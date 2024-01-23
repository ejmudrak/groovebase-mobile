/*
  @component ActionInput
  @description Select input that asks user how they got a record
*/

import SelectInput from '@components/SelectInput/SelectInput';
import { StyleSheet } from 'react-native';
import useActionInput from './useActionInput';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import Text from '@components/Text/Text';

export interface ActionInputProps
  extends ControllerRenderProps,
    ControllerFieldState {
  required?: boolean;
}

export default function ActionInput({
  error,
  ...restOfProps
}: ActionInputProps) {
  const { actionOptions } = useActionInput();

  return (
    <>
      <SelectInput
        options={actionOptions}
        label={`How'd you get it?`}
        placeholder='Select an option'
        {...restOfProps}
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
