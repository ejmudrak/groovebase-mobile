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
import { Platform } from 'react-native';

export interface TextInputProps extends RNTextInputProps {
  label?: string;
  hideOutline?: boolean;
}

export default function TextInput(props: TextInputProps) {
  const { hideOutline, label, style, ...rest } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {Boolean(label) && <Text variant='body3Bold'>{label}</Text>}
      <RNTextInput
        style={[
          styles.input,
          isFocused &&
            !hideOutline &&
            Platform.select({
              web: { outlineColor: colors.blue[500] },
              ios: { borderColor: colors.blue[500] },
              android: { borderColor: colors.blue[500] },
            }),
          style,
        ]}
        placeholderTextColor={colors.black[400]}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        underlineColorAndroid='transparent'
        {...rest}
      />
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
  input: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.gray[100],
    padding: 12,
    width: '100%',
    height: 48,
    ...typography.body3,
  },
});
