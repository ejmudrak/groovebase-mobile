/*
  @component SelectOption
  @description option item in the selection modal
*/

import { StyleSheet, Pressable } from 'react-native';
import { Option } from '../SelectInput';
import Text from '../../Text/Text';
import Checkbox from '../../Checkbox/Checkbox';
import { colors } from 'utils/styles/colors';
import { useMemo } from 'react';
import useSelectOption from './useSelectOption';

export interface SelectOptionProps {
  handleConfirm: (newSelected: Option[]) => void;
  multiple?: boolean;
  option: Option;
  selected: Option[];
  setSelected: React.Dispatch<React.SetStateAction<Option[]>>;
}

export default function SelectOption({
  option,
  ...restOfProps
}: SelectOptionProps) {
  const { isSelected, handleOptionPress } = useSelectOption({
    option,
    ...restOfProps,
  });

  return (
    <Pressable
      style={[styles.container, isSelected && styles.selected]}
      onPress={handleOptionPress}
    >
      <Checkbox isChecked={isSelected} />
      <Text variant='body3Bold'>{option.label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,

    borderRadius: 16,
    paddingHorizontal: 16,
    marginBottom: 8,
  },

  selected: {
    backgroundColor: colors.white[300],
  },
});
