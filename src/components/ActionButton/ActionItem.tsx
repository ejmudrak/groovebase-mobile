import { Pressable, PressableProps, StyleSheet } from 'react-native';
import IconButton from '@src/components/IconButton';
import Text from '@src/components/Text';
import { colors } from '@src/utils/styles/colors';

export interface ActionItemProps extends PressableProps {
  icon: JSX.Element;
  label: string;
  onPress: any;
  closeModal?: () => void;
}

export default function ActionItem({
  icon,
  label,
  closeModal,
  onPress,
  ...props
}: ActionItemProps) {
  return (
    <Pressable
      style={[styles.container]}
      onPress={() => {
        closeModal && closeModal();
        onPress && onPress();
      }}
      {...props}
    >
      <IconButton style={styles.iconButton}>{icon}</IconButton>

      <Text variant='body2Bold' color={colors.white[500]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    backgroundColor: colors.white[500],
  },
});
