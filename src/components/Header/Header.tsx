import { View, StyleSheet } from 'react-native';
import Text from '@src/components/Text';

export interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text variant='h3'>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
});
