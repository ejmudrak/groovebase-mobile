import AddPlusIcon from '../Icons/AddPlusIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import IconButton from 'components/IconButton';
import { View, StyleSheet } from 'react-native';
import { colors } from 'utils/styles/colors';
import { shadows } from 'utils/styles/shadows';
import ActionsModal from '../ActionsModal';
import ActionItem from '../ActionsModal/components/ActionItem';
import BinIcon from '../Icons/BinIcon';
import { ActionButtonProps } from './ActionButton';

export default function ActionButton({ router }: ActionButtonProps) {
  return (
    <ActionsModal title={`What's up?`} OpenModalComponent={AddButton}>
      <ActionItem
        icon={<CollectionIcon color={colors.blue[500]} />}
        label='Add record to collection'
        onPress={() => router.replace('add-record')}
      />
      <ActionItem
        icon={<BinIcon color={colors.blue[500]} />}
        label='Create new bin'
        onPress={() => router.replace('add-bin')}
      />
    </ActionsModal>
  );
}

const AddButton = ({ onPress }: { onPress: () => void }) => (
  <IconButton style={styles.addButton} onPress={onPress}>
    <View style={styles.addIcon}>
      <AddPlusIcon color={colors.white[500]} />
    </View>
  </IconButton>
);

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: colors.blue[500],
    transform: [{ rotate: '45deg' }],
    width: 56,
    height: 56,
    borderRadius: 20,
    marginBottom: 16,
    ...shadows[500],
    shadowColor: colors.blue[500],
  },
  addIcon: {
    transform: [{ rotate: '-45deg' }],
  },
});
