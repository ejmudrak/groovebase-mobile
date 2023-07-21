import { shadows } from '@src/utils/styles/shadows';
import { Pressable, StyleSheet, PressableProps } from 'react-native';

export interface IconButtonProps extends PressableProps {
  style?: any;
}

export default function IconButton({
  children,
  style,
  ...rest
}: IconButtonProps) {
  return (
    <Pressable style={[styles.container, style]} {...rest}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    ...shadows[300],
  },
});
