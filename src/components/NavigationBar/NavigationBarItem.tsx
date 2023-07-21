import { StyleSheet, Pressable } from 'react-native';
import Text from '@src/components/Text';
import { useRoute } from '@react-navigation/native';
import { colors } from '@src/utils/styles/colors';
import { SvgProps } from '@src/types';

interface NavigationBarItemProps {
  label: string;
  IconComponent: (props: SvgProps) => JSX.Element;
}

export default function NavigationBarItem({
  label,
  IconComponent,
}: NavigationBarItemProps) {
  const route = useRoute();
  const isActive = route.name === label;

  return (
    <Pressable style={styles.container}>
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
