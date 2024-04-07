/*
  @component RecordsSortButtonView
  @description 
*/

import ActionItem from '@components/ActionsModal/components/ActionItem';
import ActionsModal from 'components/ActionsModal';
import IconButton from 'components/IconButton';
import SortIcon from '@components/Icons/SortIcon';
import { StyleSheet } from 'react-native';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import CheckIcon from '@components/Icons/CheckIcon';

export interface RecordsSortButtonViewProps {
  sortValue: Record<string, 1 | -1>;
  setSortValue: (newSortValue: Record<string, 1 | -1>) => void;
}

const BlueCheckIcon = () => <CheckIcon color={colors.blue[500]} />;
const BlueSortIcon = () => <SortIcon color={colors.white[500]} />;

export default function RecordsSortButtonView({
  sortValue,
  setSortValue,
}: RecordsSortButtonViewProps) {
  return (
    <ActionsModal
      title={`How would you like to sort?`}
      OpenModalComponent={SortButton}
      modalStyle={styles.modalStyle}
    >
      <ActionItem
        label='Album (A to Z)'
        onPress={() => setSortValue({ name: 1 })}
        icon={sortValue.name === 1 ? <BlueCheckIcon /> : <BlueSortIcon />}
        iconButtonStyle={
          sortValue.name === 1
            ? styles.selectedIconButton
            : styles.notSelectedIconButton
        }
      />
      <ActionItem
        label='Album (Z to A)'
        onPress={() => setSortValue({ name: -1 })}
        icon={sortValue.name === -1 ? <BlueCheckIcon /> : <BlueSortIcon />}
        iconButtonStyle={
          sortValue.name === -1
            ? styles.selectedIconButton
            : styles.notSelectedIconButton
        }
      />
      <ActionItem
        label='Artist (A to Z)'
        onPress={() => setSortValue({ artist: 1 })}
        icon={sortValue.artist === 1 ? <BlueCheckIcon /> : <BlueSortIcon />}
        iconButtonStyle={
          sortValue.artist === 1
            ? styles.selectedIconButton
            : styles.notSelectedIconButton
        }
      />
      <ActionItem
        label='Artist (Z to A)'
        onPress={() => setSortValue({ artist: -1 })}
        icon={sortValue.artist === -1 ? <BlueCheckIcon /> : <BlueSortIcon />}
        iconButtonStyle={
          sortValue.artist === -1
            ? styles.selectedIconButton
            : styles.notSelectedIconButton
        }
      />
      <ActionItem
        label='Date Added (Newest first)'
        onPress={() => setSortValue({ createdAt: -1 })}
        icon={sortValue.createdAt === -1 ? <BlueCheckIcon /> : <BlueSortIcon />}
        iconButtonStyle={
          sortValue.createdAt === -1
            ? styles.selectedIconButton
            : styles.notSelectedIconButton
        }
      />
      <ActionItem
        label='Date Added (Oldest first)'
        onPress={() => setSortValue({ createdAt: 1 })}
        icon={sortValue.createdAt === 1 ? <BlueCheckIcon /> : <BlueSortIcon />}
        iconButtonStyle={
          sortValue.createdAt === 1
            ? styles.selectedIconButton
            : styles.notSelectedIconButton
        }
      />
    </ActionsModal>
  );
}

const SortButton = ({ onPress }: { onPress: () => void }) => (
  <IconButton onPress={onPress} style={styles.sortButton}>
    <SortIcon color={colors.black[500]} />
  </IconButton>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  sortButton: {
    marginTop: -16,
    backgroundColor: colors.white[500],
    ...shadows[100],
  },
  modalStyle: {
    height: '62%',
  },
  selectedIconButton: {
    backgroundColor: colors.white[500],
  },
  notSelectedIconButton: {
    backgroundColor: colors.blue[500],
    borderWidth: 1,
    borderColor: colors.white[500],
  },
});
