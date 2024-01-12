import { colors } from '@src/utils/styles/colors';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import NavigationBar from '@src/components/NavigationBar';
import AuthGuard from '../AuthGuard/AuthGuard';

interface PageProps {
  authenticated?: boolean;
  children: any;
  hideNavBar?: boolean;
}

export default function Page({
  authenticated,
  children,
  hideNavBar,
}: PageProps) {
  return (
    <AuthGuard>
      <SafeAreaView style={styles.safeArea}>
        <View
          style={[styles.container, !hideNavBar && styles.containerWithNavBar]}
        >
          {children}
        </View>
        {authenticated && !hideNavBar && <NavigationBar />}
      </SafeAreaView>
    </AuthGuard>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white[300],
  },
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  containerWithNavBar: {
    paddingBottom: 50,
  },
});
