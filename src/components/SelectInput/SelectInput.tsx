/*
  @component SelectInput
  @description 
*/

import { View, StyleSheet, Modal, FlatList } from 'react-native';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import { useState } from 'react';
import Text from '../Text/Text';
import { colors } from '@src/utils/styles/colors';
import IconButton from '../IconButton/IconButton';
import CheckIcon from '../Icons/CheckIcon';
import { shadows } from '@src/utils/styles/shadows';
import SelectOption from './SelectOption';

export interface Option {
  label: string;
  value: string;
}
export interface SelectInputProps extends TextInputProps {
  options: Option[];
}

export default function SelectInput({
  options,
  ...restOfProps
}: SelectInputProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState<Option[]>([]);
  const closeModal = () => setIsModalOpen(false);

  const handleConfirm = () => {
    closeModal();
    // update form values
  };

  return (
    <View style={styles.container}>
      <TextInput {...restOfProps} onPressOut={() => setIsModalOpen(true)} />

      <Modal
        animationType='slide'
        transparent
        visible={isModalOpen}
        onDismiss={closeModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text variant='h4'>Select options</Text>

            <IconButton style={styles.confirmButton} onPress={handleConfirm}>
              <CheckIcon color={colors.white[500]} />
            </IconButton>
          </View>

          <FlatList
            data={options}
            renderItem={({ item }) => (
              <SelectOption
                option={item}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            keyExtractor={(item) => item.value}
            style={styles.options}
            ListEmptyComponent={
              <View>
                <Text>No options found.</Text>
              </View>
            }
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },

  modalContent: {
    height: '60%',
    width: '100%',
    backgroundColor: colors.white[500],
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    position: 'absolute',
    bottom: 0,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 12,

    shadowColor: 'rgba(0,0,0)',
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 24,
    shadowOpacity: 0.16,
  },

  modalHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],

    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 16,
  },

  confirmButton: {
    width: 40,
    height: 40,
    backgroundColor: colors.blue[500],
    borderRadius: 16,

    shadowColor: colors.blue[200],
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    shadowOpacity: 0.75,
  },

  options: {
    paddingHorizontal: 20,
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
