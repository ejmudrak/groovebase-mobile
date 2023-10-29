import { colors } from '@src/utils/styles/colors';
import { typography } from '@src/utils/styles/typography';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  View,
} from 'react-native';
import Text from '../Text';
import { useState } from 'react';

export interface TextInputProps extends RNTextInputProps {
  hideOutline?: boolean;
  inputContainerStyle?: object;
  inputRef?: any;
  label?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export default function TextInput({
  hideOutline,
  inputContainerStyle,
  inputRef,
  label,
  leftIcon,
  rightIcon,
  style,
  ...restOfProps
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {Boolean(label) && <Text variant='body3Bold'>{label}</Text>}

      <View style={[styles.inputContainer, inputContainerStyle]}>
        {Boolean(leftIcon) && leftIcon}
        <RNTextInput
          style={[styles.input, style]}
          placeholderTextColor={colors.black[400]}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          underlineColorAndroid='transparent'
          ref={inputRef}
          {...restOfProps}
        />
        {Boolean(rightIcon) && rightIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 8,
    width: '100%',
  },
  inputContainer: {
    height: 48,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.gray[100],
    paddingLeft: 12,
    paddingRight: 16,
  },
  input: {
    height: '100%',
    width: '100%',
    ...typography.body3,
  },
});
