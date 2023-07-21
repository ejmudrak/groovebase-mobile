import { View, StyleSheet } from 'react-native';

export interface TemplateProps {}

export default function Template({}: TemplateProps) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
