import { colors } from 'utils/styles/colors';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import Text from '../Text';
import { TextVariants } from 'utils/styles/typography';

export interface ButtonProps extends PressableProps {
  fullWidth?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title: string;
  variant?: 'outlined' | 'contained';
  isLoading?: boolean;
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
  isLoading,
  size = 'md',
  title,
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
      {isLoading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          color={variant === 'outlined' ? colors.blue[500] : colors.white[500]}
        />
      )}
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
  activityIndicator: {
    marginRight: 12,
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
