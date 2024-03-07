import Card from '@components/Card';
import SignupForm from '@features/users/signup/SignupForm';
import { StyleSheet } from 'react-native';

export default function SignupPage() {
  return (
    <Card elevation={200} style={styles.card}>
      <SignupForm />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 24,
    flex: 0,
    width: '100%',
  },
});
