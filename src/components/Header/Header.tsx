import { View, StyleSheet } from 'react-native';
import Text from '@src/components/Text';
import IconButton from '@src/components/IconButton';
import BackIcon from '@src/components/Icons/BackIcon';
import { useNavigation } from '@react-navigation/native';
import { shadows } from '@src/utils/styles/shadows';
import { colors } from '@src/utils/styles/colors';

export interface HeaderProps {
  ActionsComponent?: () => JSX.Element; // The component that will be rendered on the right side of the header
  title: string;
  subtitle?: string;
  displayBackButton?: boolean;
  style?: any;
}

export default function Header({
  ActionsComponent = EmptyActionsComponent,
  displayBackButton,
  title,
  style,
  subtitle,
}: HeaderProps) {
  const { goBack, canGoBack, navigate } = useNavigation();

  const handleGoBack = () => {
    if (canGoBack()) {
      goBack();
    } else {
      navigate('Collection' as never);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {displayBackButton && (
        <IconButton onPress={handleGoBack} style={styles.backButton}>
          <BackIcon />
        </IconButton>
      )}
      <View>
        <Text variant='h3'>{title}</Text>
        {subtitle && <Text variant='body3'>{subtitle}</Text>}
      </View>

      <ActionsComponent />
    </View>
  );
}

const EmptyActionsComponent = () => (
  <View style={{ opacity: 0 }}>
    <IconButton>
      <View />
    </IconButton>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white[500],
    borderBottomColor: colors.white[300],
    borderBottomWidth: 1,
    paddingTop: 8,
    paddingLeft: 24,
    paddingRight: 16,
    paddingBottom: 16,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    backgroundColor: colors.white[500],
    borderColor: colors.gray[100],
    borderWidth: 1,
    ...shadows[100],
  },
});
