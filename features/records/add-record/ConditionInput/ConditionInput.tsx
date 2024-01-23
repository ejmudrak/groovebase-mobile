/*
  @component ConditionInput
  @description Select input for specifying the media condition of a record
*/

import SelectInput from '@components/SelectInput/SelectInput';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import Text from '@components/Text/Text';
import useConditionInput from './useConditionInput';

export interface ConditionInputProps
  extends ControllerRenderProps,
    ControllerFieldState {
  required?: boolean;
}

export default function ConditionInput({
  error,
  ...restOfProps
}: ConditionInputProps) {
  const { conditionOptions } = useConditionInput();

  return (
    <>
      <SelectInput
        options={conditionOptions}
        label='Condition'
        placeholder='Select media condition'
        {...restOfProps}
      />
      {Boolean(error) && <Text>This field is required</Text>}
    </>
  );
}
