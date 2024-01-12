import { StyleSheet, View } from 'react-native';
import { shadows } from '@src/utils/styles/shadows';
import { colors } from '@src/utils/styles/colors';

export interface CardProps {
  children?: React.ReactNode;
  elevation?: keyof typeof shadows;
  style?: Record<string, unknown>;
}

export default function Card({ children, elevation = 0, style }: CardProps) {
  return (
    <View style={[styles.container, shadows[elevation], style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    backgroundColor: colors.white[500],
    borderRadius: 24,
  },
});
