import { colors } from 'utils/styles/colors';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';

interface PageProps {
  authenticated?: boolean;
  children: any;
  hideNavBar?: boolean;
}

export default function Page({ children }: PageProps) {
  return <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={[styles.container]}>{children}</KeyboardAvoidingView>;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white[500],
  },
  container: {
    flex: 1,
    backgroundColor: colors.white[300],
  },
  containerWithNavBar: {
    paddingBottom: 50,
  },
});
