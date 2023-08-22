/*
  @component SelectOption
  @description option item in the selection modal
*/

import { View, StyleSheet, Pressable } from 'react-native';
import { Option } from './SelectInput';
import Text from '../Text/Text';
import Checkbox from '../Checkbox/Checkbox';
import { colors } from '@src/utils/styles/colors';
import { useMemo } from 'react';

export interface SelectOptionProps {
  multiple?: boolean;
  option: Option;
  selected: Option[];
  setSelected: React.Dispatch<React.SetStateAction<Option[]>>;
}

export default function SelectOption({
  multiple,
  option,
  selected,
  setSelected,
}: SelectOptionProps) {
  const isSelected = useMemo(
    () => Boolean(selected.find((s) => s.value === option.value)),
    [selected, option.value],
  );

  const handleOptionPress = () => {
    if (multiple) {
      // add or remove from selected options
      if (!isSelected) {
        setSelected((prevSelected) => prevSelected.concat([option]));
      } else {
        setSelected((prevSelected) =>
          prevSelected.filter((ps) => ps.value !== option.value),
        );
      }
    } else {
      // set this option as the only selected option
      setSelected([option]);
    }
  };

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
