import { View, StyleSheet } from 'react-native';
import Text from '@src/components/Text';

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text variant='h4'>Log In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
