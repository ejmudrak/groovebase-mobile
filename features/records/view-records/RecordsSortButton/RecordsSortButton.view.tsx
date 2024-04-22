/*
  @component RecordsSortButtonView
  @description 
*/

import ActionItem from '@components/ActionsModal/components/ActionItem';
import ActionsModal from 'components/ActionsModal';
import IconButton from 'components/IconButton';
import SortIcon from '@components/Icons/SortIcon';
import PlaceholderCircleIcon from '@components/Icons/PlaceholderCircleIcon';
import { StyleSheet } from 'react-native';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import CheckCircleIcon from '@components/Icons/CheckCircleIcon';

export interface RecordsSortButtonViewProps {
  sortValue?: Record<string, 1 | -1>;
  setSortValue: (newSortValue: Record<string, 1 | -1>) => void;
}

const ASCENDING = 1;
const DESCENDING = -1;

const sortOptions = [
  {
    label: 'Album (A to Z)',
    sortProperty: 'name',
    sortDirection: ASCENDING,
  },
  {
    label: 'Album (Z to A)',
    sortProperty: 'name',
    sortDirection: DESCENDING,
  },
  {
    label: 'Artist (A to Z)',
    sortProperty: 'artist',
    sortDirection: ASCENDING,
  },
  {
    label: 'Artist (Z to A)',
    sortProperty: 'artist',
    sortDirection: DESCENDING,
  },
  {
    label: 'Date Added (newest first)',
    sortProperty: 'createdAt',
    sortDirection: DESCENDING,
  },
  {
    label: 'Date Added (oldest first)',
    sortProperty: 'createdAt',
    sortDirection: ASCENDING,
  },
] as const;

const BlueCheckIcon = () => <CheckCircleIcon color={colors.blue[500]} />;
const WhitePlaceholderIcon = () => (
  <PlaceholderCircleIcon color={colors.white[500]} />
);

export default function RecordsSortButtonView({
  sortValue = {},
  setSortValue,
}: RecordsSortButtonViewProps) {
  return (
    <ActionsModal
      title={`How would you like to sort?`}
      OpenModalComponent={SortButton}
      modalStyle={styles.modalStyle}
    >
      {sortOptions.map(({ label, sortProperty, sortDirection }) => (
        <ActionItem
          key={label}
          label={label}
          onPress={() => setSortValue({ [sortProperty]: sortDirection })}
          icon={
            sortValue[sortProperty] === sortDirection ? (
              <BlueCheckIcon />
            ) : (
              <WhitePlaceholderIcon />
            )
          }
          iconButtonStyle={
            sortValue[sortProperty] === sortDirection
              ? styles.selectedIconButton
              : styles.notSelectedIconButton
          }
        />
      ))}
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
    backgroundColor: 'transparent',
  },
});
