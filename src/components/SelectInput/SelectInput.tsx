/*
  @component SelectInput
  @description 
*/

import { View, StyleSheet } from 'react-native';

export interface SelectInputProps {}

export default function SelectInput({}: SelectInputProps) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
