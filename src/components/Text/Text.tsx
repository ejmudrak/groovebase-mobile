import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { typography } from '@src/utils/styles/typography';

export type TextVariants = keyof typeof typography;
export interface TextProps extends RNTextProps {
  variant: TextVariants;
  color?: string;
}

export default function Text(props: TextProps) {
  const { children, variant, color = colors.black[500], ...rest } = props;

  return (
    <RNText style={[typography[variant], { color }, props.style]} {...rest}>
      {children}
    </RNText>
  );
}
