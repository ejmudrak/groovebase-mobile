import { Button as RNButton, ButtonProps as RNButtonProps } from 'react-native';

export interface ButtonProps extends RNButtonProps {}

export default function Button(props: ButtonProps) {
  return <RNButton {...props} />;
}
