import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import { colors } from 'utils/styles/colors';

export interface ActionItemProps extends PressableProps {
  closeModal?: () => void;
  icon: JSX.Element;
  iconButtonStyle?: object;
  isLoading?: boolean;
  label: string;
  onPress: any;
  shouldCloseOnPress?: boolean;
}

export default function ActionItem({
  closeModal,
  icon,
  iconButtonStyle,
  isLoading,
  label,
  onPress,
  shouldCloseOnPress = true,
  ...props
}: ActionItemProps) {
  const handlePress = () => {
    shouldCloseOnPress && closeModal && closeModal();
    onPress && onPress();
  };

  return (
    <Pressable style={[styles.container]} onPress={handlePress} {...props}>
      <IconButton
        style={[styles.iconButton, iconButtonStyle]}
        onPress={handlePress}
      >
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
