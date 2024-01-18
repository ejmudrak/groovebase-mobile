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
import RemoveBinOption from '../RemoveBinOption';

export default function BinOptionsButton() {
  const { params: { bin = {} } = {} } = useRoute<any>();

  return (
    <ActionsModal
      title={`What would you like to do?`}
      OpenModalComponent={OptionsButton}
    >
      <RemoveBinOption binId={bin.id} />
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
