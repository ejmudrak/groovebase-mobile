import { colors } from '@src/utils/styles/colors';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NavigationBar from '@src/components/NavigationBar';
import AuthGuard from '../AuthGuard/AuthGuard';

interface PageProps {
  authenticated?: boolean;
  children: any;
}

export default function Page({ authenticated, children }: PageProps) {
  return (
    <AuthGuard>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>{children}</View>
        {authenticated && <NavigationBar />}
      </SafeAreaView>
    </AuthGuard>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white[300],
    padding: 16,
  },
});
