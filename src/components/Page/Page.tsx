import { colors } from '@src/utils/styles/colors';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NavigationBar from '@src/components/NavigationBar';

interface PageProps {
  authenticated?: boolean;
  children: any;
}

export default function Page({ authenticated, children }: PageProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
      {authenticated && <NavigationBar />}
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
