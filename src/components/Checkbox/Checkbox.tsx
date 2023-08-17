/*
  @component Checkbox
  @description 
*/

import { colors } from '@src/utils/styles/colors';
import { View, StyleSheet } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export interface CheckboxProps {
  isChecked?: boolean;
}

export default function Checkbox({ isChecked }: CheckboxProps) {
  return (
    <View
      style={[styles.container, isChecked ? styles.checked : styles.unchecked]}
    >
      <View style={styles.icon}>{isChecked && <CheckboxIcon />}</View>
    </View>
  );
}

const CheckboxIcon = () => (
  <Svg width='16' height='16' viewBox='0 0 24 18' fill='none'>
    <Path
      d='M20 6L9 17L4 12'
      stroke={colors.white[500]}
      strokeWidth={3.25}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    transform: [{ rotate: '45deg' }],
    borderRadius: 6,
  },

  unchecked: {
    borderWidth: 2,
    borderColor: colors.blue[200],
  },

  checked: {
    backgroundColor: colors.blue[500],
  },

  icon: {
    transform: [{ rotate: '-45deg' }],
  },
});
