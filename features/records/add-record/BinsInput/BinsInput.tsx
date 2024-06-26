/*
  @component BinsInput
  @description Select input that allows user to assign bins to a record
*/

import SelectInput, {
  SelectInputProps,
} from '@components/SelectInput/SelectInput';
import { StyleSheet } from 'react-native';
import { ControllerFieldState, ControllerRenderProps } from 'react-hook-form';
import Text from '@components/Text/Text';
import { useBinsQuery } from '@features/bins/hooks/useBinsQuery';
import { useMemo } from 'react';
import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import useRefresh from '@utils/hooks/useRefresh';

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
  const user = useCurrentUser();
  const { data: { items: bins = [] } = {}, refetch } = useBinsQuery({
    userId: user?.id || 0,
    $sort: { name: 1 },
    $limit: 100,
  });

  useRefresh(refetch);

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
