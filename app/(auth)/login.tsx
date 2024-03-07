import { StyleSheet } from 'react-native';
import Card from '@components/Card/Card';
import LoginForm from '@features/users/login/LoginCard';

export default function LoginPage() {
  return (
    <Card elevation={200} style={styles.card}>
      <LoginForm />
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
