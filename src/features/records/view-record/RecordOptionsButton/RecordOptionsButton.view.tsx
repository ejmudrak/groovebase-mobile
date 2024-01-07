/*
  @component RecordOptionsButton
  @description 
*/

import { useRoute } from '@react-navigation/native';
import IconButton from '@src/components/IconButton';
import CloseIcon from '@src/components/Icons/CloseIcon';
import DotsVerticalIcon from '@src/components/Icons/DotsVertical';
import Text from '@src/components/Text';
import { colors } from '@src/utils/styles/colors';
import { shadows } from '@src/utils/styles/shadows';
import { Modal, StyleSheet, View } from 'react-native';
import { RecordOptionsButtonProps } from './RecordOptionsButton';

export default function RecordOptionsButton({
  isOptionsModalOpen,
  closeModal,
  openModal,
}: RecordOptionsButtonProps) {
  const { params: { record = {} } = {} } = useRoute<any>();
  const handleRemoveRecord = () => {};

  return (
    <>
      <IconButton onPress={openModal} style={styles.optionsButton}>
        <DotsVerticalIcon />
      </IconButton>

      <Modal
        animationType='slide'
        transparent
        visible={isOptionsModalOpen}
        onDismiss={closeModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.actionsContent}>
            <Text variant='h4' color={colors.white[500]}>
              Record Options
            </Text>

            {/* <ActionItem
              icon={<CollectionIcon color={colors.blue[500]} />}
              label='Remove record from collection'
              onPress={handleRemoveRecord}
            /> */}
          </View>

          <IconButton style={styles.closeButton} onPress={closeModal}>
            <View style={styles.closeIcon}>
              <CloseIcon color={colors.blue[500]} />
            </View>
          </IconButton>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  optionsButton: {
    backgroundColor: colors.white[500],
    ...shadows[100],
  },
  modalContent: {
    height: '33%',
    width: '100%',
    backgroundColor: colors.blue[500],
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    position: 'absolute',
    bottom: 0,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 32,
    paddingBottom: 24,
  },

  actionsContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
  },

  closeButton: {
    alignSelf: 'center',
    backgroundColor: colors.white[500],
    transform: [{ rotate: '45deg' }],
  },
  closeIcon: {
    transform: [{ rotate: '-45deg' }],
  },
});
