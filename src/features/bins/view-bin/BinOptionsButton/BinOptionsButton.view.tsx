/*
  @component BinOptionsButton
  @description 
*/

import { useRoute } from '@react-navigation/native';
import IconButton from '@src/components/IconButton';
import DotsVerticalIcon from '@src/components/Icons/DotsVertical';
import { colors } from '@src/utils/styles/colors';
import { shadows } from '@src/utils/styles/shadows';
import { StyleSheet } from 'react-native';
import ActionsModal from '@src/components/ActionsModal';
import RemoveRecordOption from '../RemoveBinOption';

export default function BinOptionsButton() {
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
    ...shadows[100],
  },
});
