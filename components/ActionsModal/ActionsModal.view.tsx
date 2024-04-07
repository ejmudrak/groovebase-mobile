/*
  @component ActionsModal
  @description 
*/

import IconButton from 'components/IconButton';
import CloseIcon from 'components/Icons/CloseIcon';
import Text from 'components/Text';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import { Modal, StyleSheet, View } from 'react-native';
import { ActionsModalProps } from './ActionsModal';
import React from 'react';

export default function ActionsModal({
  title,
  children,
  isModalOpen,
  closeModal,
  openModal,
  modalStyle,
  actionsStyle,
  OpenModalComponent,
}: ActionsModalProps) {
  // Injects `closeModal` as a prop for all children
  const renderChildren = () => {
    if (!children || React.Children.count(children) === 0) return null;

    return React.Children.map(children, (child) => {
      if (child) {
        return React.cloneElement(child, {
          closeModal,
        });
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <OpenModalComponent onPress={openModal} />

      <Modal
        animationType='slide'
        transparent
        visible={isModalOpen}
        onDismiss={closeModal}
      >
        <View style={[styles.modalContent, modalStyle]}>
          <View style={[styles.actionsContent, actionsStyle]}>
            <Text variant='h4' color={colors.white[500]}>
              {title}
            </Text>

            {renderChildren()}
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
