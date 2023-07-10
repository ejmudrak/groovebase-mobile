import { colors } from '@src/utils/styles/colors';
import { StyleSheet, View } from 'react-native';

interface PageProps {
  children: any;
}

export default function Page({ children }: PageProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white[300],
    padding: 16,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
