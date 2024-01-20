import Button from 'components/Button';
import Text from 'components/Text/Text';
import TextInput from 'components/TextInput/TextInput';
import { colors } from 'utils/styles/colors';
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
