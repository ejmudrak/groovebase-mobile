import ActionItem from './ActionItem';
import AddPlusIcon from '../Icons/AddPlusIcon';
import CloseIcon from '../Icons/CloseIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import Text from '@src/components/Text';
import useActionButton from './useActionButton';
import IconButton from '@src/components/IconButton';
import { View, StyleSheet, Modal } from 'react-native';
import { colors } from '@src/utils/styles/colors';
import { useNavigation } from '@react-navigation/native';

export interface ActionButtonProps {}

export default function ActionButton({}: ActionButtonProps) {
  const navigation = useNavigation();
  const { isActionsModalOpen, openModal, closeModal, handleNavigate } =
    useActionButton();

  return (
    <>
      <IconButton style={styles.addButton} onPress={openModal}>
        <View style={styles.addIcon}>
          <AddPlusIcon color={colors.white[500]} />
        </View>
      </IconButton>

      <Modal
        animationType='slide'
        transparent
        visible={isActionsModalOpen}
        onDismiss={closeModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.actionsContent}>
            <Text variant='h4' color={colors.white[500]}>
              What's up?
            </Text>

            <ActionItem
              icon={<CollectionIcon color={colors.blue[500]} />}
              label='Add record to collection'
              onPress={() => handleNavigate('AddRecordSearch')}
            />
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
  addButton: {
    backgroundColor: colors.blue[500],
    transform: [{ rotate: '45deg' }],
  },
  addIcon: {
    transform: [{ rotate: '-45deg' }],
  },

  modalContent: {
    height: '28%',
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
