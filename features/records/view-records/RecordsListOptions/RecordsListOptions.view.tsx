/*
  @component RecordsListOptions
  @description 
*/

import IconButton from 'components/IconButton';
import DotsVerticalIcon from 'components/Icons/DotsVertical';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import { StyleSheet } from 'react-native';
import ActionsModal from 'components/ActionsModal';
import ActionItem from 'components/ActionsModal/components/ActionItem';
import { RecordsListOptionsProps } from './RecordsListOptions';
import LogoutIcon from 'components/Icons/LogoutIcon';
import TrashIcon from '@components/Icons/TrashIcon';

export default function RecordsListOptions({
  handleDeleteAccount,
  handleLogout,
  isLoggingOut,
}: RecordsListOptionsProps) {
  return (
    <ActionsModal
      title={`What would you like to do?`}
      OpenModalComponent={OptionsButton}
    >
      <ActionItem
        icon={<LogoutIcon color={colors.blue[500]} />}
        label='Log Out'
        onPress={handleLogout}
        isLoading={isLoggingOut}
      />
      <ActionItem
        icon={<TrashIcon color={colors.blue[500]} />}
        label='Delete Account'
        onPress={handleDeleteAccount}
        isLoading={false}
      />
    </ActionsModal>
  );
}

const OptionsButton = ({ onPress }: { onPress: () => void }) => (
  <IconButton onPress={onPress} style={styles.optionsButton}>
    <DotsVerticalIcon />
  </IconButton>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  optionsButton: {
    backgroundColor: colors.white[500],
    borderColor: colors.gray[100],
    borderWidth: 1,
    ...shadows[100],
  },
});
