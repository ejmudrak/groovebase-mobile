import { StyleSheet, View } from 'react-native';
import type { ChipProps } from './Chip';
import { colors } from '@utils/styles/colors';
import Text from '@components/Text';

export default function Chip({
  color = colors.blue[500],
  labelColor,
  variant = 'outlined',
  size = 'md',
  label,
  icon,
}: ChipProps) {
  return (
    <View
      style={[
        styles.container,
        getVariantStyles(variant, color),
        getSizeStyles(size, color),
      ]}
    >
      <Text
        variant='body3Bold'
        color={getLabelColor(labelColor, variant, color)}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    paddingHorizontal: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const getLabelColor = (
  labelColor: ChipProps['labelColor'],
  variant: ChipProps['variant'],
  color: ChipProps['color'],
) => {
  if (labelColor) return labelColor;

  if (variant === 'filled') return colors.white[500];
  else return color;
};

const getVariantStyles = (
  variant: ChipProps['variant'],
  color: ChipProps['color'],
) => {
  return variant === 'filled'
    ? { backgroundColor: color }
    : { borderColor: color, borderWidth: 1 };
};

const getSizeStyles = (size: ChipProps['size'], color: ChipProps['color']) => {
  if (size === 'sm') {
    return {
      height: 24,
    };
  } else if (size === 'md') {
    return {
      height: 32,
    };
  } else if (size === 'lg') {
    return {
      height: 40,
    };
  }

  return {};
};
