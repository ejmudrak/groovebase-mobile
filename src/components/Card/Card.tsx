import { StyleSheet, View } from 'react-native';
import { shadows } from '@src/utils/styles/shadows';

export interface CardProps {
  children?: React.ReactNode;
  elevation?: keyof typeof shadows;
  style?: Record<string, unknown>;
}

export default function Card({ children, elevation = 0, style }: CardProps) {
  return (
    <View style={[styles.card, shadows[elevation], style]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
});
