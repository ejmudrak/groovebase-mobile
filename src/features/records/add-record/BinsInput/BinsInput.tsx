/*
  @component BinsInput
  @description Select input that allows user to assign bins to a record
*/

import SelectInput, {
  SelectInputProps,
} from '@src/components/SelectInput/SelectInput';
import { StyleSheet } from 'react-native';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import Text from '@src/components/Text/Text';
import { useBinsQuery } from '@src/features/bins/useBinsQuery';
import { useMemo } from 'react';

export interface BinsInputProps
  extends ControllerRenderProps,
    ControllerFieldState,
    Pick<SelectInputProps, 'multiple'> {}

export default function BinsInput({
  onBlur,
  onChange,
  value,
  error,
  ...restOfProps
}: BinsInputProps) {
  const { data: { items: bins = [] } = {} } = useBinsQuery();

  const options = useMemo(
    () =>
      bins.map((bin) => ({
        label: bin.name,
        value: bin.id?.toString(),
      })),
    [bins],
  );

  return (
    <>
      <SelectInput
        options={options}
        label='Bins'
        placeholder='Select bins'
        onBlur={onBlur}
        onChange={onChange}
        value={value}
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
