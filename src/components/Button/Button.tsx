import { colors } from '@src/utils/styles/colors';
import { Pressable, PressableProps, StyleSheet } from 'react-native';
import Text from '../Text';
import { TextVariants } from '@src/utils/styles/typography';

export interface ButtonProps extends PressableProps {
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title: string;
  variant?: 'outlined' | 'contained';
}

const textVariantMap: Record<string, TextVariants> = {
  xs: 'body3Bold',
  sm: 'body2Bold',
  md: 'body2Bold',
  lg: 'body2Bold',
  xl: 'body1Bold',
};

export default function Button({
  disabled,
  fullWidth,
  title,
  size = 'md',
  variant = 'contained',
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={[
        styles.container,
        fullWidth && styles.fullWidth,
        styles[size],
        variant === 'outlined'
          ? styles.outlinedPressable
          : styles.containedPressable,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text
        variant={textVariantMap[size]}
        style={
          variant === 'outlined' ? styles.outlinedText : styles.containedText
        }
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    backgroundColor: colors.blue[100],
    border: 'none',
  },

  // variant styles
  containedPressable: {
    backgroundColor: colors.blue[500],
  },
  outlinedPressable: {
    borderWidth: 1,
    borderColor: colors.blue[500],
  },
  containedText: {
    color: colors.white[500],
  },
  outlinedText: {
    color: colors.blue[500],
  },

  // size styles
  xs: { borderRadius: 16, paddingHorizontal: 12, paddingVertical: 4 },
  sm: { borderRadius: 16, paddingHorizontal: 12, paddingVertical: 4 },
  md: { borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6 },
  lg: { borderRadius: 24, paddingHorizontal: 18, paddingVertical: 8 },
  xl: { borderRadius: 30, paddingHorizontal: 20, paddingVertical: 10 },
});
