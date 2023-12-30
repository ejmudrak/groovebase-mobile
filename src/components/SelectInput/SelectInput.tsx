/*
  @component SelectInput
  @description 
*/

import { View, StyleSheet, Modal, FlatList } from 'react-native';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import Text from '../Text/Text';
import { colors } from '@src/utils/styles/colors';
import IconButton from '../IconButton/IconButton';
import CheckIcon from '../Icons/CheckIcon';
import SelectOption from './SelectOption';
import useSelectInput from './useSelectInput';

export interface Option {
  label: string;
  value: string;
}
export interface SelectInputProps
  extends Omit<TextInputProps, 'value' | 'onChange'> {
  options: Option[];
  onChange: (newValue: Option[]) => void;
  value: Option[];
  multiple?: boolean;
  required?: boolean;
}

export default function SelectInput({
  label,
  multiple,
  options,
  onChange,
  value,
  ...restOfProps
}: SelectInputProps) {
  const {
    closeModal,
    getFormattedValue,
    handleConfirm,
    isModalOpen,
    inputRef,
    selected,
    setIsModalOpen,
    setSelected,
  } = useSelectInput({ value, onChange });

  return (
    <View style={styles.container}>
      <TextInput
        inputRef={inputRef}
        label={label}
        {...restOfProps}
        onFocus={() => {
          setIsModalOpen(true);
          inputRef.current.blur();
        }}
        value={getFormattedValue(value)}
      />

      <Modal
        animationType='slide'
        transparent
        visible={isModalOpen}
        onDismiss={() => {
          closeModal();
        }}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text variant='h4'>Select {label}</Text>

            <IconButton
              style={styles.confirmButton}
              onPress={() => handleConfirm(selected)}
            >
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
                multiple={multiple}
                handleConfirm={handleConfirm}
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
