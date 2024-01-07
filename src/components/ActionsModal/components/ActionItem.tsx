import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import IconButton from '@src/components/IconButton';
import Text from '@src/components/Text';
import { colors } from '@src/utils/styles/colors';

export interface ActionItemProps extends PressableProps {
  closeModal?: () => void;
  icon: JSX.Element;
  isLoading?: boolean;
  label: string;
  onPress: any;
}

export default function ActionItem({
  closeModal,
  icon,
  isLoading,
  label,
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
      <IconButton style={styles.iconButton}>
        {isLoading ? <ActivityIndicator color={colors.blue[500]} /> : icon}
      </IconButton>

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
