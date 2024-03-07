import Text from 'components/Text/Text';
import { StyleSheet, View } from 'react-native';
import { colors } from 'utils/styles/colors';

export default function Divider({ label }: { label: string }) {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
      <Text color={colors.black[400]}>{label}</Text>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  divider: {
    borderWidth: 0.5,
    borderColor: colors.gray[100],
    width: '40%',
  },
});
