/*
  @component RecordOptionsButton
  @description 
*/

import { useRoute } from '@react-navigation/native';
import IconButton from 'components/IconButton';
import DotsVerticalIcon from 'components/Icons/DotsVertical';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import { StyleSheet } from 'react-native';
import ActionsModal from 'components/ActionsModal';
import RemoveRecordOption from '../RemoveRecordOption';

export default function RecordOptionsButton() {
  const { params: { record = {} } = {} } = useRoute<any>();

  return (
    <ActionsModal
      title={`What would you like to do?`}
      OpenModalComponent={OptionsButton}
    >
      <RemoveRecordOption recordId={record.id} />
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
