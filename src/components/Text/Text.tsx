import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { typography } from '@src/utils/styles/typography';

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
