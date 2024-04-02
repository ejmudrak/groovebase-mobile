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
  error?: any;
  helperText?: string;
  hideOutline?: boolean;
  containerStyle?: object;
  inputContainerStyle?: object;
  inputRef?: any;
  label?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  required?: boolean;
}

export default function TextInput({
  error,
  helperText,
  hideOutline,
  inputContainerStyle,
  inputRef,
  label,
  leftIcon,
  rightIcon,
  required,
  containerStyle,
  style,
  ...restOfProps
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // const hasError = errors && Boolean(errors[name]);

  // let errorMessage = hasError ? (errors[name]?.message as string) : '';

  // if (hasError && !errors[name]?.message && errors[name]?.type === 'required') {
  //   errorMessage = 'Field is required';
  // }

  return (
    <View style={[styles.container, containerStyle]}>
      {Boolean(label) && (
        <Text variant='body3Bold'>
          {label}
          <Text style={styles.requiredText}>{required && ' *'}</Text>
        </Text>
      )}

      <View>
        <View style={[styles.inputContainer, inputContainerStyle]}>
          {Boolean(leftIcon) && leftIcon}
          <RNTextInput
            style={[styles.input, style]}
            placeholderTextColor={colors.black[400]}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            underlineColorAndroid='transparent'
            ref={inputRef}
            maxLength={500}
            autoCorrect={false}
            {...restOfProps}
          />
          {Boolean(rightIcon) && rightIcon}
        </View>

        {Boolean(helperText || error) && (
          <Text variant='body3' color={error ? colors.red[500] : 'inherit'}>
            {error ? error : helperText}
          </Text>
        )}
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
  },
  inputContainer: {
    minHeight: 48,
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
    width: '100%',
    height: '100%',
    fontSize: typography.body2.fontSize,
    fontFamily: typography.body2.fontFamily,
  },
  requiredText: {
    color: 'red',
  },
});
