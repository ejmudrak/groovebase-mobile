import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { colors } from 'utils/styles/colors';
import { typography } from 'utils/styles/typography';

export type TextVariants = keyof typeof typography;
export interface TextProps extends RNTextProps {
  variant?: TextVariants;
  color?: string;
}

export default function Text(props: TextProps) {
  const {
    children,
    variant = 'body3',
    color = colors.black[500],
    style,
    ...rest
  } = props;

  return (
    <RNText style={[typography[variant], { color }, style]} {...rest}>
      {children}
    </RNText>
  );
}
