import { StyleSheet, Pressable } from 'react-native';
import Text from '@src/components/Text';
import { useRoute, useNavigation } from '@react-navigation/native';
import { colors } from '@src/utils/styles/colors';
import { StackParamsList, SvgProps } from '@src/types';

interface NavigationBarItemProps {
  label: string;
  page: keyof StackParamsList;
  IconComponent: (props: SvgProps) => JSX.Element;
}

export default function NavigationBarItem({
  label,
  page,
  IconComponent,
}: NavigationBarItemProps) {
  const route = useRoute();
  const { navigate } = useNavigation();
  const isActive = route.name === label;

  return (
    <Pressable style={styles.container} onPress={() => navigate(page as never)}>
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
