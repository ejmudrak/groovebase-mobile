import Button from '@src/components/Button';
import Text from '@src/components/Text/Text';
import TextInput from '@src/components/TextInput/TextInput';
import { colors } from '@src/utils/styles/colors';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function SignupForm() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <View>
      <Text>Sign Up</Text>
    </View>
  );
}
