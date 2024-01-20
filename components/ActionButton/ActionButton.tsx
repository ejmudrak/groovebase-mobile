import AddPlusIcon from '../Icons/AddPlusIcon';
import CollectionIcon from '../Icons/CollectionIcon';
import useActionButton from './useActionButton';
import IconButton from 'components/IconButton';
import { View, StyleSheet } from 'react-native';
import { colors } from 'utils/styles/colors';
import ActionsModal from '../ActionsModal';
import ActionItem from '../ActionsModal/components/ActionItem';
import BinIcon from '../Icons/BinIcon';

export interface ActionButtonProps {}

export default function ActionButton({}: ActionButtonProps) {
  const { handleNavigate } = useActionButton();

  return (
    <ActionsModal title={`What's up?`} OpenModalComponent={AddButton}>
      <ActionItem
        icon={<CollectionIcon color={colors.blue[500]} />}
        label='Add record to collection'
        onPress={() => handleNavigate('AddRecordSearch')}
      />
      <ActionItem
        icon={<BinIcon color={colors.blue[500]} />}
        label='Create new bin'
        onPress={() => handleNavigate('AddBin')}
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
  },
  addIcon: {
    transform: [{ rotate: '-45deg' }],
  },
});