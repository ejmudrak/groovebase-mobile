import { View, StyleSheet } from 'react-native';
import Text from '@src/components/Text';
import IconButton from '@src/components/IconButton';
import BackIcon from '@src/components/Icons/BackIcon';
import { useNavigation } from '@react-navigation/native';
import { shadows } from '@src/utils/styles/shadows';
import { colors } from '@src/utils/styles/colors';

export interface HeaderProps {
  title: string;
  displayBackButton?: boolean;
  style?: any;
}

export default function Header({
  displayBackButton,
  title,
  style,
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
      <Text variant='h3'>{title}</Text>

      <View style={{ opacity: 0 }}>
        <IconButton>
          <View />
        </IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 24,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    backgroundColor: colors.white[500],
    ...shadows[100],
  },
});
