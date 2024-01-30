import { colors } from 'utils/styles/colors';
import { typography } from 'utils/styles/typography';
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
  required?: boolean;
}

export default function TextInput({
  hideOutline,
  inputContainerStyle,
  inputRef,
  label,
  leftIcon,
  rightIcon,
  required,
  style,
  ...restOfProps
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {Boolean(label) && (
        <Text variant='body3Bold'>
          {label}
          <Text style={styles.requiredText}>{required && ' *'}</Text>
        </Text>
      )}

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
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 8,
  },
  inputContainer: {
    height: 48,
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
    paddingBottom: 0,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: typography.body3.fontSize,
    fontFamily: typography.body3.fontFamily,
  },
  requiredText: {
    color: 'red',
  },
});
