import { colors } from '@src/utils/styles/colors';
import { StyleSheet, View, SafeAreaView } from 'react-native';

interface PageProps {
  children: any;
}

export default function Page({ children }: PageProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white[300],
    padding: 16,
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
