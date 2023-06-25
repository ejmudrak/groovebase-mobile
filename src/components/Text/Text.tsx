import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { typography } from '../../utils/styles/typography';

type TextVariants = keyof typeof typography;
export interface TextProps extends RNTextProps {
  variant: TextVariants;
}

export default function Text(props: TextProps) {
  const { children, variant, ...rest } = props;

  return (
    <RNText style={[typography[variant], props.style]} {...rest}>
      {children}
    </RNText>
  );
}
