/*
  @component ActionInput
  @description Select input that asks user how they got a record
*/

import { View, StyleSheet } from 'react-native';

export interface ActionInputProps {}

export default function ActionInput({}: ActionInputProps) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
