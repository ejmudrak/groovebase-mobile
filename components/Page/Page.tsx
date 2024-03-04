import { colors } from 'utils/styles/colors';
import { StyleSheet, View } from 'react-native';

interface PageProps {
  authenticated?: boolean;
  children: any;
  hideNavBar?: boolean;
}

export default function Page({ children }: PageProps) {
  return <View style={[styles.container]}>{children}</View>;
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
