import { StyleSheet, Pressable } from 'react-native';
import Text from 'components/Text';
import { colors } from 'utils/styles/colors';
import { SvgProps } from 'types';
import { router } from 'expo-router';

interface TabBarItemProps {
  label: string;
  page: string;
  IconComponent: (props: SvgProps) => JSX.Element;
}

export default function TabBarItem({
  label,
  page,
  IconComponent,
}: TabBarItemProps) {
  const isActive = true;

  return (
    <Pressable style={styles.container} onPress={() => router.replace(page)}>
      <IconComponent color={isActive ? colors.blue[500] : colors.blue[200]} />
      <Text
        variant={isActive ? 'body4Bold' : 'body4'}
        color={isActive ? colors.blue[500] : colors.blue[200]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
